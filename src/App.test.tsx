import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import store from "./redux/redux-store";

test("renders learn react link", () => {
  render(<App state={store} dispatch={store.dispatch} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
