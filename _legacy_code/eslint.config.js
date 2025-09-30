import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  { ignores: ["dist/**/*"] },
  {
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        "cypress/globals": true,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-console": "error",
      "prettier/prettier": "error",
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
];
