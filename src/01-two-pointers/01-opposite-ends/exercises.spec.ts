import { describe, expect, it } from "bun:test";
import { canUseVoucher, closestSum } from "./exercises";

describe("canUseVoucher", () => {
	it("finds a pair that matches the voucher", () => {
		expect(canUseVoucher([2, 5, 8, 12, 15], 20)).toBe(true);
	});

	it("returns false when no pair matches", () => {
		expect(canUseVoucher([2, 5, 8, 12, 15], 4)).toBe(false);
	});

	it("returns false for fewer than two prices", () => {
		expect(canUseVoucher([], 4)).toBe(false);
		expect(canUseVoucher([4], 4)).toBe(false);
	});
});

describe("closestSum", () => {
	it("returns the closest sum below the target", () => {
		expect(closestSum([1, 3, 6, 10], 12)).toBe(11);
	});

	it("returns the closest sum above the target", () => {
		expect(closestSum([1, 3, 6, 10], 15)).toBe(16);
	});

	it("returns the exact sum when it exists", () => {
		expect(closestSum([1, 3, 6, 10], 9)).toBe(9);
	});
});
