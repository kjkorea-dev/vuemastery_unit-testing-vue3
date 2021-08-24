import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader', () => {
  test('if a user is not logged in, do now show logout button', () => {
    const wrapper = mount(AppHeader)

    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('if a user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)

    await wrapper.setData({ loggedIn: true })

    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
