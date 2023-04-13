import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Search } from "./Search";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../redux/store";
describe("test search", () => {
  const setup = () => {
    const utils = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText(/Поиск.../i);
    return {
      input,
      ...utils,
    };
  };
  const { input } = setup();
  test("input exists in the document ", () => {
    expect(input).toBeInTheDocument();
  });
  test("input snapshot ", () => {
    expect(input).toMatchSnapshot();
  });
  test("input has attributes ", () => {
    expect(input).toHaveAttribute("type");
  });

  test("input value", () => {
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
});
