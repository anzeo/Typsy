System.config({
    baseURL: '/',
    transpiler: "typescript",
    packages: {
        '/src': {
            main: 'app',
            defaultExtension: 'ts'
        },
        'node_modules/angular2': {
            main: 'angular2',
            defaultExtension: 'js',
            map: {

            }
        }
    },
    map: {
        typescript: "/lib/typescript@v1.5-beta2/bin/typescript.js"
    }
});