import { describe, expect, it } from "bun:test";
import { countWithoutX, countWithTwoZeros } from "./exercises";

describe("countWithTwoZeros", () => {
	it("solves the toy example", () => {
		expect(countWithTwoZeros([1, 0, 0, 1, 0])).toBe(5);
	});

	it("returns 0 for an empty array", () => {
		expect(countWithTwoZeros([])).toBe(0);
	});

	it("returns 0 when there are fewer than two 0s", () => {
		expect(countWithTwoZeros([1, 0, 1])).toBe(0);
	});

	it("handles exactly two 0s", () => {
		expect(countWithTwoZeros([0, 0])).toBe(1);
	});

	it("handles an array made only of 0s", () => {
		expect(countWithTwoZeros([0, 0, 0])).toBe(2);
	});

	it("counts the 1s around the 0s", () => {
		expect(countWithTwoZeros([1, 0, 1, 0, 1])).toBe(4);
	});
});

describe("countWithoutX", () => {
	it("solves the toy example", () => {
		expect(countWithoutX("axa")).toBe(2);
	});

	it("returns 0 for an empty string", () => {
		expect(countWithoutX("")).toBe(0);
	});

	it("counts every substring when there is no 'x'", () => {
		expect(countWithoutX("aaa")).toBe(6);
	});

	it("returns 0 for a string made only of 'x'", () => {
		expect(countWithoutX("xxx")).toBe(0);
	});

	it("counts both sides of an 'x'", () => {
		expect(countWithoutX("aaxaa")).toBe(6);
	});
});
