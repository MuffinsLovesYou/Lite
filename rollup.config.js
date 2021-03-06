import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete';

export default [
    {
        input: 'src/lite.js',
        output: {
            file: 'dist/lite.js',
            format: 'es'
        },
        plugins : [
            del({ targets: 'dist/*' }),
            babel({ babelHelpers: 'bundled' }),
            copy({
                targets : [
                    { src: 'dist/lite.js', dest : 'gh-pages/scripts' }
                ]
            })
        ]
    },
    {
        input : 'tests/tests-index.js',
        output : {
            file : 'gh-pages/tests/lite-tests.js',
            format : 'es'
        },
        plugins: [
            copy({
                targets: [
                    { src: 'tests/lite-test/*', dest: 'gh-pages/tests/lite-test' },
                    { src: 'tests/xhr-test/*', dest: 'gh-pages/tests/xhr-test' }     
                ]
            })
        ]
    }
];