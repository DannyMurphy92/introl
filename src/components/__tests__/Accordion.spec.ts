import Accordion from '@/components/Accordion.vue';
import { mount, Wrapper } from '@vue/test-utils';

describe('Accordion', () => {
  let wrapper: Wrapper<any>;

  const headerElement = '<div id="header">Test header</div>';
  const bodyElement = '<div id="body">Test body</div>';

  const mountComponent = () => {
    wrapper = mount(Accordion, {
      slots: {
        header: headerElement,
        body: bodyElement,
      },
    });
  };

  beforeEach(() => {
    mountComponent();
  });

  it('THEN renders the header element', () => {
    const header = wrapper.find('#header');
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe('Test header');
  });

  it('THEN renders the body hidden', () => {
    const body = wrapper.find('#body');
    expect(body.exists()).toBe(true);
    expect(body.text()).toBe('Test body');
    expect(body.isVisible()).toBe(false);
  });

  describe('WHEN click accordion header', () => {
    beforeEach(() => {
      wrapper.find('.accordion__header').trigger('click');
    });

    it('THEN renders the body as visible', () => {
      const body = wrapper.find('#body');
      expect(body.exists()).toBe(true);
      expect(body.text()).toBe('Test body');
      expect(body.isVisible()).toBe(true);
    });

    it('THEN adds the open modifier class to the icon', () => {
      expect(wrapper.find('.accordion__header__icon--open').exists()).toBe(true);
    });
  });
});
