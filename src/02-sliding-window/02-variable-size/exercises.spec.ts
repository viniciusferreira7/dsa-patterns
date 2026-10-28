import { describe, expect, it } from "bun:test";
import {
	longestWithOneB,
	longestWithTwoZeros,
	minSubarrayLen,
} from "./exercises";

describe("longestWithOneB", () => {
	it("solves the toy example", () => {
		expect(longestWithOneB("aabaaba")).toBe(5);
	});

	it("returns 0 for an empty string", () => {
		expect(longestWithOneB("")).toBe(0);
	});

	it("takes the whole string when there is no 'b'", () => {
		expect(longestWithOneB("aaaa")).toBe(4);
	});

	it("takes the whole string with exactly one 'b'", () => {
		expect(longestWithOneB("aaba")).toBe(4);
	});

	it("handles a string made only of 'b'", () => {
		expect(longestWithOneB("bbb")).toBe(1);
	});

	it("finds the best window at the end", () => {
		expect(longestWithOneB("bbaaaba")).toBe(5);
		expect(longestWithOneB("a")).toBe(1);
		expect(longestWithOneB("aa")).toBe(2);
	});
});

describe("minSubarrayLen", () => {
	it("solves the toy example", () => {
		expect(minSubarrayLen([1, 4, 1, 2, 5, 1], 7)).toBe(2);
	});

	it("returns 0 when no subarray reaches target", () => {
		expect(minSubarrayLen([1, 1, 1], 5)).toBe(0);
	});

	it("returns 0 for an empty array", () => {
		expect(minSubarrayLen([], 3)).toBe(0);
	});

	it("returns 1 when a single element reaches target", () => {
		expect(minSubarrayLen([1, 2, 9, 1], 8)).toBe(1);
	});

	it("needs the whole array", () => {
		expect(minSubarrayLen([1, 2, 3], 6)).toBe(3);
	});

	it("handles zeros", () => {
		expect(minSubarrayLen([0, 0, 3, 0, 4], 7)).toBe(3);
	});
});

describe("longestWithTwoZeros", () => {
	it("solves the toy example", () => {
		expect(longestWithTwoZeros([1, 0, 1, 1, 0, 0, 1])).toBe(5);
	});

	it("returns 0 for an empty array", () => {
		expect(longestWithTwoZeros([])).toBe(0);
	});

	it("takes the whole array when there is no 0", () => {
		expect(longestWithTwoZeros([1, 1, 1])).toBe(3);
	});

	it("takes the whole array with exactly two 0s", () => {
		expect(longestWithTwoZeros([0, 1, 1, 0])).toBe(4);
	});

	it("handles an array made only of 0s", () => {
		expect(longestWithTwoZeros([0, 0, 0, 0])).toBe(2);
	});

	it("finds the best window at the end", () => {
		expect(longestWithTwoZeros([0, 0, 0, 1, 1, 0, 1])).toBe(5);
	});
});
