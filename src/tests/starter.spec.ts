import { anagrams } from "../app/anagrams";
import { distinctNumbers } from "../app/distinctNumbers";
import { formatName } from "../app/formatName";

test("Capitalize Names", () => {
  const res = formatName("DOMiNIc calvert-LeWin");
  expect(res).toBe("Dominic Calvert-Lewin");
});

test("Distinct Numbers", () => {
  const res = distinctNumbers(7, 1, 3, 4, 7, 1, 3);
  expect(res).toEqual([1, 3, 4, 7]);
});

test("Grouping Anagrams", () => {
  const res = anagrams(["abc", "fun", "bac", "fun", "cba", "unf", "hello"]);
  expect(res).toEqual([["abc", "bac", "cba"], ["fun", "unf"], ["hello"]]);
});
