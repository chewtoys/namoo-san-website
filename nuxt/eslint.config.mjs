import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    ignores: ['.nuxt/**', '.output/**', 'dist/**', 'node_modules/**']
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        computed: 'readonly',
        defineNuxtConfig: 'readonly',
        useFetch: 'readonly',
        useHead: 'readonly',
        useRoute: 'readonly'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
