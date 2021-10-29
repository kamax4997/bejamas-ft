import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import Home from './index';
import store from '../../redux/store';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
    it('Renders HomeView without crashing', () => {
        shallow(<Provider store={store}><Home /></Provider>);
    });

    it('Renders toggle button, tag input, user information', () => {
        const wrapper = mount(<Provider store={store}><Home /></Provider>);

        expect(wrapper.find(`input[id='nameInput']`)).toHaveLength(1);
        expect(wrapper.find(`input[id='tagInput']`)).toHaveLength(1);
    });
});
