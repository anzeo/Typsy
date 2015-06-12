System.config({
    baseUrl: "node_modules",
    transpiler: "typescript",
    meta: {
        'src/ts/app.ts': {
            format: "es6"
        }
    },
    map: {
        typescript: "lib/typescript@v1.5-beta2/bin/typescript.js",
        app: "src/ts/app.ts"
    }
});