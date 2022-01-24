import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'
import serializer from 'jest-serializer-vue-tjw'

beforeEach(() => {
  // inline register serializer
  expect.addSnapshotSerializer(serializer)
})

describe('AppHeader', () => {
  test('if user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('if logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedIn: true })

    expect(wrapper.find('button').isVisible()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('if user is initially logged out and logs in', () => {
    const wrapper = mount(AppHeader)
    // with snapshot name (when using multiple)
    expect(wrapper.html()).toMatchSnapshot("initial")

    wrapper.setData({ loggedIn: true })

    expect(wrapper.html()).toMatchSnapshot("logged in")
  })
})
