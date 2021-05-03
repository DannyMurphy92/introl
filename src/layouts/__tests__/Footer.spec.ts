import Footer from '../Footer.vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

describe('Footer', () => {
  let wrapper: Wrapper<any>;
  const mockDate = new Date('1999-01-02T00:00:00Z');

  const mountComponent = () => {
    wrapper = shallowMount(Footer);
  };

  beforeEach(() => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => mockDate.valueOf());
    mountComponent();
  });

  it('Then renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('THEN should render the legal text correctly', () => {
    expect(wrapper.find('.footer__legal').text()).toBe('Copyright © Introl 1999. All rights reserved.');
  });
});
