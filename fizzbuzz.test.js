import { fizzbuzz } from './fizzbuzz.js';
import test from 'node:test';
import * as assert from "node:assert";

test('FizzBuzz av 1 er "FizzBuzz"', () => {
    assert.strictEqual(fizzbuzz(1), "1");
})
test('FizzBuzz av 3 er "Fizz"', () => {
    assert.strictEqual(fizzbuzz(3), "1, 2, Fizz (3)");
})
test('FizzBuzz av 5 er "Buzz"', () => {
    assert.strictEqual(fizzbuzz(5), "1, 2, Fizz (3), 4, Buzz (5)");
})
test('FizzBuzz av 15 er "FizzBuzz"', () => {
    assert.strictEqual(fizzbuzz(15), "1, 2, Fizz (3), 4, Buzz (5), Fizz (6), 7, 8, Fizz (9), Buzz (10), 11, Fizz (12), 13, 14, FizzBuzz (15)");
})