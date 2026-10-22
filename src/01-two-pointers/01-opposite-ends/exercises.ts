// Variação 1: Pontas opostas (convergem)
// Array ordenado, left no início e right no fim, cada passo descarta uma ponta.

// Ex: existe um par de preços que soma exatamente o valor do voucher?
export function canUseVoucher(prices: number[], voucher: number): boolean {
	let left = 0;
	let right = prices.length - 1;

	while (left < right) {
		const sum = prices[left] + prices[right];

		if (sum === voucher) return true;
		if (sum < voucher) left++;
		else right--;
	}

	return false;
}

// Ex: qual a soma de par mais próxima do target?
export function closestSum(arr: number[], target: number): number {
	let left = 0;
	let right = arr.length - 1;

	let minDiff = Number.POSITIVE_INFINITY;
	let bestSum = Number.POSITIVE_INFINITY;

	while (left < right) {
		const sum = arr[left] + arr[right];
		const diff = Math.abs(sum - target);

		if (diff < minDiff) {
			minDiff = diff;
			bestSum = sum;
		}

		if (sum < target) left++;
		else right--;
	}

	return bestSum;
}
