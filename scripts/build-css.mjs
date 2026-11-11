import { compile } from '@tailwindcss/node';
import { Scanner } from '@tailwindcss/oxide';
import fs from 'fs';
import path from 'path';

export async function buildCss() {
  const inputCssPath = path.resolve('src/styles/input.css');
  const outputCssPath = path.resolve('src/app/globals.css');
  
  const css = fs.readFileSync(inputCssPath, 'utf-8');
  const scanner = new Scanner({
    sources: [
      { base: 'src', pattern: '**/*.{ts,tsx,js,jsx}', negated: false }
    ]
  });
  
  const candidates = scanner.scan();
  const compiler = await compile(css, {
    base: process.cwd(),
    onDependency: () => {}
  });
  
  const output = compiler.build(candidates);
  fs.writeFileSync(outputCssPath, output, 'utf-8');
  console.log(`Successfully compiled Tailwind CSS to ${outputCssPath} (${(output.length / 1024).toFixed(1)} KB, ${candidates.length} candidates scanned)`);
}

if (process.argv[1] && process.argv[1].endsWith('build-css.mjs')) {
  buildCss().catch(err => {
    console.error('Error compiling Tailwind CSS:', err);
    process.exit(1);
  });
}

