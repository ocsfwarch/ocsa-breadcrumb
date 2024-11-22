import React from "react";
import { render, screen } from "@testing-library/react";
import OcsaBreadcrumb, { BreadcrumbItem } from "../OcsaBreadcrumb";
import "@testing-library/jest-dom";

describe("OcsaBreadcrumb", () => {
  it("renders breadcrumb items correctly", () => {
    const items: BreadcrumbItem[] = [
      { label: "Home", href: "/" },
      { label: "Library", href: "/library" },
      { label: "Data", href: "/data", isCurrent: true },
    ];

    render(<OcsaBreadcrumb items={items} />);

    // Verify all breadcrumb items are rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Library")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();

    // Verify links
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Library").closest("a")).toHaveAttribute(
      "href",
      "/library"
    );

    // Verify current page
    expect(screen.getByText("Data")).toHaveAttribute("aria-current", "page");
  });

  //   it("renders correct content for ::after pseudo-element", () => {
  //     const items = [
  //       { label: "Home", href: "/" },
  //       { label: "Library", href: "/library" },
  //       { label: "Data", href: "/data", isCurrent: true },
  //     ];

  //     render(<OcsaBreadcrumb items={items} />);

  //     // Select all <li> elements
  //     const listItems = screen.getAllByRole("listitem");

  //     // Loop through all but the last <li> element to check ::after content
  //     listItems.slice(0, -1).forEach((listItem) => {
  //       // Get the computed style for the ::after pseudo-element
  //       const afterContent = window.getComputedStyle(listItem, "::after").content;
  //       console.log(afterContent);

  //       // Check if the content is the expected arrow symbol
  //       expect(afterContent).toBe('"→"'); // Note: content is wrapped in quotes
  //     });
  //   });

  //   it("does not render ::after pseudo-element on the last item", () => {
  //     const items = [
  //       { label: "Home", href: "/" },
  //       { label: "Library", href: "/library" },
  //       { label: "Data", href: "/data", isCurrent: true },
  //     ];

  //     render(<OcsaBreadcrumb items={items} />);

  //     // Select the last <li> element
  //     const lastItem = screen.getAllByRole("listitem").pop();

  //     // Get the computed style for the ::after pseudo-element
  //     const afterContent = window.getComputedStyle(lastItem!, "::after").content;

  //     // Check if there is no ::after content
  //     expect(afterContent).toBe(""); // Empty content
  //   });

  it("handles empty items gracefully", () => {
    render(<OcsaBreadcrumb items={[]} />);

    // Expect no list items to be rendered
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
