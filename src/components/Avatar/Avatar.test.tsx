import { render } from "@testing-library/react";
import Avatar from "./";

it("Avatar render image", () => {
  render(<Avatar url="test-img.png" />);
  const displayedImage = document.querySelector("img") as HTMLImageElement;
  expect(displayedImage.src).toContain("test-img");
});
