System.config({
    baseUrl: "node_modules",
    transpiler: "babel",
    typescriptOptions: {
        module: 'commonjs'
    },
    map: {
        babel: "node_modules/babel-core/browser.js",
        app: "src"
    }
});