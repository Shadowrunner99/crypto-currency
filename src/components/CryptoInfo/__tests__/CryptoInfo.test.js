import React from "react";
import { mount, shallow } from "enzyme";
import CryptoInfo from "../CryptoInfo";

describe("<CryptoInfo/>", () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            title: "title",
            currency: "curr",
            sell: 100,
            buy: 110,
            change: 10,
        }
    });

    it('should render',() => {
        const wrapper = shallow(<CryptoInfo {...defaultProps}/>);
        expect(wrapper).toBeDefined();
    });

})