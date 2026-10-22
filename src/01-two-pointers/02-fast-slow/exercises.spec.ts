import { describe, expect, it } from "bun:test";
import { stayArrested, whoIsOnTheMiddle } from "./exercises";

describe("whoIsOnTheMiddle", () => {
	it("returns the middle of an odd-sized line", () => {
		expect(
			whoIsOnTheMiddle(["ana", "bia", "caio", "duda", "edu"], [1, 2, 3, 4, -1]),
		).toBe("caio");
	});

	it("returns the second middle of an even-sized line", () => {
		expect(
			whoIsOnTheMiddle(["ana", "bia", "caio", "duda"], [1, 2, 3, -1]),
		).toBe("caio");
	});

	it("follows next instead of array order", () => {
		// ordem real: ana -> caio -> edu -> duda -> bia
		expect(
			whoIsOnTheMiddle(["ana", "bia", "caio", "duda", "edu"], [2, -1, 4, 1, 3]),
		).toBe("edu");
	});
});

describe("stayArrested", () => {
	it("detects a cycle", () => {
		expect(stayArrested([1, 2, 3, 4, 2])).toBe(true);
	});

	it("returns false when the path ends", () => {
		expect(stayArrested([2, 3, 4, -1, 1])).toBe(false);
	});

	it("detects a self loop", () => {
		expect(stayArrested([0])).toBe(true);
	});
});
