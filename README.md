# npmpkg-start-react
a React NPM package starter

为了简化老哥们的生产npm包的复杂程度
提供了一个小框架 打包工具使用[bili](https://github.com/egoist/bili)
还有相应的代码规范规则以及代码提交规范

## Installation

```
$ npm i
$ yarn 
```
## 用法

1. 修改<code>package.json</code>
![image.png](https://i.loli.net/2020/01/14/x8qdDzh6C1HfME4.png)
name，author，main，description，keywords改为你需要写入的信息
main 为打包出来的文件路口
<br>
2. 修改<code>bill.config.js</code>
![image.png](https://i.loli.net/2020/01/14/dUuiNszJeOf4PZr.png)
修改input 打包入口文件路径 <code>src/xxxx.jsx</code> 为你的文件名字，假如你的组件叫Websocket则改为<code>src/Websocket.jsx</code><br>
修改moduleName 模块名字 xxxx 为你的文件模块名字 例如：<code>moduleName: 'Websocket'</code><br>
<code>extractCSS</code> 为打包出来的js文件是否要包含css也就是不单独派生出css文件<br>
<code>babel</code> 这边默认已经配置了jsx语法 如果有自己的需求可以打开 <code>babelrc: true</code>, 自己添加<code>.babelrc</code>文件编写自己的所需
<br>

3. README.md文件写入自己的组件介绍以及LICENSE文件替换
<br>

4. 书写规范的<code>.editorconfig</code> 代码规范的<code>.prettierrc</code>以及<code>.eslintrc</code>文件可以根据自己的项目需要自己修改 这些都需要vs code或者你使用的编辑器下载相关的插件才会生效
<br>

5. <code>yarn build</code> 执行代码编译打包生成dist文件夹以及代码源文件
<br>

6. 代码编写完git上传时commit 填写规则<code>type(path): xxxx</code>
type 必须为其中之一<code>[build, chore, ci, docs, feat, fix, improvement, perf, refactor, revert, style, test]</code>
<code>path</code>为修改文件的路径例如src，package之类
<code>xxxx 为本次修改提交</code>
<br>

7. 默认你已经注册过npm账号 在发布前最好去npm里输入自己要发布的包名检查下是否已有相同的包 npm的包名都是唯一的 在终端执行<code>npm publish</code>命令即可推送npm包(注意package.json的version 版本号)<br>
大部分的publish失败都是包名重复<br>
小修改小补丁已经bugfix可以使用<code>npm version patch && npm publish</code>或相应脚本的代码<code>npm run release:patch</code><br>
小升级使用<code>npm version minor && npm publish</code>或<code>npm run release:minor</code><br>
大升级使用<code>npm version major && npm publish</code>或<code>npm run release:major</code>


