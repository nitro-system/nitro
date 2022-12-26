module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  plugins: ['@nrwl/nx'],
  overrides: [
    {
      files: ['*.*'],
      extends: ['@js-omar/eslint-config/.eslintrc.base.js'],
    },
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      extends: ['@js-omar/eslint-config/.eslintrc.javascript.js'],
      rules: {
        '@nrwl/nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              { sourceTag: '*', onlyDependOnLibsWithTags: ['*'] },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@nrwl/nx/typescript',
        '@js-omar/eslint-config/.eslintrc.typescript.js',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.*.json', './{apps,libs}/*/*/tsconfig.*.json'],
      },
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nrwl/nx/javascript'],
      rules: {},
    },
    {
      files: ['*.{component,modal,page}.ts'],
      extends: ['@js-omar/eslint-config/.eslintrc.angular.js'],
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: { jest: true },
      rules: { '@typescript-eslint/no-unsafe-call': 'off' },
    },
  ],
};
