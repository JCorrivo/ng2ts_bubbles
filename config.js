System.config({
	transpiler: 'typescript',
    typescriptOptions: {
		emitDecoratorMetadata: true
	},
    map: {
		app: "./app"
	},
	packages: {
		app: {
			main: './main',
			defaultExtension: 'js'
		}
	}
});