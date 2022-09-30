module.exports = {
    extends: ["react-app", "react-app/jest"],
    plugins: ["import"],
    overrides: [{
        files: ["*.ts", "*.tsx", "*.d.ts"],
        env: {
            node: true,
        },
        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { vars: "all", args: "after-used" }]
        }
    }]
}