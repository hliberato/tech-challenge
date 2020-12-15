import { mount } from '@vue/test-utils'
import GenerationCard from '@/components/GenerationCard.vue'
import PokemonIcon from '@/components/PokemonIcon.vue'

describe('GenerationCard.vue', () => {
  const goToGeneration = jest.fn()
  const wrapper = mount(GenerationCard, {
    propsData: {
      generation: {
        display_name: 'Generation',
        pokemon_species: []
      }
    },
    stubs: {
      'pokemon-icon': PokemonIcon,
      'el-card': true
    },
    methods: {
      goToGeneration
    }
  })

  it('should render generation card with icon', () => {
    const img = wrapper.find('img')
    expect(img.exists()).toBeTruthy()
  })

  it('should call "goToGeneration" method wuen clicked', async () => {
    await wrapper.trigger('click')
    expect(goToGeneration).toBeCalled()
  })
})
