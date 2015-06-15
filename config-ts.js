System.config({
    baseURL: 'node_modules',
    transpiler: "typescript",
    packages: {
        'angular2': {
            main: 'angular2',
            defaultExtension: 'js'
        }
    },
    map: {
        typescript: "/lib/typescript@v1.5-beta2/bin/typescript.js",
        app: "/src/ts/app.ts"
    }
});