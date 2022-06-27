function calcAverage(array) {
    return Math.round(array.reduce((a, b) => a + b) / array.length);
}
  
export default function analyzeArray(array) {
  let object = {
    average: calcAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),     
    length: array.length
    }
  
    return object;
}