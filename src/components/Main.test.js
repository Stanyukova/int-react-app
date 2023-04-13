import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import userEvent from "@testing-library/user-event";

describe("test search", () => {
  const setup = () => {
    const utils = render(
        <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    );
    const input = screen.getByTestId('priceValue');
    return {
      input,
      ...utils,
    };
  };
  const { input } = setup();
  test("input value not a string", () => {
    fireEvent.change(input, { target: { value: "string" } });
    expect(input.value).not.toBe("string");
    expect(input.value).toBe("");
  });
  test("input value is number", () => {
    fireEvent.change(input, { target: { value: 430 } });
    expect(input.type).toBe("number");
    expect(input.type).not.toBe("text");
    expect(input.value).toBe("430");
  });

});
describe("events", () => {
    test("checkbox click", () => {
        const chengeValue = jest.fn();
        const {container} = render(<input type="checkbox" name="radio"    
        onChange={chengeValue} />)
        // eslint-disable-next-line testing-library/no-node-access
        const checkbox = container.firstChild;
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
      });

      test("double click", () => {
        const changeValue = jest.fn();
        const {container} = render(<input type="checkbox" name="radio"    
        onChange={changeValue} />)
        // eslint-disable-next-line testing-library/no-node-access
        const checkbox = container.firstChild;
        expect(checkbox).not.toBeChecked();
        userEvent.dblClick(checkbox);
        expect(changeValue).toHaveBeenCalledTimes(2);
      });
})

