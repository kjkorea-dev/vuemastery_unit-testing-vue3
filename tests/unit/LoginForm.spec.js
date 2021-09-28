import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    // const input = wrapper.find('input[type="text"]')
    const input = wrapper.find('[data-testid="name-input"]')

    input.setValue('So Good')
    wrapper.trigger('submit')

    const formSubmitedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmitedCalls).toHaveLength(1)

    const expectedPayload = { name: 'So Good' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
