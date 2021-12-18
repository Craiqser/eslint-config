module.exports = {
	env: {
		node: true
	},
	extends: ['./default.js'],
	overrides: [
		{
			files: ['*.js', '*.mjs', '*.ts', '*.d.ts'],
			rules: {
				'quotes': [2, 'single']
			}
		}
	]
};
