// Variação 3: Exatamente k (atMost(k) − atMost(k − 1))
// Ideia:

function atMost(itens: unknown, k: number, target: unknown) {
	if (k < 0) return 0;

	let left = 0;
	let matches = 0;
	let total = 0;

	let arr: number[] | string = [];

	if (Array.isArray(itens) || typeof itens === "string") {
		arr = itens;
	}

	if (!arr) return 0;

	for (let right = 0; right < arr.length; right++) {
		if (arr[right] === target) matches++;

		while (matches > k) {
			if (arr[left] === target) matches--;
			left++;
		}

		total += right - left + 1;
	}

	return total;
}

// Ex. 1: quantidade de subarrays com exatamente dois 0s.
// nums só tem 0s e 1s.
// Brinquedo: nums = [1, 0, 0, 1, 0]
export function countWithTwoZeros(nums: number[]): number {
	const k = 2;
	const target = 0;

	return atMost(nums, k, target) - atMost(nums, k - 1, target);
}

// Ex. 2: quantidade de substrings com exatamente zero 'x'.
// Brinquedo: s = "axa"
export function countWithoutX(s: string): number {
	const k = 0;
	const target = "x";

	return atMost(s, k, target) - atMost(s, k - 1, target);
}
