const calculateSquare = require('./calculate-square');

test('calculateSquare() - it should calculate the area of a square', () => {
    expect(calculateSquare(10)).toEqual(100);
});
