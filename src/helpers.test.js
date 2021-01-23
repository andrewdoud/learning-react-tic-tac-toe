import { calculateWinner } from './helpers'

test('should return X as the winner if it has the top row', () => {
    // Arrange the test
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBe('X');
})

// TODO: 1. A test cse in which O wins
test('should return O as the winner if it has the top row', () => {
    // Arrange the test
    const squares = ['O', 'O', 'O', 'X', null, 'X', null, null, null];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBe('O');
})

// TODO: 2. A test case in which there is not yet a winner
test('should return null as the winner if there is not yet a winner', () => {
    // Arrange the test
    const squares = ['O', 'X', 'O', 'X', null, 'X', null, null, null];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBe(null);
})
