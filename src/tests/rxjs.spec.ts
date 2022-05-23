import { RunHelpers, TestScheduler } from "rxjs/testing";
import { alphabet, rxjxFizzBuzz } from "../app/rxjsFizzBuzz";

const testScheduler = new TestScheduler((actual, expected) =>
  expect(actual).toEqual(expected)
);

const rx = (testFn: (helpers: RunHelpers) => void) => () =>
  testScheduler.run((helpers) => testFn(helpers));

test(
  "emits first 5 letters of the alphabet",
  rx(({ expectObservable }) => {
    const expected = "(abcde|)";
    const values = { a: "a", b: "b", c: "c", d: "d", e: "e" };

    expectObservable(alphabet()).toBe(expected, values);
  })
);

test(
  "emits fizzbuzz every second",
  rx(({ expectObservable }) => {
    const expected =
      "1000ms a 999ms b 999ms c 999ms d 999ms e 999ms f " +
      "999ms g 999ms h 999ms i 999ms j 999ms k 999ms l " +
      "999ms m 999ms n 999ms o 999ms (p|)";

    const values = {
      a: 1,
      b: 2,
      c: "Fizz",
      d: 4,
      e: "Buzz",
      f: "Fizz",
      g: 7,
      h: 8,
      i: "Fizz",
      j: "Buzz",
      k: 11,
      l: "Fizz",
      m: 13,
      n: 14,
      o: "FizzBuzz",
      p: 16,
    };

    expectObservable(rxjxFizzBuzz(16)).toBe(expected, values);
  })
);
