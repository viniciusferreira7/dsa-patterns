// Tela em branco: feche tudo e reescreva de cabeça, com tipos explícitos.
// Para repetir o treino, apague os corpos das funções e rode `bun test blank-screen`.

// Pontas opostas: achar o par que soma target num array ordenado.
export function convergent(arr: number[], target: number): boolean {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const sum = arr[left] + arr[right];

		if (sum === target) return true;
		if (sum < target) left++;
		else right--;
	}

	return false;
}

// Fast/slow: middle e hasCycle usando ListNode.
export type ListNode = { val: number; next: ListNode | null };

export function build(vals: number[]): ListNode | null {
	let head: ListNode | null = null;

	for (let i = vals.length - 1; i >= 0; i--) {
		head = { val: vals[i], next: head };
	}

	return head;
}

// Em lista par devolve o primeiro do meio.
export function middle(head: ListNode | null): ListNode | null {
	if (!head) return null;

	let slow = head;
	let fast = head;

	while (fast.next?.next) {
		slow = slow.next as ListNode;
		fast = fast.next.next;
	}

	return slow;
}

export function hasCycle(head: ListNode | null): boolean {
	throw new Error("TODO: escreva de cabeça");
}

// Read/write: compact(arr, shouldKeep) devolvendo o novo tamanho.
export function compact(
	arr: number[],
	shouldKeep: (num: number) => boolean,
): number {
	let write = 0;

	for (let read = 0; read < arr.length; read++) {
		if (shouldKeep(arr[read])) {
			arr[write] = arr[read];
			write++;
		}
	}

	return write;
}

// Hash map: complementPair(arr, target) devolvendo os índices originais.
export function complementPair(
	arr: number[],
	target: number,
): [number, number] | null {
	const map = new Map<number, number>();

	for (let i = 0; i < arr.length; i++) {
		const j = map.get(target - arr[i]);

		if (j !== undefined) return [j, i];

		map.set(arr[i], i);
	}

	return null;
}
