System.config({
    baseUrl: "node_modules",
    transpiler: "typescript",
    typescriptOptions: {
        target: 'ES6'
    },
    map: {
        typescript: "node_modules/typescript/bin/typescript.js",
        app: "src/ts"
    }
});