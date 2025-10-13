import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../store", () => ({
  store: {
    bsn: "",
    bsnHasBeenValidated: false,
    bsnIsValid: false,
  },
}));

import { store } from "../store";
import FeedbackMessage from "./FeedbackMessage.vue";

describe("FeedbackMessage.vue", () => {
  beforeEach(() => {
    // Reset mock store before each test
    store.bsn = "";
    store.bsnHasBeenValidated = false;
    store.bsnIsValid = false;
  });

  it("does not render anything when BSN or validation flag is missing", () => {
    const wrapper = mount(FeedbackMessage);
    expect(wrapper.find("#feedback").exists()).toBe(false);
  });

  it("renders valid feedback when BSN is valid and validated", async () => {
    store.bsn = "123456789";
    store.bsnHasBeenValidated = true;
    store.bsnIsValid = true;

    const wrapper = mount(FeedbackMessage);

    const feedback = wrapper.find("#feedback");
    expect(feedback.exists()).toBe(true);
    expect(feedback.text()).toBe("this is a valid bsn");
    expect(feedback.classes()).toContain("valid");
    expect(feedback.classes()).not.toContain("invalid");
  });

  it("renders invalid feedback when BSN is invalid but validated", async () => {
    store.bsn = "987654321";
    store.bsnHasBeenValidated = true;
    store.bsnIsValid = false;

    const wrapper = mount(FeedbackMessage);

    const feedback = wrapper.find("#feedback");
    expect(feedback.exists()).toBe(true);
    expect(feedback.text()).toBe("this bsn is not valid");
    expect(feedback.classes()).toContain("invalid");
    expect(feedback.classes()).not.toContain("valid");
  });
});
