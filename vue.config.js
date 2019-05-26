//сюда будем экспортировать опции, которые хотип применить
module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? ''
		: '/',
	assetsDir: '',
	productionSourceMap: false

}