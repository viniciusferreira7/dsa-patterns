# 🧩 DSA Patterns

Estudo de DSA guiado por **padrões**. Cada padrão é dividido em variações, cada variação tem exercícios simples com testes, e só depois vem o LeetCode.

## Fluxo de estudo

1. **Padrão**: ler/escrever o `README.md` do padrão (como reconhecer, template, armadilhas).
2. **Variações**: para cada variação, resolver 2–3 exercícios simples em `NN-variacao/exercises.ts`, com casos de borda no `exercises.spec.ts`.
3. **Tela em branco**: reescrever o template de cada variação de cabeça em `blank-screen.ts`.
4. **LeetCode**: resolver os problemas alvo em `leetcode/`, um arquivo por problema (`0167-two-sum-ii.ts`).

## Estrutura

```
src/
  01-two-pointers/
    README.md                      # padrão, variações, templates, armadilhas, checklist
    01-opposite-ends/
      exercises.ts
      exercises.spec.ts
    02-fast-slow/
    03-read-write/
    04-hash-map-complement/
    blank-screen.ts                # treino de memória
    blank-screen.spec.ts
    leetcode/                      # problemas reais depois das variações
```

## Progresso

| # | Padrão | Variações | Tela em branco | LeetCode |
|---|--------|-----------|----------------|----------|
| 01 | [Two Pointers](src/01-two-pointers/README.md) | ✅ 4/4 | 🟡 | ⬜ |
| 02 | Sliding Window | ⬜ | ⬜ | ⬜ |
| 03 | Prefix Sum | ⬜ | ⬜ | ⬜ |
| 04 | Binary Search | ⬜ | ⬜ | ⬜ |
| 05 | Stack / Monotonic Stack | ⬜ | ⬜ | ⬜ |
| 06 | Linked List | ⬜ | ⬜ | ⬜ |
| 07 | Tree DFS / BFS | ⬜ | ⬜ | ⬜ |
| 08 | Heap / Top K | ⬜ | ⬜ | ⬜ |
| 09 | Backtracking | ⬜ | ⬜ | ⬜ |
| 10 | Graphs | ⬜ | ⬜ | ⬜ |
| 11 | Dynamic Programming | ⬜ | ⬜ | ⬜ |

## Comandos

```bash
bun install

# novo padrão e/ou nova variação (cria a pasta numerada com exercises + spec)
bun run new sliding-window fixed-size

bun test                      # tudo
bun test two-pointers         # um padrão
bun test --watch fast-slow    # uma variação, em watch

bun run check                 # biome format + lint
bun run typecheck             # tsc
```
