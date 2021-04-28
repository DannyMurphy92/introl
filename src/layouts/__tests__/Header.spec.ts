import Header from '@/layouts/Header.vue';
import { Wrapper, shallowMount } from '@vue/test-utils';

describe('Header', () => {
  let wrapper: Wrapper<any>;

  const mountComponent = () => {
    wrapper = shallowMount(Header);
  };

  beforeEach(() => {
    mountComponent();
  });

  it('THEN renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('THEN renders the logo', () => {
    expect(wrapper.find('.header__logo').exists()).toBe(true);
  });

  it('THEN a contact component', () => {
    expect(wrapper.find('.header__contact').exists()).toBe(true);
  });
});
