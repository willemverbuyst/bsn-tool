import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import BSNToolButton from "./BSNToolButton.vue";

describe("BSNToolButton.vue", () => {
  it("renders the caption prop correctly", () => {
    const wrapper = mount(BSNToolButton, {
      props: { caption: "Click Me" },
    });

    // Check text content
    expect(wrapper.text()).toBe("Click Me");

    // Check that it actually renders a <button>
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.attributes("type")).toBe("button");
  });

  it('emits "handle-click" event when clicked', async () => {
    const wrapper = mount(BSNToolButton, {
      props: { caption: "Click Me" },
    });

    const button = wrapper.find("button");
    await button.trigger("click");

    // Check the event emission
    expect(wrapper.emitted()).toHaveProperty("handle-click");
    expect(wrapper.emitted()["handle-click"].length).toBe(1);
  });
});
