import InfoCard from '../InfoCard.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { shallowMount, Wrapper } from '@vue/test-utils';

describe('InfoCard', () => {
  let wrapper: Wrapper<any>;

  const propsData = {
    header: 'Test header',
    body: 'Test body',
    icon: undefined,
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

    it('THEN does not render an icon block', () => {
      expect(wrapper.findComponent(FontAwesomeIcon).exists()).toBe(false);
    });

    describe('GIVEN an icon', () => {
      const mockIcon = { style: 'tet-style', icon: 'test-icon' };
      beforeEach(() => {
        (propsData.icon as any) = mockIcon;
        mountComponent();
      });

      it('THEN renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('THEN renders the icon', () => {
        expect(wrapper.findComponent(FontAwesomeIcon).exists()).toBe(true);
      });
    });
  });
});
