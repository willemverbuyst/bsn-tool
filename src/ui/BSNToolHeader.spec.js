import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import BSNToolHeader from "./BSNToolHeader.vue";

describe("BSNToolHeader.vue", () => {
  it("renders the title prop correctly", () => {
    const wrapper = mount(BSNToolHeader, {
      props: {
        title: "Hello Vitest",
      },
    });

    expect(wrapper.text()).toContain("Hello Vitest");
  });

  it("renders an h1 inside a header", () => {
    const wrapper = mount(BSNToolHeader, { props: { title: "Header Title" } });

    const header = wrapper.find("header");
    const h1 = wrapper.find("h1");

    expect(header.exists()).toBe(true);
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe("Header Title");
  });
});
