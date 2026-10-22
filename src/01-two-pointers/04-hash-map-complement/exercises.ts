// Variação 4: Hash map (complemento)
// Para cada elemento, pergunte ao map "já vi o que eu preciso?" antes de guardar o atual.

// Ex: primeiro número que aparece pela segunda vez.
export function firstRepeated(arr: number[]): number | null {
	const seen = new Set<number>();

	for (let i = 0; i < arr.length; i++) {
		if (seen.has(arr[i])) return arr[i];

		seen.add(arr[i]);
	}

	return null;
}

// Ex: índices originais de dois números que somam target.
export function addsUpTo(
	arr: number[],
	target: number,
): [number, number] | null {
	const indexByValue = new Map<number, number>();

	for (let i = 0; i < arr.length; i++) {
		const complement = target - arr[i];
		const j = indexByValue.get(complement);

		if (j !== undefined) return [j, i];

		indexByValue.set(arr[i], i);
	}

	return null;
}
