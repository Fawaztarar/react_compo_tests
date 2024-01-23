// file: src/Profile.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "./Profile";

test("renders with the correct name", () => {
  // Setup - rendering the component on the page with props
  render(<Profile name="John Doe" job="Developer" birthdate="1990-01-01" />);

  // Assert
  expect(screen.getByTestId("name")).toHaveTextContent("John Doe");
});

test("renders with the correct job", () => {
  // Setup - rendering the component on the page with props
  render(<Profile name="Jane Doe" job="Designer" birthdate="1995-05-15" />);

  // Assert
  expect(screen.getByTestId("job")).toHaveTextContent("Designer");
});




describe('Profile Component', () => {
    it('renders profile information correctly', () => {
    const props = {
        name: 'John Doe',
        job: 'Software Engineer',
        birthdate: '1990-01-01',
    };
  
    render(<Profile {...props} />);
  
      // Check if the rendered text matches the expected values
    expect(screen.getByTestId('name')).toHaveTextContent('John Doe');
    expect(screen.getByTestId('job')).toHaveTextContent('Software Engineer');
    expect(screen.getByTestId('birthdate')).toHaveTextContent('1990-01-01');
    });
});