import { describe, expect, it } from "bun:test";
import { addsUpTo, firstRepeated } from "./exercises";

describe("firstRepeated", () => {
	it.each([
		[[], null],
		[[7], null],
		[[7, 7], 7],
		[[4, 4, 4], 4],
		[[1, 2, 1, 2], 1],
		[[1, 2, 2, 1], 2],
		[[9, 8, 7, 8, 9], 8],
		[[0, 5, 0], 0],
		[[-1, 3, -1], -1],
		[[5, 3, 8, 3, 5], 3],
		[[1, 2, 3], null],
	])("firstRepeated(%p) -> %p", (arr, expected) => {
		expect(firstRepeated(arr)).toBe(expected);
	});
});

describe("addsUpTo", () => {
	it.each<[number[], number, [number, number] | null]>([
		[[8, 2, 9, 5], 7, [1, 3]],
		[[3, 9, 4], 7, [0, 2]],
		[[3, 1], 6, null],
		[[], 5, null],
		[[5], 10, null],
		[[5, 5], 10, [0, 1]],
		[[1, 2, 3], 10, null],
		[[6, 2, 7, 1], 3, [1, 3]],
		[[-3, 8, 1], 5, [0, 1]],
		[[10, -2, 4], 8, [0, 1]],
		[[0, 4, 0], 0, [0, 2]],
	])("addsUpTo(%p, %p) -> %p", (arr, target, expected) => {
		expect(addsUpTo(arr, target)).toEqual(expected);
	});
});
