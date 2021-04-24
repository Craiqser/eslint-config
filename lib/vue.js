module.exports = {
	extends: [
		'plugin:vue/vue3-recommended'
	],
	plugins: [
		'vue'
	],
	rules: {
		'vue/no-deprecated-filter': 2,
		'vue/padding-line-between-blocks': [2, 'always'],
		'vue/prop-name-casing': [2, 'camelCase'],
		'vue/require-v-for-key': 2,
		'vue/script-indent': 2,
		'vue/v-bind-style': [2, 'shorthand']
	}
};
