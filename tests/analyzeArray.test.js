import analyzeArray from '../scripts/analyzeArray';

test('Analyze array test (1) average', () => {
    expect(analyzeArray([5, 9, 2])).toHaveProperty('average', 5);
});

test('Analyze array test (2) minimum', () => {
    expect(analyzeArray([3, 5, 6, 8])).toHaveProperty('min', 3);
});

test('Analyze array test (3) maximum', () => {
    expect(analyzeArray([1, 6, 9, 7])).toHaveProperty('max', 9);
});

test('Analyze array test (4) length', () => {
    expect(analyzeArray([5, 6, 3, 7])).toHaveProperty('length', 4);
});