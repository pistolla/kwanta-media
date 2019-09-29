import SearchLink from './SearchLink';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils';

const setup = (props = {}) => {
    const component = shallow(<SearchLink {...props} />);

    return component;
}

describe('SearchLink Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });
        it('Should render', () => {
            const component = findByTestAttr(wrapper, 'SearchLinkComponent');
            expect(component.length).toBe(1);
        });
    })
    describe('Renders', () => {

    })
    describe('Check Proptypes', () => {
        
    })
});
