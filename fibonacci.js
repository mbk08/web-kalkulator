export function fibonacci(n) {
    if (isNaN(n) || n < 1) return '';

    function fib(x) {
        if (x === 1 || x === 2) return 1;

        return fib(x - 1) + fib(x - 2);
    }

    return fib(n);
}