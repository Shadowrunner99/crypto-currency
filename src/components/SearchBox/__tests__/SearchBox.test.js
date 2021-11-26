import React from 'react';
import SearchBox from '../SearchBox';
import { mount } from 'enzyme';

describe('<SearchBox />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      handleChangeSearch: jest.fn(),
    };
  });

  it('should be defined', () => {
    expect(<SearchBox {...defaultProps} />).toBeDefined();
  });

  it('should render', () => {
    const wrapper = mount(<SearchBox {...defaultProps} />);
    expect(wrapper).toBeDefined();
  });

  it('should call handleChangeSearch on SearchBox change', () => {
    const wrapper = mount(<SearchBox {...defaultProps} />);
    wrapper
      .children()
      .props()
      .onChange({
        target: {
          value: 'value',
        },
      });
    expect(defaultProps.handleChangeSearch).toHaveBeenCalledWith('value');
  });
});
