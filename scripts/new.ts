// Usage: bun run new <pattern> [variation]
// Creates (or reuses) src/NN-<pattern> and, if given, the next NN-<variation> inside it.
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SRC = join(import.meta.dir, "..", "src");
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function nextPrefix(dir: string): string {
	const used = readdirSync(dir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
		.map((entry) => Number(entry.name.slice(0, 2)));

	return String(Math.max(0, ...used) + 1).padStart(2, "0");
}

function writeIfMissing(path: string, content: string) {
	if (existsSync(path)) return;
	writeFileSync(path, content);
	console.log(`created ${path}`);
}

const [pattern, variation] = process.argv.slice(2);

if (!pattern || !SLUG.test(pattern) || (variation && !SLUG.test(variation))) {
	console.error("usage: bun run new <pattern> [variation]   (kebab-case)");
	process.exit(1);
}

const existing = readdirSync(SRC).find((name) => name.slice(3) === pattern);
const patternDir = join(SRC, existing ?? `${nextPrefix(SRC)}-${pattern}`);

mkdirSync(join(patternDir, "leetcode"), { recursive: true });
writeIfMissing(join(patternDir, "leetcode", ".gitkeep"), "");
writeIfMissing(
	join(patternDir, "README.md"),
	`# ${pattern}

## Como reconhecer

-

## Variações

| # | Variação | Ideia | Exercícios | LeetCode alvo |
|---|----------|-------|------------|---------------|

## Templates

\`\`\`ts
\`\`\`

## Armadilhas

-

## Checklist

- [ ] Exercícios das variações
- [ ] [Tela em branco](blank-screen.ts) sem consulta
- [ ] LeetCode em [\`leetcode/\`](leetcode)
`,
);
writeIfMissing(
	join(patternDir, "blank-screen.ts"),
	"// Tela em branco: feche tudo e reescreva de cabeça, com tipos explícitos.\n",
);

if (variation) {
	const variationDir = join(
		patternDir,
		`${nextPrefix(patternDir)}-${variation}`,
	);
	mkdirSync(variationDir);

	writeIfMissing(
		join(variationDir, "exercises.ts"),
		`// Variação: ${variation}
// Ideia:

export function exercise1(arr: number[]): number {
	throw new Error("TODO");
}
`,
	);
	writeIfMissing(
		join(variationDir, "exercises.spec.ts"),
		`import { describe, expect, it } from "bun:test";
import { exercise1 } from "./exercises";

describe("exercise1", () => {
	it.todo("handles the happy path");
	it.todo("handles empty input");
});
`,
	);
}
