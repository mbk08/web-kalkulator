import { fibonacci } from './fibonacci.js';
import test from 'node:test';
import * as assert from "node:assert";

test('Det første fibonaccitallet er "1"', () => {
    assert.strictEqual(fibonacci(1), 1);
});
test('Det andre fibonaccitallet er "1"', () => {
    assert.strictEqual(fibonacci(2), 1);
});
test('Det tredje fibonaccitallet er "2"', () => {
    assert.strictEqual(fibonacci(3), 2);
});
test('Det fjerde fibonaccitallet er "3"', () => {
    assert.strictEqual(fibonacci(4), 3);
});
test('Det femte fibonaccitallet er "5"', () => {
    assert.strictEqual(fibonacci(5), 5);
});
test('Det sjette fibonaccitallet er "8"', () => {
    assert.strictEqual(fibonacci(6), 8);
});