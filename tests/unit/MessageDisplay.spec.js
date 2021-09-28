import { flushPromises, mount } from '@vue/test-utils'
import MessageDisplay from '@/components/MessageDisplay.vue'
import { getMessage } from '@/services/axios'

jest.mock('@/services/axios')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage once and displays message', async () => {
    const mockMessage = 'Hello from the db!'
    getMessage.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(MessageDisplay)

    await flushPromises()

    expect(getMessage).toHaveBeenCalledTimes(1)
    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual(mockMessage)
  })
  it('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong'
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)

    await flushPromises()

    expect(getMessage).toHaveBeenCalledTimes(1)
    const displayedError = await wrapper
      .find('[data-testid="message-error"]')
      .text()

    expect(displayedError).toEqual(mockError)
  })
})
