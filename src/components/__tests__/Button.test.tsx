import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

test("renders button with correct label", () => {
    const mockOnClick = jest.fn();
    render(<Button label="按鈕" onClick={mockOnClick} />);

    const button = screen.getByText("按鈕");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
});

