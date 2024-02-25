const addFive = require('./add-five');

test('addFive() - it should add 5 to a given number', () => {
    expect(addFive(1)).toEqual(6);
});

