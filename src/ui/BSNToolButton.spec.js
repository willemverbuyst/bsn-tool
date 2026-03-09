import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import BSNToolButton from "./BSNToolButton.vue";

describe("BSNToolButton.vue", () => {
  it('emits "handle-click" event when clicked', async () => {
    const wrapper = mount(BSNToolButton, {
      props: { caption: "Click Me" },
    });

    const button = wrapper.find("button", { props: { caption: "Click Me" } });
    await button.trigger("click");

    // Check the event emission
    expect(wrapper.emitted()).toHaveProperty("handle-click");
    expect(wrapper.emitted()["handle-click"].length).toBe(1);
  });
});
