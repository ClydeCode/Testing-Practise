export default function caesarCipher(string) {
    let array = string.split('');
  
    array.forEach((letter, index) => {
      if (letter.codePointAt(0) == 122)
        array[index] = 'a';
      else if (letter.codePointAt(0) == 90)
        array[index] = 'A';
      else if (letter.codePointAt(0) == 32)
        return
      else if (letter.codePointAt(0) == 63 || 
              letter.codePointAt(0) == 33 || 
              letter.codePointAt(0) == 44 || 
              letter.codePointAt(0) == 46)
        array[index] = String.fromCodePoint(letter.codePointAt(0));
      else  
        array[index] = String.fromCodePoint(letter.codePointAt(0) + 1);
    });
  
    return array.join('');
  }