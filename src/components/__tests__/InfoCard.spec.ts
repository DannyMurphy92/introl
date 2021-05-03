import InfoCard from '../InfoCard.vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

describe('InfoCard', () => {
  let wrapper: Wrapper<any>;

  const propsData = {
    header: 'Test header',
    body: 'Test body',
  };

  const mountComponent = () => {
    wrapper = shallowMount(InfoCard, { propsData });
  };
  describe('GIVEN initial state', () => {
    beforeEach(() => {
      mountComponent();
    });

    it('THEN renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
