module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
		worker: true
	},
	extends: ['eslint:recommended'],
	globals: {
		document: 'readonly',
		navigator: 'readonly',
		window: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['import', 'n', 'promise'],
	rules: {
		'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
		'array-bracket-spacing': ['error', 'never'],
		'array-callback-return': ['error', {
			allowImplicit: false,
			checkForEach: false
		}],
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': ['error', { before: true, after: true }],
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		camelcase: ['error', {
			ignoreDestructuring: false,
			ignoreGlobals: true,
			ignoreImports: false,
			properties: 'always'
		}],
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error', { after: true, before: false }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
		'consistent-return': 'error',
		'constructor-super': 'error',
		curly: ['error', 'multi-line'],
		'default-case-last': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': ['error', { allowKeywords: true }],
		'eol-last': 'error',
		eqeqeq: ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'generator-star-spacing': ['error', 'after'],

		'import/export': 'error',
		'import/first': 'error',
		'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
		'import/no-duplicates': 'error',
		'import/no-named-default': 'error',
		'import/no-webpack-loader-syntax': 'error',

		indent: ['error', 'tab', {
			ArrayExpression: 1,
			CallExpression: { arguments: 1 },
			flatTernaryExpressions: false,
			FunctionDeclaration: { parameters: 1, body: 1 },
			FunctionExpression: { parameters: 1, body: 1 },
			ignoreComments: false,
			// IgnoredNodes: ["CallExpression > FunctionExpression.callee > BlockStatement.body"],
			ImportDeclaration: 1,
			MemberExpression: 1,
			ObjectExpression: 1,
			offsetTernaryExpressions: true,
			outerIIFEBody: 'off',
			StaticBlock: { body: 1 },
			SwitchCase: 1,
			VariableDeclarator: 1
		}],
		'key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'minimum' }],
		'keyword-spacing': ['error', {
			after: true,
			before: true,
			overrides: {
				function: { after: false }
			}
		}],
		'linebreak-style': ['error', 'unix'],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'max-len': 'off',
		'max-nested-callbacks': ['error', { max: 5 }],
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
		'new-parens': 'error',

		'n/handle-callback-err': ['error', '^(err|error)$'],
		'n/no-callback-literal': 'error',
		'n/no-deprecated-api': 'error',
		'n/no-exports-assign': 'error',
		'n/no-new-require': 'error',
		'n/no-path-concat': 'error',
		'n/process-exit-as-throw': 'error',

		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-confusing-arrow': ['error', { allowParens: true }],
		'no-console': 'off',
		'no-const-assign': 'error',
		'no-constant-condition': ['error', { checkLoops: false }],
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': ['error', 'all', { enforceForArrowConditionals: false, nestedBinaryExpressions: false, returnAssign: false }],
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implied-eval': 'error',
		'no-import-assign': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-mixed-operators': ['error', {
			allowSamePrecedence: true,
			groups: [
				['+', '-', '*', '/', '%', '**'],
				['&', '|', '^', '~', '<<', '>>', '>>>'],
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||', '?:'],
				['in', 'instanceof']
			]
		}],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': ['error', { builtinGlobals: false }],
		'no-regex-spaces': 'error',
		'no-return-assign': ['error', 'except-parens'],
		'no-return-await': 'error',
		'no-self-assign': ['error', { props: true }],
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': ['error', { defaultAssignment: false }],
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': ['error', {
			allowShortCircuit: true,
			allowTaggedTemplates: true,
			allowTernary: true
		}],
		'no-unused-vars': ['error', {
			args: 'all',
			caughtErrors: 'none',
			ignoreRestSiblings: true,
			vars: 'all'
		}],
		'no-use-before-define': ['error', { classes: false, functions: false, variables: false }],
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'warn',
		'no-void': 'error',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'object-curly-newline': ['error', { multiline: true, consistent: true }],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
		'object-shorthand': ['error', 'always'],
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': ['error', 'before'],
		'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',

		'promise/param-names': 'error',

		'quote-props': ['error', 'as-needed'],
		quotes: ['error', 'double', { allowTemplateLiterals: true }],
		'rest-spread-spacing': ['error', 'never'],
		semi: ['error', 'always'],
		'semi-spacing': ['error', { after: true, before: false }],
		'sort-imports': 'warn',
		'sort-vars': 'warn',
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', { anonymous: 'never', asyncArrow: 'always', named: 'never' }],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': ['error', { nonwords: false, overrides: { typeof: false }, words: true }],
		strict: ['error', 'global'],
		'symbol-description': 'error',
		'template-curly-spacing': ['error', 'never'],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
		'use-isnan': ['error', {
			enforceForIndexOf: true,
			enforceForSwitchCase: true
		}],
		'valid-typeof': ['error', { requireStringLiterals: true }],
		'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
		'yield-star-spacing': ['error', 'both'],
		yoda: ['error', 'never']
	}
};