// 导入jQuery 这里使用的是ES6的标准语法
import $ from "jquery";

// 导入 css 如果在代码中不需要使用的 可以不写 xxx from
import "./css/base.css";

// 引入图片
import icon from "./img/girl.png";

// 引入自己写的模块 自己使用Common.js的语法 写的模块
const tools = require("./lib/tools");

// 导入 less文件
// import './less/index.less';
// 导入 scss文件
import './sass/index.scss';

// 写的方法
function component() {
  // 创建div
  var element = document.createElement("div");

  $(element)
    .css("background", "green")
    .text("hello world");

  // 调用自己写的模块
  tools.sayHi();

  return element;
}

// 调用写的方法 创建了一个div 添加到了body上面
document.body.appendChild(component());
// 将图像添加到我们现有的 div。
// 创建了一个 img标签
var myIcon = new Image();
myIcon.src = icon;
document.body.appendChild(myIcon);
