import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ]),

  // Override rules
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",

      "prettier/prettier": [
        "error",
        {
          // Aquí puedes poner overrides si no quieres usar un archivo .prettierrc separado,
          // pero lo ideal es que lea tu .prettierrc automáticamente.
        }
      ],
      // Import order
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always-and-inside-groups",
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            { pattern: "react", group: "builtin", position: "before" },
            { pattern: "@tests/**", group: "internal", position: "after" },
            { pattern: "@pages/**", group: "internal", position: "after" },
            { pattern: "@assets/**", group: "internal", position: "after" },
            { pattern: "@features/**", group: "internal", position: "after" },
            { pattern: "@shared/**", group: "internal", position: "after" },
            { pattern: "./**/*.css", group: "index", position: "after" }
          ],
          pathGroupsExcludedImportTypes: ["react"]
        }
      ]
    }
  },

  prettierConfig
])

export default eslintConfig
