import { shallowMount, mount } from '@vue/test-utils'
import PokemonIcon from '@/components/PokemonIcon.vue'

describe('PokemonIcon.vue', () => {
  it('should render default icon when no name passed', () => {
    const wrapper = shallowMount(PokemonIcon)
    const img = wrapper.find('img')
    expect(img.exists()).toBeTruthy()
  })

  it('should validate sizes values ["large", "medium", "small", "mini"]', () => {
    const wrapper = shallowMount(PokemonIcon)
    const validator = wrapper.vm.$options.props.size.validator
    expect(validator('large')).toBeTruthy()
    expect(validator('medium')).toBeTruthy()
    expect(validator('small')).toBeTruthy()
    expect(validator('mini')).toBeTruthy()
  })

  it('should invalidate unrecognized sizes', () => {
    const wrapper = shallowMount(PokemonIcon)
    const validator = wrapper.vm.$options.props.size.validator
    expect(validator('super-large')).toBeFalsy()
    expect(validator('xs')).toBeFalsy()
  })

  it('should render proper icon by name passed', async () => {
    const name = 'psyduck'
    const wrapper = mount(PokemonIcon)
    await wrapper.setProps({ name })
    expect(wrapper.attributes().src).toContain(name)
  })
})
