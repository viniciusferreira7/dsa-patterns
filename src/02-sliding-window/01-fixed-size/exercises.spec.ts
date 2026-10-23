import { describe, expect, it } from "bun:test";
import { bestWindowStart, maxAInWindow } from "./exercises";

describe("maxAInWindow", () => {
	it("solves the toy example", () => {
		expect(maxAInWindow("abaaab", 3)).toBe(3);
	});

	it("returns 0 when there is no 'a'", () => {
		expect(maxAInWindow("bbb", 2)).toBe(0);
	});

	it("handles a string made only of 'a'", () => {
		expect(maxAInWindow("aaaa", 2)).toBe(2);
	});

	it("handles k equal to the string length", () => {
		expect(maxAInWindow("abca", 4)).toBe(2);
	});

	it("handles k = 1", () => {
		expect(maxAInWindow("bab", 1)).toBe(1);
	});

	it("finds the best window at the end", () => {
		expect(maxAInWindow("bbbaa", 2)).toBe(2);
	});
});

describe("bestWindowStart", () => {
	it("solves the toy example (tie keeps the first)", () => {
		expect(bestWindowStart([3, 8, 1, 9, 2], 2)).toBe(0);
	});

	it("handles k equal to the array length", () => {
		expect(bestWindowStart([1, 2, 3], 3)).toBe(0);
	});

	it("keeps the first window on ties with k = 1", () => {
		expect(bestWindowStart([5, 1, 1, 5], 1)).toBe(0);
	});

	it("finds the best window at the end", () => {
		expect(bestWindowStart([1, 2, 3, 4], 2)).toBe(2);
	});

	it("works with negative numbers", () => {
		expect(bestWindowStart([-5, -1, -3, -2], 2)).toBe(1);
	});
});
