import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true, // Generates TypeScript declaration files
    sourcemap: true,
    clean: true, // Clean the output directory before building
    external: ['react', 'react-dom'], // React should be external
    loader: {
        ".css": "copy" // Copy CSS files instead of inlining them
    }
});