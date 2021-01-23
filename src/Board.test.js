import { render, fireEvent } from '@testing-library/react';
import Board from "./Board";

// Task 1. The Board should get re-rendered on each click, with X's and O's
// appearing on alternating clicks.
test('should re-render board upon each click, with Xs and Os alternating', () => {
    // Setting up the test
    const onClick = jest.fn();
    const board = render(<Board initialSquares={Array(9).fill(null)} onClick={onClick} />);
    const buttons = board.queryAllByRole('button');

    // Performing the actual test
    var i;
    for (i = 0; i < 8; i++) {
        fireEvent.click(buttons[i]);
        if (i % 2 == 0)
            expect(buttons[i].innerHTML).toBe('X');
        else
            expect(buttons[i].innerHTML).toBe('O');
    }
});

// Task 2. The status message that says "Next player: __" should alternate
// between saying "Next player: X" and "Next player: O", depending on whose turn
// it is. Implement and test this behavior

// DISCLAIMER: This function uses board.getByText(...) like an assert statement,
// in that if board.getByText throws an exception, then Board.js is not
// displaying the proper text. So this function will fail "loudly" if it fails.
test('next player message should alternate between X and O', () => {
    // Setting up the test
    const onClick = jest.fn();
    const board = render(<Board initialSquares={Array(9).fill(null)} onClick={onClick} />);
    const buttons = board.queryAllByRole('button');

    // console.log(board.getByText("Next player"));

    // Performing the actual test
    var i;
    for (i = 0; i < 8; i++) {
        fireEvent.click(buttons[i]);
        if (i % 2 == 0)
            board.getByText("Next player: O");
        else
            board.getByText("Next player: X");
    }
});
