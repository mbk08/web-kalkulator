
export function fizzbuzz(tall) {
    if (isNaN(tall) || tall < 1) return '';
    const result = [];
    for (let i = 1; i <= tall; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(`FizzBuzz (${i})`);
        } else if (i % 3 === 0) {
            result.push(`Fizz (${i})`);
        } else if (i % 5 === 0) {
            result.push(`Buzz (${i})`);
        } else {
            result.push(i.toString());
        }
    }
    return result.join(', ');
}
