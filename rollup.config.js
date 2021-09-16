import ts from '@rollup/plugin-typescript';

export default [
    {        
        input: 'example/index.ts',
        output: { 
            file: 'public/main.js',
            format: 'iife',
            sourcemap: true,
            name: 'Example'
        },
        plugins: [
            ts(),
        ],
    },
    {        
        input: 'src/index.ts',
        output: { 
            file: 'dist/main.js',
            format: 'cjs',
            sourcemap: true,
            exports: 'auto',
        },
        plugins: [
            ts(),
        ],
    },
];