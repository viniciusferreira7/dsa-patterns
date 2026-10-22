// Variação 2: Fast/slow (mesma direção, velocidades diferentes)
// slow anda 1, fast anda 2. Quando fast acaba, slow está no meio; se eles se encontram, há ciclo.
// Aqui a "lista" é simulada com arrays: next[i] é o índice do próximo, -1 é o fim.

// Ex: quem está no meio da fila? (em fila par, o segundo do meio)
export function whoIsOnTheMiddle(names: string[], next: number[]): string {
	let slow = 0;
	let fast = 0;

	while (fast !== -1 && next[fast] !== -1) {
		slow = next[slow];
		fast = next[next[fast]];
	}

	return names[slow];
}

// Ex: seguindo os saltos a partir do 0, fico preso num ciclo?
export function stayArrested(jump: number[]): boolean {
	let slow = 0;
	let fast = 0;

	while (fast !== -1 && fast !== undefined) {
		slow = jump[slow];
		fast = jump[jump[fast]];

		if (slow === fast) return true;
	}

	return false;
}
