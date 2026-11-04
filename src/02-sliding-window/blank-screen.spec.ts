import { describe, expect, it } from "bun:test";
import {
	countAtMostKZeros,
	countExactlyKZeros,
	longestAtMostKZeros,
	maxWindowSum,
	shortestSumAtLeast,
} from "./blank-screen";

describe("maxWindowSum", () => {
	it("returns the best sum of a window of size k", () => {
		expect(maxWindowSum([2, 1, 5, 1, 3, 2], 3)).toBe(9);
		expect(maxWindowSum([4, 1, 1], 3)).toBe(6);
	});

	it("works with negative numbers", () => {
		expect(maxWindowSum([-1, -2, -3], 2)).toBe(-3);
	});
});

describe("longestAtMostKZeros", () => {
	it("returns the longest window with at most k 0s", () => {
		expect(longestAtMostKZeros([1, 0, 1, 1, 0, 0, 1], 2)).toBe(5);
		expect(longestAtMostKZeros([1, 1], 1)).toBe(2);
	});

	it("handles k = 0", () => {
		expect(longestAtMostKZeros([0, 0, 0], 0)).toBe(0);
		expect(longestAtMostKZeros([1, 0, 1, 1], 0)).toBe(2);
	});
});

describe("shortestSumAtLeast", () => {
	it("returns the shortest window with sum >= target", () => {
		expect(shortestSumAtLeast([2, 3, 1, 2, 4, 3], 7)).toBe(2);
		expect(shortestSumAtLeast([1, 2, 9, 1], 8)).toBe(1);
	});

	it("returns 0 when no window reaches target", () => {
		expect(shortestSumAtLeast([1, 1], 5)).toBe(0);
		expect(shortestSumAtLeast([], 1)).toBe(0);
	});
});

describe("countAtMostKZeros", () => {
	it("counts windows with at most k 0s", () => {
		expect(countAtMostKZeros([1, 0, 0, 1, 0], 1)).toBe(8);
		expect(countAtMostKZeros([1, 0, 0, 1, 0], 2)).toBe(13);
	});

	it("returns 0 for k < 0", () => {
		expect(countAtMostKZeros([1, 0], -1)).toBe(0);
	});
});

describe("countExactlyKZeros", () => {
	it("counts windows with exactly k 0s", () => {
		expect(countExactlyKZeros([1, 0, 0, 1, 0], 2)).toBe(5);
		expect(countExactlyKZeros([0, 0], 1)).toBe(2);
	});

	it("handles k = 0", () => {
		expect(countExactlyKZeros([1, 1, 1], 0)).toBe(6);
		expect(countExactlyKZeros([1, 0, 1], 0)).toBe(2);
	});
});
