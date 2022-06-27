export default function reverseString(string) {
    let array = string.split('');
    array = array.reverse();
  
    return array.join('');
  }