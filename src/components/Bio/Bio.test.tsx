import { render, cleanup } from "@testing-library/react";
import Bio from "./";

afterEach(cleanup);

const props = {
  name: "test.name",
  title: "test.jobTitle",
  food: "test.favoriteFood",
};

describe("test Bio component", () => {
  it("Bio component render correctly name", () => {
    const { getByText } = render(<Bio {...props} />);
    const nameElement = getByText(/test.name/i);
    expect(nameElement).toBeInTheDocument();
  });

  it("Bio component render correctly title", () => {
    const { getByText } = render(<Bio {...props} />);
    const titleElement = getByText(/test.jobTitle/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("Bio component render correctly food", () => {
    const { getByText } = render(<Bio {...props} />);
    const foodElement = getByText(/test.favoriteFood/i);
    expect(foodElement).toBeInTheDocument();
  });
});
