# image-grayscale前端部分

## 环境准备

- 配置webpack环境
  - webpack + webpack-cli
  - webpack-dev-server
  - html-webpack-plugin

- 支持typescript
   - ts-loader 
   - typescirpt

- 支持es6基本语法编译
   - @babel/core
   - @babel/preset-env
   - babel-loader

- 支持react渲染
   - react
   - react-dom
   - @babel/preset-react (记得添加到babel配置文件当中)

- 支持css + less预编译
  - less
  - style-loader
  - css-loader
  - less-loader

- 前端引入input (type=file)读取图片文件
  - input标签
  - FileReader + readAsDataUrl获取base64