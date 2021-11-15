module.exports = {
	env: {
		'vue/setup-compiler-macros': true
	},
	extends: [
		'plugin:vue/vue3-recommended'
	],
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'quotes': 0,
				'no-unused-vars': 0,
				'vue/no-v-html': 0
			}
		}
	],
	plugins: [
		'vue'
	],
	rules: {
		'vue/html-indent': 0,
		'vue/max-attributes-per-line': [2, {
			'multiline': {
				'max': 6
			},
			'singleline': {
				'max': 6
			}
		}],
		'vue/no-deprecated-filter': 2,
		'vue/padding-line-between-blocks': [2, 'always'],
		'vue/prop-name-casing': [2, 'camelCase'],
		'vue/require-v-for-key': 2,
		'vue/script-indent': [2, 'tab', {
			'baseIndent': 0,
			'switchCase': 0,
			'ignores': []
		}],
		'vue/singleline-html-element-content-newline': 0,
		'vue/v-bind-style': [2, 'shorthand']
	}
};
