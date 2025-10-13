import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../store", () => ({
  store: {
    bsn: "",
    bsnIsValid: false,
    resetValidation: vi.fn(),
  },
}));

// --- Mock clipboard API globally ---
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

import { store } from "../store";
import BsnInput from "./BsnInput.vue";

describe("BsnInput.vue", () => {
  beforeEach(() => {
    store.bsn = "";
    store.bsnIsValid = false;
    store.resetValidation.mockClear();
    navigator.clipboard.writeText.mockClear();
    vi.useFakeTimers(); // For controlling setTimeout
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders input with correct attributes", () => {
    const wrapper = mount(BsnInput);
    const input = wrapper.find("input");

    expect(input.exists()).toBe(true);
    expect(input.attributes("type")).toBe("text");
    expect(input.attributes("name")).toBe("bsn");
    expect(input.attributes("aria-label")).toBe("bsn");
    expect(input.attributes("placeholder")).toBe("enter bsn");
  });

  it("updates store.bsn when typing (v-model)", async () => {
    const wrapper = mount(BsnInput);
    const input = wrapper.find("input");

    await input.setValue("123456789");
    expect(store.bsn).toBe("123456789");
  });

  it("calls store.resetValidation() on input", async () => {
    const wrapper = mount(BsnInput);
    const input = wrapper.find("input");

    await input.trigger("input");
    expect(store.resetValidation).toHaveBeenCalledTimes(1);
  });

  it("does not render copy button when store.bsnIsValid is false", () => {
    store.bsnIsValid = false;
    const wrapper = mount(BsnInput);

    expect(wrapper.find("button").exists()).toBe(false);
  });

  it("renders copy button when store.bsnIsValid is true", () => {
    store.bsnIsValid = true;
    const wrapper = mount(BsnInput);

    const button = wrapper.find('button[aria-label="copy-button"]');
    expect(button.exists()).toBe(true);
    const icon = wrapper.find("#bsn__copy-icon");
    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain("pi");
    expect(icon.classes()).toContain("pi-copy");
  });

  it("calls navigator.clipboard.writeText and toggles icon on click", async () => {
    store.bsn = "999888777";
    store.bsnIsValid = true;

    const wrapper = mount(BsnInput);
    const button = wrapper.find("button");

    // Initially shows "copy" icon
    expect(wrapper.find(".pi-copy").exists()).toBe(true);
    expect(wrapper.find(".pi-clipboard").exists()).toBe(false);

    // Click the button → should copy text and toggle icons
    await button.trigger("click");

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("999888777");

    // After click, "isCopied" = true
    expect(wrapper.find(".pi-clipboard").exists()).toBe(true);
    expect(wrapper.find(".pi-copy").exists()).toBe(false);

    // Advance timers by 2s → should revert
    await vi.runAllTimersAsync();

    expect(wrapper.find(".pi-copy").exists()).toBe(true);
    expect(wrapper.find(".pi-clipboard").exists()).toBe(false);
  });

  it("handles clipboard errors gracefully", async () => {
    // Mock clipboard failure
    navigator.clipboard.writeText.mockRejectedValueOnce(new Error("fail"));
    store.bsn = "123";
    store.bsnIsValid = true;

    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const wrapper = mount(BsnInput);
    const button = wrapper.find("button");

    await button.trigger("click");

    expect(navigator.clipboard.writeText).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining("Failed to copy: "),
      expect.any(Error),
    );

    errorSpy.mockRestore();
  });
});
