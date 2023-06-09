module.exports = {
	extends: [
		'./js.js',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript'
	],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: './tsconfig.json'
	},
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['*.cts', '*.mts', '*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				project: './tsconfig.json'
			},
			rules: {
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/ban-ts-comment': ['error', {
					minimumDescriptionLength: 3,
					'ts-check': false,
					'ts-expect-error': 'allow-with-description',
					'ts-ignore': true,
					'ts-nocheck': true
				}],
				'@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
				'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
				'@typescript-eslint/comma-dangle': ['error', 'never'],
				'@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
				'@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
				'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
				'@typescript-eslint/consistent-type-assertions': 'off',
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
				'@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
				'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
				'@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
				'@typescript-eslint/explicit-function-return-type': ['error', {
					allowDirectConstAssertionInArrowFunctions: true,
					allowExpressions: true,
					allowHigherOrderFunctions: true,
					allowTypedFunctionExpressions: true
				}],
				'@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
				'@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
				'@typescript-eslint/member-delimiter-style': ['error', {
					multiline: { delimiter: 'none' },
					singleline: { delimiter: 'comma', requireLast: false }
				}],
				'@typescript-eslint/method-signature-style': 'error',
				'@typescript-eslint/naming-convention': ['error', {
					format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
					leadingUnderscore: 'allow',
					selector: 'variableLike',
					trailingUnderscore: 'allow'
				}],
				'@typescript-eslint/no-base-to-string': 'error',
				'@typescript-eslint/no-confusing-void-expression': ['error', {
					ignoreArrowShorthand: false,
					ignoreVoidOperator: false
				}],
				'@typescript-eslint/no-dupe-class-members': 'error',
				'@typescript-eslint/no-dynamic-delete': 'error',
				'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
				'@typescript-eslint/no-extra-non-null-assertion': 'error',
				'@typescript-eslint/no-extra-parens': ['error', 'functions'],
				'@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
				'@typescript-eslint/no-floating-promises': 'error',
				'@typescript-eslint/no-for-in-array': 'error',
				'@typescript-eslint/no-implied-eval': 'error',
				'@typescript-eslint/no-invalid-this': 'error',
				'@typescript-eslint/no-invalid-void-type': 'error',
				'@typescript-eslint/no-loss-of-precision': 'error',
				'@typescript-eslint/no-misused-new': 'error',
				'@typescript-eslint/no-misused-promises': 'error',
				'@typescript-eslint/no-namespace': 'error',
				'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
				'@typescript-eslint/no-non-null-assertion': 'error',
				'@typescript-eslint/no-redeclare': 'error',
				'@typescript-eslint/no-require-imports': 'error',
				'@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
				'@typescript-eslint/no-throw-literal': 'error',
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
				'@typescript-eslint/no-unnecessary-type-assertion': 'error',
				'@typescript-eslint/no-unnecessary-type-constraint': 'error',
				'@typescript-eslint/no-unsafe-argument': 'error',
				'@typescript-eslint/no-unsafe-assignment': 'error',
				'@typescript-eslint/no-unsafe-call': 'error',
				'@typescript-eslint/no-unsafe-member-access': 'error',
				'@typescript-eslint/no-unsafe-return': 'error',
				'@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
				'@typescript-eslint/no-var-requires': 'error',
				'@typescript-eslint/object-curly-spacing': ['error', 'always'],
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-includes': 'error',
				'@typescript-eslint/prefer-nullish-coalescing': ['error', {
					ignoreConditionalTests: false,
					ignoreMixedLogicalExpressions: false
				}],
				'@typescript-eslint/prefer-optional-chain': 'error',
				'@typescript-eslint/prefer-readonly': 'error',
				'@typescript-eslint/prefer-reduce-type-parameter': 'error',
				'@typescript-eslint/prefer-ts-expect-error': 'error',
				'@typescript-eslint/promise-function-async': 'error',
				'@typescript-eslint/quotes': ['error', 'single'],
				'@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
				'@typescript-eslint/require-await': 'error',
				'@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
				'@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
				'@typescript-eslint/return-await': ['error', 'always'],
				'@typescript-eslint/semi': ['error', 'always'],
				'@typescript-eslint/space-before-blocks': ['error', 'always'],
				'@typescript-eslint/space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
				'@typescript-eslint/space-infix-ops': 'error',
				'@typescript-eslint/strict-boolean-expressions': ['error', {
					allowAny: false,
					allowNullableBoolean: false,
					allowNullableNumber: false,
					allowNullableObject: false,
					allowNullableString: false,
					allowNumber: false,
					allowString: false
				}],
				'@typescript-eslint/type-annotation-spacing': 'error',
				'@typescript-eslint/unbound-method': 'error',
				'no-undef': 'off'
			}
		}
	]
};
