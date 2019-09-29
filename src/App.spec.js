import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './utils';
import App from './App';

const setup = (props={}) => {
    const component = shallow(<App {...props}/>);
    return component;
}
describe('App Component', () => {

    // describe('Checking prop types', () => {

    //     describe('Should not throw a warning', () => {
    //         const expectedProps = {

    //         }
    //         const propRes = checkProps(App, expectedProps);
    //         expect(propRes).toBeUndefined();
    //     })
    // })

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'AppComponent');
            expect(component.length).toBe(1);
        })
    })
})
