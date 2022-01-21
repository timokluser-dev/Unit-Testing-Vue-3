import RandomNumber from "@/components/RandomNumber";
import { mount } from "@vue/test-utils";

describe("RandomNumber", () => {
  it("if button is clicked, randomNumber should be between 1 and 10", () => {
    const wrapper = mount(RandomNumber);
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.$data.randomNumber).toBeGreaterThanOrEqual(1);
    expect(wrapper.vm.$data.randomNumber).toBeLessThanOrEqual(10);
  });

  it("if button is clicked, randomNumber should be between 200 and 300", async () => {
    // const wrapper = mount(RandomNumber);
    // await wrapper.setData({ min: 200, max: 300 });

    const wrapper = mount(RandomNumber, {
      data() {
        return {
          min: 200,
          max: 300
        };
      }
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.$data.randomNumber).toBeGreaterThanOrEqual(200);
    expect(wrapper.vm.$data.randomNumber).toBeLessThanOrEqual(300);
  });
});
