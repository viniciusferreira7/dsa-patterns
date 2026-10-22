import { describe, expect, it } from "bun:test";
import {
	build,
	compact,
	complementPair,
	convergent,
	hasCycle,
	type ListNode,
	middle,
} from "./blank-screen";

describe("convergent", () => {
	it("finds a pair in a sorted array", () => {
		expect(convergent([1, 2, 4, 7, 11], 9)).toBe(true);
		expect(convergent([1, 2, 4, 7, 11], 10)).toBe(false);
	});
});

describe("middle", () => {
	it("returns the middle of an odd list", () => {
		expect(middle(build([1, 2, 3, 4, 5]))?.val).toBe(3);
	});

	it("returns the first middle of an even list", () => {
		expect(middle(build([1, 2, 3, 4]))?.val).toBe(2);
	});

	it("handles empty and single lists", () => {
		expect(middle(build([]))).toBeNull();
		expect(middle(build([1]))?.val).toBe(1);
	});
});

describe("hasCycle", () => {
	// Troque por `it` quando implementar hasCycle.
	it.todo("detects a cycle", () => {
		const head = build([1, 2, 3, 4]) as ListNode;
		let tail = head;
		while (tail.next) tail = tail.next;
		tail.next = head.next;
		expect(hasCycle(head)).toBe(true);
	});

	it.todo("returns false for a list without cycle", () => {
		expect(hasCycle(build([1, 2, 3]))).toBe(false);
		expect(hasCycle(null)).toBe(false);
	});
});

describe("compact", () => {
	it("keeps only matching values", () => {
		const arr = [1, 0, 2, 0, 3];
		const length = compact(arr, (num) => num !== 0);
		expect(arr.slice(0, length)).toEqual([1, 2, 3]);
	});
});

describe("complementPair", () => {
	it("returns the original indices", () => {
		expect(complementPair([3, 9, 4], 7)).toEqual([0, 2]);
		expect(complementPair([3, 1], 6)).toBeNull();
	});
});
