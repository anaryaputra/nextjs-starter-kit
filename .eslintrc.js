module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    /** Airbnb Style Guides */
    /** If you want to turn Airbnb Style Guide or use another style guide, comment or remove "airbnb" and "airbnb-typescript" */
    "airbnb",
    "airbnb-typescript",
    /** End of Airbnb Style Guides */

    "next/core-web-vitals",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.eslint.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "prettier", "simple-import-sort"],
  rules: {
    /** Import Rules */
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    /** End of Import Rules */

    /** Prettier Rules */
    "prettier/prettier": "error",
    /** End of Prettier Rules */

    /** Simple Import Sort Rules */
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(css)$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    /** End of Simple Import Sort Rules */
  },
};
