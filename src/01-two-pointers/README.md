# Two Pointers

Dois índices andam pelo mesmo array (ou lista) e, a cada passo, uma comparação decide qual deles se move. Isso troca o O(n²) de testar todos os pares por O(n).

## Como reconhecer

- O array está ordenado, ou a ordem importa.
- O problema fala de pares, de meio, de ciclo ou de remover/compactar in-place.
- Pede O(1) de espaço extra.

## Variações

| # | Variação | Ideia | Exercícios | LeetCode alvo |
|---|----------|-------|------------|---------------|
| 1 | [Pontas opostas](01-opposite-ends/exercises.ts) | `left` e `right` convergem; soma pequena → `left++`, soma grande → `right--` | canUseVoucher, closestSum | 167, 11, 15, 16 |
| 2 | [Fast/slow](02-fast-slow/exercises.ts) | `slow` anda 1 e `fast` anda 2; meio ou ciclo | whoIsOnTheMiddle, stayArrested | 876, 141, 142, 202, 287 |
| 3 | [Read/write](03-read-write/exercises.ts) | `read` percorre tudo e `write` só avança quando o elemento fica | removeIf, joinSpaces | 26, 27, 283, 80 |
| 4 | [Hash map (complemento)](04-hash-map-complement/exercises.ts) | pergunta "já vi `target - x`?" antes de guardar `x` | firstRepeated, addsUpTo | 1, 217, 219 |

## Templates

```ts
// Pontas opostas
let left = 0, right = arr.length - 1;
while (left < right) {
	if (/* achou */) return ...;
	if (/* precisa crescer */) left++;
	else right--;
}

// Fast/slow
let slow = head, fast = head;
while (fast?.next) {
	slow = slow.next;
	fast = fast.next.next;
	if (slow === fast) /* ciclo */;
}

// Read/write
let write = 0;
for (let read = 0; read < arr.length; read++) {
	if (keep(arr[read])) arr[write++] = arr[read];
}
return write;

// Hash map complemento
const seen = new Map<number, number>();
for (let i = 0; i < arr.length; i++) {
	const j = seen.get(target - arr[i]);
	if (j !== undefined) return [j, i];
	seen.set(arr[i], i);
}
```

## Armadilhas

- Pontas opostas: `left < right`, e não `<=`, para não usar o mesmo elemento duas vezes.
- Fast/slow: confira `fast` e `fast.next` antes de pular dois. Decida se em lista par o meio é o primeiro ou o segundo.
- Read/write: o retorno é o novo tamanho, e o que está depois de `write` é lixo.
- Hash map: consulte o map antes de inserir o elemento atual, senão `[5]` com target 10 vira par consigo mesmo.

## Checklist

- [x] Exercícios das 4 variações
- [ ] [Tela em branco](blank-screen.ts) sem consulta (falta `hasCycle`)
- [ ] LeetCode em [`leetcode/`](leetcode)
