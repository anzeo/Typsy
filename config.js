System.config({
    transpiler: "typescript",
    packages: {
        '/src': {
            main: 'app',
            defaultExtension: 'ts'
        },
        '/node_modules/angular2': {
            main: 'angular2',
            defaultExtension: 'js'
        }
    },
    paths: {
        "angular2/*": "/node_modules/angular2/*"
    },
    map: {
        typescript: "/lib/typescript@v1.5-beta2/bin/typescript.js"
    }
});