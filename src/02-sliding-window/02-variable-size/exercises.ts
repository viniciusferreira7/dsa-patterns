// Variação 2: Janela variável
// Ideia:

// Ex. 1 (maior): comprimento da maior substring com no máximo um 'b'.
// Brinquedo: s = "aabaaba"
export function longestWithOneB(s: string): number {
	if (s.length === 0) return 0;

	let windowSum = 0;
	let best = 0;

	let left = 0;

	let matched = 0;

	for (let right = 0; right < s.length; right++) {
		const char = s[right];

		if (char.toLowerCase() === "b") matched++;

		windowSum++;

		while (matched >= 2) {
			if (s[left].toLowerCase() === "b") matched--;

			windowSum--;
			left++;
		}

		best = Math.max(windowSum, best);
	}

	return best;
}

// Ex. 2 (menor): comprimento do menor subarray com soma >= target (0 se não existir).
// nums são não-negativos.
// Brinquedo: nums = [1, 4, 1, 2, 5, 1], target = 7
export function minSubarrayLen(nums: number[], target: number): number {
	if (nums.length === 0) return 0;

	let best = Number.POSITIVE_INFINITY;
	let windowSum = 0;

	let left = 0;

	for (let right = 0; right < nums.length; right++) {
		windowSum += nums[right];

		while (windowSum >= target) {
			best = Math.min(right - left + 1, best);
			windowSum -= nums[left];
			left++;
		}
	}

	return best === Number.POSITIVE_INFINITY ? 0 : best;
}

// Ex. 3 (maior): comprimento do maior subarray com no máximo dois 0s.
// nums só tem 0s e 1s.
// Brinquedo: nums = [1, 0, 1, 1, 0, 0, 1]
export function longestWithTwoZeros(nums: number[]): number {
	if (!nums.length) return 0;

	let best = 0;
	let left = 0;
	let matches = 0;

	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) matches++;

		while (matches > 2) {
			if (nums[left] === 0) matches--;

			left++;
		}

		best = Math.max(right - left + 1, best);
	}

	return best;
}
