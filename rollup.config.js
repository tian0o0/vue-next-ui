import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
// import less from 'rollup-plugin-less'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

// typescript.createCompilerHost
const fs = require('fs-extra');
const path = require('path');
const dir = path.join(__dirname, './src');
const files = fs.readdirSync(dir);
function isDir(dir) {
  return fs.lstatSync(dir).isDirectory();
}

const plugins = [
  commonjs(),
  resolve(),
  typescript({
    clean: true,
    useTsconfigDeclarationDir: true,
    tsconfig: 'tsconfig.json',
  }),
  babel({
    include: 'src/**',
    extensions: ['.js', '.ts', '.tsx'],
    runtimeHelpers: true,
  }),
  terser(),
];
function createRollupConfig() {
  return files
    .filter((name) => isDir(path.join(dir, name)))
    .map((file) => ({
      input: `src/${file}/index.ts`,
      output: [
        {
          format: 'es',
          name: file,
          file: `es/${file}/index.js`,
        },
      ],
      plugins,
    }));
}

export default [
  {
    input: `src/index.ts`,
    output: [{ format: 'es', name: 'index', file: pkg.module }],
    plugins,
  },
  ...createRollupConfig(),
];
