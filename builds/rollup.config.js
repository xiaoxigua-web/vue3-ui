import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import { getPackagesSync } from '@lerna/project';
import vue from 'rollup-plugin-vue'

const inputs = getPackagesSync().map(pck => pck.name).filter(name => name.includes('@vue3-ui'));
export default {
    input: path.resolve(__dirname, `../packages/vue3-ui/index.ts`),
    output: {
        format: 'es',
        file: `lib/index.esm.js`,
    },
    plugins: [
        nodeResolve(),
        vue({
            target: 'browser'
        }),
        typescript({
           exclude: [
               'node_modules',
               'website'
           ]
        })
    ],
    external(id) { // 排除vue本身
        return /^vue/.test(id)
    },
}
