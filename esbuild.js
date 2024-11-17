import process from 'node:process'
import esbuild from 'esbuild'

const minify = process.env.MINIFY === 'true'

esbuild
  .build({
    entryPoints: ['./dist/bin/code-comment-lm.js'],
    outfile: `./bundle/code-comment-lm${minify ? '.min' : ''}.cjs`,
    bundle: true,
    platform: 'node',
    format: 'cjs',
    target: ['node16'],
    external: [],
    // banner: {
    //   js: '#!/usr/bin/env node',
    // },
    sourcemap: false,
    minify,
  })
  .then(() => {
    console.log('Build succeeded!')
  })
  .catch(() => {
    console.error('Build failed!')
    process.exit(1)
  })
