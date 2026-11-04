// Tela em branco: feche tudo e reescreva de cabeça, com tipos explícitos.
// Para repetir o treino, apague os corpos das funções e rode `bun test blank-screen`.

// Janela fixa: maior soma de uma janela de tamanho k.
export function maxWindowSum(nums: number[], k: number): number {
	if (!nums.length) return 0;

	let best = Number.NEGATIVE_INFINITY;

	let windowSum = 0;
	let left = 0;

	for (let right = 0; right < nums.length; right++) {
		windowSum += nums[right];

		if (right - left + 1 >= k) {
			best = Math.max(best, windowSum);
			windowSum -= nums[left];

			left++;
		}
	}

	return best === Number.NEGATIVE_INFINITY ? 0 : best;
}

// Janela variável (maior): comprimento do maior subarray com no máximo k 0s.
export function longestAtMostKZeros(nums: number[], k: number): number {
	if (!nums.length) return 0;

	let best = 0;
	let left = 0;

	let matches = 0;

	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) matches++;

		while (matches > k) {
			if (nums[left] === 0) matches--;

			left++;
		}

		best = Math.max(best, right - left + 1);
	}

	return best;
}

// Janela variável (menor): comprimento do menor subarray com soma >= target (0 se não existir).
export function shortestSumAtLeast(nums: number[], target: number): number {
	if (!nums.length) return 0;

	let best = Number.POSITIVE_INFINITY;
	let windowSum = 0;
	let left = 0;

	for (let right = 0; right < nums.length; right++) {
		windowSum += nums[right];

		while (windowSum >= target) {
			best = Math.min(best, right - left + 1);

			windowSum -= nums[left];
			left++;
		}
	}

	return best === Number.POSITIVE_INFINITY ? 0 : best;
}

function atMost(nums: number[], k: number, target: number) {
	if (k < 0) return 0;

	let count = 0;
	let matches = 0;
	let left = 0;

	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === target) matches++;

		while (matches > k) {
			if (nums[left] === target) matches--;
			left++;
		}
		count += right - left + 1;
	}

	return count;
}

// Exatamente k: quantos subarrays têm no máximo k 0s.
export function countAtMostKZeros(nums: number[], k: number): number {
	return atMost(nums, k, 0);
}

// Exatamente k: quantos subarrays têm exatamente k 0s, usando countAtMostKZeros.
export function countExactlyKZeros(nums: number[], k: number): number {
	return atMost(nums, k, 0) - atMost(nums, k - 1, 0);
}
