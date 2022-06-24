import { render, cleanup } from "@testing-library/react";
import { Data } from "../../types";
import Card from "./";

afterEach(cleanup);

const props: Data = {
  name: "test.name",
  jobTitle: "test.jobTitle",
  favoriteFood: "test.favoriteFood",
  avatar: "test-img.png",
};

describe("test Card component", () => {
  it("Card render avatar", () => {
    render(<Card data={props} />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("test-img");
  });

  it("Card component render correctly name", () => {
    const { getByText } = render(<Card data={props} />);
    const nameElement = getByText(/test.name/i);
    expect(nameElement).toBeInTheDocument();
  });

  it("Card component render correctly title", () => {
    const { getByText } = render(<Card data={props} />);
    const titleElement = getByText(/test.jobTitle/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("Card component render correctly food", () => {
    const { getByText } = render(<Card data={props} />);
    const foodElement = getByText(/test.favoriteFood/i);
    expect(foodElement).toBeInTheDocument();
  });
});
