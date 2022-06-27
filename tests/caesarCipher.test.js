import caesarCipher from '../scripts/caesarCipher';

test('caesar cipher test (1) working', () => {
    expect(caesarCipher('abcd')).toBe('bcde');
});

test('caesar cipher test (2) A-Z case', () => {
    expect(caesarCipher('az')).toBe('ba');
});

test('caesar cipher test (3) UpperCase' , () => {
    expect(caesarCipher('ZZAACC')).toBe('AABBDD');
});

test('caesar cipher test (4) spaces', () => {
    expect(caesarCipher('attack at dawn')).toBe('buubdl bu ebxo');
});

test('caesar cipher test (5) with punctuation', () => {
    expect(caesarCipher('plz, help me!')).toBe('qma, ifmq nf!');
});