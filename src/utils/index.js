import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import { middlewares } from '../createStore';
import rootReducer from '../reducers';
import { element } from 'prop-types';

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const findByElementTestAttr = (component, element, attr) => {
    console.log(component.debug())
    const wrapper = component.find(`[a data-test='${attr}']`);
    console.log(wrapper.debug())
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer,{mediaurls: initialState});
}