// Variação 3: Read/write (mesma direção, write atrás do read)
// read percorre tudo; write só avança quando o elemento deve ficar. Retorna o novo tamanho.

// Ex: manter só os elementos que passam no filtro, in-place.
export function removeIf(
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

// Ex: colapsar espaços seguidos em um só, in-place.
export function joinSpaces(
	chars: string[],
	shouldKeep: (ch: string) => boolean,
): number {
	let write = 0;
	let count = 0;

	for (let read = 0; read < chars.length; read++) {
		if (chars[read] === " ") count++;

		if (shouldKeep(chars[read])) {
			chars[write] = chars[read];
			write++;
			count = 0;
		}

		if (count === 1) {
			chars[write] = chars[read];
			write++;
		}
	}

	return write;
}
