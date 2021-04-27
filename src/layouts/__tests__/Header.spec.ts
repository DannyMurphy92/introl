import Header from '../Header.vue';
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
    expect(wrapper.findComponent({ name: 'Logo' }).exists()).toBe(true);
  });
});
