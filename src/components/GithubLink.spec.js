import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import GithubLink from "./GithubLink.vue";

describe("GithubLink.vue", () => {
  it('renders a section with class "link"', () => {
    const wrapper = mount(GithubLink);
    const section = wrapper.find("section.link");

    expect(section.exists()).toBe(true);
  });

  it("renders an anchor with correct attributes", () => {
    const wrapper = mount(GithubLink);
    const link = wrapper.find("a");

    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toBe(
      "https://github.com/willemverbuyst/bsn-tool",
    );
    expect(link.attributes("target")).toBe("_blank");
    expect(link.attributes("rel")).toBe("noreferrer");
    expect(link.attributes("aria-labelledby")).toBe("gh-icon");
  });

  it("contains a GitHub icon element", () => {
    const wrapper = mount(GithubLink);
    const icon = wrapper.find("i");

    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain("fab");
    expect(icon.classes()).toContain("fa-github");
    expect(icon.classes()).toContain("icon__github");
  });
});
