import capitalize from '../scripts/capitalize';

test('Capitalize first letter', () => {
    expect(capitalize('dog')).toBe('Dog');
});