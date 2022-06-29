module.exports = {
	devServer:{
		proxy:{
			//api是后端数据接口的上下文路径
			'/api':{
				target:'http://111.229.37.167',
				//允许跨域
				changOrigin:true,
			}
		}
	}
}