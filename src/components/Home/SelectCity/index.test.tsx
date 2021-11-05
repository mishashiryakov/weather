import React from "react";
import { shallow, render, mount } from "enzyme";
import { SelectCity } from "./index";

const setSelectedCityMock = jest.fn();

const MOCK_PROPS = {
  cities: ["Minsk", "Moscow", "Bratislava"],
  setSelectedCity: setSelectedCityMock,
  selectedCity: "Minsk",
};

describe("SelectCity component", () => {
  it("should render 3 buttons", function () {
    const wrapper = shallow(<SelectCity {...MOCK_PROPS} />);
    expect(wrapper.find("button")).toHaveLength(3);
  });

  it("should match snapshot with 3 buttons", function () {
    const wrapper = shallow(<SelectCity {...MOCK_PROPS} />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it("should call setSelectedCity function on button Click", () => {
    const wrapper = shallow(<SelectCity {...MOCK_PROPS} />);
    wrapper.find('.selected').simulate('click');
    expect(setSelectedCityMock).toHaveBeenCalledTimes(1)
  })
});
