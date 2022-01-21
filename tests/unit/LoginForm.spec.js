import LoginForm from "@/components/LoginForm";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with user data payload", async () => {
    const wrapper = mount(LoginForm);
    await wrapper.get("input[type='text']").setValue("user");
    await wrapper.trigger("submit");

    // test emit
    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);

    // test payload
    const expectedPayload = { name: "user" };
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload);
  });
});
