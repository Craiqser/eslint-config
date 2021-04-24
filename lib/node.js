module.exports = {
	env: {
		node: true
	},
	overrides: [
		{
			files: ['*.js', '*.mjs'],
			rules: {
				'quotes': [2, 'single']
			}
		}
	]
};
