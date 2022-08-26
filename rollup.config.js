import del from 'rollup-plugin-delete'
import { babel } from '@rollup/plugin-babel'
import externals from 'rollup-plugin-node-externals'

const packageJson = require('./package.json')

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    externals(),
    babel({ babelHelpers: 'runtime' }),
  ],
}
