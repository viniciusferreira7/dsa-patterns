import { describe, expect, it } from "bun:test";
import { joinSpaces, removeIf } from "./exercises";

function compacted<T>(arr: T[], fn: (arr: T[]) => number): T[] {
	return arr.slice(0, fn(arr));
}

describe("removeIf", () => {
	const isNonNegative = (num: number) => num >= 0;
	const isNot = (value: number) => (num: number) => num !== value;

	it("removes negatives", () => {
		expect(
			compacted([3, -1, 4, -1, -5, 9], (arr) => removeIf(arr, isNonNegative)),
		).toEqual([3, 4, 9]);
	});

	it("removes every occurrence of a value", () => {
		expect(
			compacted([2, 7, 2, 2, 5], (arr) => removeIf(arr, isNot(2))),
		).toEqual([7, 5]);
	});

	it("returns 0 when nothing is kept", () => {
		expect(removeIf([4, 4, 4], isNot(4))).toBe(0);
	});

	it("keeps everything when nothing matches", () => {
		expect(compacted([1, 3], (arr) => removeIf(arr, isNot(2)))).toEqual([1, 3]);
	});
});

describe("joinSpaces", () => {
	const isNotSpace = (ch: string) => ch !== " ";
	const join = (chars: string[]) =>
		compacted(chars, (arr) => joinSpaces(arr, isNotSpace)).join("");

	it("collapses spaces between words", () => {
		expect(join(["o", "i", " ", " ", " ", "t", "u"])).toBe("oi tu");
	});

	it("collapses leading spaces into one", () => {
		expect(join([" ", " ", "a"])).toBe(" a");
	});

	it("keeps single spaces at the edges", () => {
		expect(join([" ", "a", " ", " ", "b", " "])).toBe(" a b ");
	});

	it("handles several groups", () => {
		expect(join(["a", " ", "b", " ", " ", "c", " ", " ", " ", "d"])).toBe(
			"a b c d",
		);
	});

	it("handles empty and only-spaces input", () => {
		expect(join([])).toBe("");
		expect(join([" "])).toBe(" ");
		expect(join([" ", " ", " "])).toBe(" ");
	});
});
