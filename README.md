webpack使用步骤
	文档传送门
		https://www.webpackjs.com/guides/getting-started/
	初始化项目
		npm init -y
	安装webpack
		cnpm install webpack webpack-cli --save-dev
	创建项目基本结构
		
	在index.js中导入其他需要的代码
	运行 npx webpack 即可执行打包
		把index.js中的代码 以及他引入的所有代码
		合并到 dist下面的 main.js中
	如果要解析其他的资源 需要安装 对应的loader
		webpack默认只能够识别 js
         "watch": "webpack --watch",是自动刷新