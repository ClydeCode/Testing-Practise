export default function capitalize(string) {
    let word = string;
    return word.charAt(0).toUpperCase() + word.slice(1);
}