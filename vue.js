module.exports = {
	extends: ['./ts.js', 'plugin:vue/vue3-recommended'],
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			rules: {
				'vue/array-bracket-spacing': ['error', 'never'],
				'vue/arrow-spacing': ['error', { before: true, after: true }],
				'vue/block-order': ['error', {
					order: ['script', 'template', 'style']
				}],
				'vue/block-spacing': ['error', 'always'],
				'vue/block-tag-newline': ['error', {
					singleline: 'always',
					multiline: 'always'
				}],
				'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
				'vue/comma-dangle': ['error', 'never'],
				'vue/comma-spacing': ['error', { before: false, after: true }],
				'vue/comma-style': ['error', 'last'],
				'vue/component-name-in-template-casing': ['error', 'PascalCase'],
				'vue/component-options-name-casing': ['error', 'PascalCase'],
				'vue/custom-event-name-casing': ['error', 'camelCase'],
				'vue/define-macros-order': ['error', {
					order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots']
				}],
				'vue/dot-location': ['error', 'property'],
				'vue/dot-notation': ['error', { allowKeywords: true }],
				'vue/eqeqeq': ['error', 'smart'],
				'vue/html-comment-content-spacing': ['error', 'always', {
					exceptions: ['-']
				}],
				'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
				'vue/keyword-spacing': ['error', { before: true, after: true }],
				'vue/max-attributes-per-line': ['error', {
					multiline: { max: 6 },
					singleline: { max: 6 }
				}],
				'vue/multi-word-component-names': ['error', {
					ignores: ['Todo']
				}],
				'vue/no-constant-condition': 'warn',
				'vue/no-deprecated-filter': 'error',
				'vue/no-empty-pattern': 'error',
				'vue/no-extra-parens': ['error', 'functions'],
				'vue/no-irregular-whitespace': 'error',
				'vue/no-loss-of-precision': 'error',
				'vue/no-restricted-v-bind': ['error', '/^v-/'],
				'vue/no-sparse-arrays': 'error',
				'vue/no-unused-refs': 'error',
				'vue/no-useless-v-bind': 'error',
				'vue/no-v-html': 'off',
				'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
				'vue/object-curly-spacing': ['error', 'always'],
				'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
				'vue/object-shorthand': ['error', 'always', {
					avoidQuotes: true,
					ignoreConstructors: false
				}],
				'vue/operator-linebreak': ['error', 'before'],
				'vue/padding-line-between-blocks': ['error', 'always'],
				'vue/prefer-separate-static-class': 'error',
				'vue/prefer-template': 'error',
				'vue/prop-name-casing': ['error', 'camelCase'],
				'vue/quote-props': ['error', 'consistent-as-needed'],
				'vue/require-default-prop': 'error',
				'vue/require-prop-types': 'error',
				'vue/require-v-for-key': 'error',
				'vue/script-indent': ['error', 'tab', {
					baseIndent: 0,
					ignores: [],
					switchCase: 0
				}],
				'vue/space-in-parens': ['error', 'never'],
				'vue/space-infix-ops': 'error',
				'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
				'vue/template-curly-spacing': 'error',
				'vue/v-bind-style': ['error', 'shorthand']
			}
		}
	]
};
