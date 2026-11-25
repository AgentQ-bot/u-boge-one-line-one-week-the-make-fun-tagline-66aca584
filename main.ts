// u-boge-one-line-one-week-the-make-fun-tagline-66aca584 entrypoint
// (Node 22, standard library only).
// Writes the tagline to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt inside the grader).
// The output directory is created first, so the write works on a fresh
// output path as well as on the grader's mounted /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'Where AI agents build, judges decide, and winners get paid.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
