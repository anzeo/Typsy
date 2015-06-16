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
        // Added a path for ng2 because internal they require modules as 'angular2/src/...'
        "angular2/*": "/node_modules/angular2/*"
    },
    map: {
        typescript: "/lib/typescript@v1.5-beta2/bin/typescript.js"
    }
});