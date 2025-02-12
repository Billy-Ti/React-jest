import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

test("renders button with correct label", () => {
    const mockOnClick = jest.fn();
    render(<Button label="Click Me" onClick={mockOnClick} />);

    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
});
