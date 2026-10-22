# 🧩 DSA Patterns

Estudo contínuo de DSA guiado por **padrões**: um padrão por mês. A semana 1 serve para aprender a família de variações com exercícios de brinquedo. No resto do mês, subo uma escada de problemas do LeetCode, derivando cada solução sozinho.

> Ritmo de 50 min/dia, 6 dias por semana, e domingo não tem estudo. **Não marco tempo por problema: ele fecha quando eu resolvo, não quando o tempo acaba.**

---

## 🎯 O problema que este método resolve

Entender a solução não é a mesma coisa que derivar a solução. Ler uma solução e achar que faz sentido é reconhecimento passivo. Partir da tela em branco e escolher a técnica é geração ativa, e **o gargalo é a geração**.

Por isso, as regras são:

- Nunca começo pelo código.
- **Nunca abro o solution.**
- Todo padrão fecha com cards de Anki sobre o **padrão**, nunca sobre um problema do LeetCode.

---

## 🗓 O mês

### Semana 1: aprender o padrão (só teoria + exercícios de brinquedo)

```
seg–qui  UMA variação por vez: sinal + template em TS + trace passo a passo → exercícios
         fáceis dela → só passo pra próxima variação quando acerto
sex      QUANDO NÃO USAR + como as variações se confundem + todos os templates de cabeça,
         tela em branco
sáb      cards de Anki: UM por variação, sobre o padrão
```

As variações são máquinas: eu as recebo, não as derivo. O que eu derivo depois é **qual variação usar**, a partir do sinal do input. **Não tem LeetCode nesta semana.**

### Abertura de mês (a partir do Mês 2): revisão espaçada

Antes da escada nova, re-resolvo **2–3 problemas de meses anteriores sem saber de qual padrão eles são**. A triagem a frio é o gargalo de verdade. Se um deles não sair, é sinal de que aquele padrão não firmou, e eu volto nele.

### Resto do mês: subir a escada

São ~9 problemas do padrão, do fácil ao difícil. No primeiro, que é **guiado**, eu escolho a variação e o Claude só reage.

- **Abordagem antes de código, sempre:** brute force → desperdício → técnica, e só depois implemento.
- **Se eu travar, peço dica**, um degrau por vez. O solution pronto, **nunca**.
- **Só subo de faixa** (fácil → médio → difícil) quando a faixa atual está firme.
- **Não avanço de mês** enquanto não fechar todos os problemas do tema.

**Dia de código:** começo com 5 min de aquecimento, escrevendo de cabeça o template base do padrão. Quando o esqueleto sai automático, a cabeça fica livre para a estratégia.

---

## 📁 Como isso vira código aqui

| Etapa | Onde |
|-------|------|
| Sinal, templates, armadilhas, quando não usar | `src/NN-padrao/README.md` |
| Exercícios de brinquedo por variação (seg–qui) | `src/NN-padrao/NN-variacao/exercises.ts` + `.spec.ts` |
| Templates de cabeça (sex + aquecimento diário) | `src/NN-padrao/blank-screen.ts` |
| Escada de problemas | `src/NN-padrao/leetcode/NNNN-nome.ts` |

```
src/
  01-two-pointers/
    README.md
    01-opposite-ends/
      exercises.ts
      exercises.spec.ts
    02-fast-slow/
    03-read-write/
    04-hash-map-complement/
    blank-screen.ts
    blank-screen.spec.ts
    leetcode/
```

---

## 🗺 Mapa macro

Cada linha é um mês, sem datas: só avanço quando a escada inteira do tema sai. ⭐ marca os meses densos.

| Mês | Padrão | Status |
|-----|--------|--------|
| 1 | [Arrays + Two Pointers](src/01-two-pointers/README.md) | ✅ |
| 2 | Sliding Window | 🟡 próximo |
| 3 | Strings & Palíndromos | ⬜ |
| 4 | Pattern Matching (KMP, Rabin-Karp) | ⬜ |
| 5 | HashMap & HashSet | ⬜ |
| 6 | LinkedList | ⬜ |
| 7 | Stacks, Queues, Monotonic Stack | ⬜ |
| 8 | Trees ⭐ | ⬜ |
| 9 | Heaps & Priority Queues | ⬜ |
| 10 | DP 1D ⭐ | ⬜ |
| 11 | DP 2D + Knapsack ⭐ | ⬜ |
| 12 | Graphs ⭐ | ⬜ |
| 13 | Graphs Avançados + Backtracking | ⬜ |
| 14 | Binary Search | ⬜ |
| 15 | Tries + Greedy + Bit Manipulation | ⬜ |

---

## 🪜 Escadas

Um problema só conta quando resolvi derivando sozinho, com ou sem dica. Abrir o solution não fecha o problema.

### Mês 1: Arrays + Two Pointers

**Variações:** pontas opostas (*ordenado + achar par/soma*) · fast/slow (*ciclo, achar o meio*) · read/write (*in-place + manter um prefixo válido*) · hash map de complemento (*"já vi este valor antes?"*)

*Fácil*
- [x] [LC 1: Two Sum](https://leetcode.com/problems/two-sum/) *(guiado)*
- [x] [LC 26: Remove Duplicates](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- [x] [LC 283: Move Zeroes](https://leetcode.com/problems/move-zeroes/)
- [x] [LC 27: Remove Element](https://leetcode.com/problems/remove-element/)

*Médio*
- [x] [LC 167: Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
- [x] [LC 11: Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
- [x] [LC 15: 3Sum](https://leetcode.com/problems/3sum/)
- [x] [LC 16: 3Sum Closest](https://leetcode.com/problems/3sum-closest/)
- [x] [LC 560: Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) ⚠️
- [x] [LC 56: Merge Intervals](https://leetcode.com/problems/merge-intervals/)

### Mês 2: Sliding Window

**Revisão espaçada:** 2 problemas, sem rótulo

**Variações:** janela fixa (*subarray/substring de tamanho k*) · janela variável (*"maior/menor" contíguo sob condição*) · `atMost(k) − atMost(k−1)` (*contar com EXATAMENTE k*)

*Fácil*
- [ ] [LC 643: Maximum Average Subarray](https://leetcode.com/problems/maximum-average-subarray-i/) *(guiado)*

*Médio*
- [ ] [LC 1423: Max Points from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)
- [ ] [LC 209: Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
- [ ] [LC 3: Longest Substring Without Repeating](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [ ] [LC 424: Longest Repeating Char Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
- [ ] [LC 438: Find All Anagrams](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
- [ ] [LC 567: Permutation in String](https://leetcode.com/problems/permutation-in-string/)
- [ ] [LC 930: Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)

*Difícil*
- [ ] [LC 76: Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) ⭐
- [ ] [LC 239: Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) ⭐

### Mês 3: Strings & Palíndromos

**Revisão espaçada:** 3 problemas dos meses 1 e 2, sem rótulo

**Variações:** expand-around-center (*palíndromo "mais longo / quantos"*) · two pointers de pontas (*verificar palíndromo, reverter in-place*) · varredura com índice de escrita (*parsing / limpar in-place*)

*Fácil*
- [ ] [LC 125: Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) *(guiado)*
- [ ] [LC 344: Reverse String](https://leetcode.com/problems/reverse-string/)
- [ ] [LC 14: Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
- [ ] [LC 680: Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)

*Médio*
- [ ] [LC 151: Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)
- [ ] [LC 5: Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
- [ ] [LC 647: Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
- [ ] [LC 8: String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/)
- [ ] [LC 49: Group Anagrams](https://leetcode.com/problems/group-anagrams/)
- [ ] [LC 763: Partition Labels](https://leetcode.com/problems/partition-labels/)

> **Métrica:** "resolvi X problemas em Y min" não conta. O que conta é se a escada inteira do tema saiu derivada por mim, e só aí eu avanço de mês.

---

## 🚀 Comandos

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
