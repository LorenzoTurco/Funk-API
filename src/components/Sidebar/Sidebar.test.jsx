import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

it("should render the sidebar and it's components", () => {
  render(<Sidebar />);

  const sidebar = screen.getByRole("textbox");
  const heading = screen.getByRole("heading");
  const filters = screen.getAllByRole("checkbox");

  expect(sidebar).toBeInTheDocument();
  expect(heading).toBeInTheDocument();

  filters.forEach((filter) => {
    expect(filter).toBeInTheDocument();
  });
});
