// Variação 1: Janela fixa (tamanho k)
// Ideia:

// Ex. 1: maior quantidade de letras 'a' em qualquer substring de tamanho k.
// Brinquedo: s = "abaaab", k = 3
export function maxAInWindow(s: string, k: number): number {
	if (s.length < k) return 0;

	let windowSum = 0;
	let best = Number.NEGATIVE_INFINITY;

	const LETTER = "a";

	for (let right = 0; right < s.length; right++) {
		if (s[right].toLowerCase() === LETTER) windowSum++;

		if (right >= k && s[right - k].toLowerCase() === LETTER) windowSum--;
		if (right >= k - 1) best = Math.max(windowSum, best);
	}

	return best;
}

// Ex. 2: índice de início da janela de tamanho k com maior soma (empate: o primeiro).
// Brinquedo: nums = [3, 8, 1, 9, 2], k = 2
export function bestWindowStart(nums: number[], k: number): number {
	let windowSum = 0;

	let bestSum = Number.NEGATIVE_INFINITY;
	let firstIdx = Number.POSITIVE_INFINITY;

	for (let right = 0; right < nums.length; right++) {
		windowSum += nums[right];

		if (right >= k) windowSum -= nums[right - k];
		if (right >= k - 1) {
			if (windowSum > bestSum) {
				bestSum = windowSum;
				firstIdx = right - k + 1;
			}
		}
	}

	return firstIdx;
}
