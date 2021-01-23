import { render, fireEvent } from '@testing-library/react';

// Square is a "default" export from Square.js, so we don't need
// curly braces around it like we do for render
import Square from './Square';

test('should render an empty Square', () => {
    const square = render(<Square value={null} />); // Line 1
    const button = square.getByRole('button'); // Line 2
    expect(button.innerHTML).toBe(''); // Line 3
});

// Line 1: Here, we render the Square using the render method, and that returns 
// an abstract representation of our Square. This abstract representation is a 
// container for its child elements (i.e., the button), and provides us with a 
// ton of useful functions to get information about the square. We use one of 
// those methods in Line 2.

// Line 2: The container returned by render provides a bunch of query functions 
// (Links to an external site.) that let us query for child elements that match 
// certain conditions. In this case, we are querying for a single HTML element 
// that matches the role of "button".

// Line 3: Once we have the button, we check that its innerHTML is empty. 
// innerHTML has nothing to do with jest or testing-library; it's just plain old
// JavaScript.

// TODO: Test the next requirement from our list in the first part of section 3.
// Write a test that checks that the Square is rendered with an "X" when the
// value prop is specified as "X".
test('should render a Square containing X', () => {
    const square = render(<Square value={'X'} />); // Line 1
    const button = square.getByRole('button'); // Line 2
    expect(button.innerHTML).toBe('X'); // Line 3
});

test('should call the specified onClick when square is clicked', () => {
    // Setting up the test
    const onClick = jest.fn();
    const square = render(<Square value='X' onClick={onClick} />);
    const button = square.getByRole('button');

    // Performing the actual test
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1);
});
