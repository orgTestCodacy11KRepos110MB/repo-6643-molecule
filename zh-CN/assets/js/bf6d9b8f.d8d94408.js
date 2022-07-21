"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72088],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76368:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb",sidebar_position:2},p=void 0,c={unversionedId:"quick-start",id:"quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u524d\u7f6e\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/molecule/zh-CN/docs/next/quick-start",draft:!1,editUrl:"https://github.com/DTStack/molecule/edit/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb",sidebar_position:2},sidebar:"docs",previous:{title:"\u6982\u89c8",permalink:"/molecule/zh-CN/docs/next/overview"},next:{title:"\u7f16\u5199\u7b2c\u4e00\u4e2a\u6269\u5c55",permalink:"/molecule/zh-CN/docs/next/the-first-extension"}},s={},m=[{value:"\u524d\u7f6e\u8981\u6c42",id:"\u524d\u7f6e\u8981\u6c42",level:2},{value:"\u547d\u4ee4\u884c\u521b\u5efa\u9879\u76ee",id:"\u547d\u4ee4\u884c\u521b\u5efa\u9879\u76ee",level:2},{value:"npx",id:"npx",level:3},{value:"Yarn",id:"yarn",level:3},{value:"\u542f\u52a8\u9879\u76ee",id:"\u542f\u52a8\u9879\u76ee",level:3},{value:"\u624b\u52a8\u521b\u5efa\u9879\u76ee",id:"\u624b\u52a8\u521b\u5efa\u9879\u76ee",level:2},{value:"\u5b89\u88c5 Molecule",id:"\u5b89\u88c5-molecule",level:3},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u542f\u52a8\u9879\u76ee",id:"\u542f\u52a8\u9879\u76ee-1",level:3},{value:"\u4f7f\u7528 Monaco Editor \u8bed\u8a00\u5305",id:"\u4f7f\u7528-monaco-editor-\u8bed\u8a00\u5305",level:2}],u={toc:m};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u7f6e\u8981\u6c42"},"\u524d\u7f6e\u8981\u6c42"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Node.js 12.13.0 +")," \u7248\u672c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"React.js 16.14.0 +")," \u7248\u672c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn")," - \u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"li"},"Yarn")," \u4f5c\u4e3a\u5305\u7ba1\u7406"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"node -v")," \u547d\u4ee4\u67e5\u770b\u5f53\u524d Node \u7248\u672c\u3002 \u63a8\u8350\u5728 Mac \u7cfb\u7edf\u4e2d\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," \u6765\u7ba1\u7406 Node.js \u591a\u7248\u672c"))),(0,o.kt)("h2",{id:"\u547d\u4ee4\u884c\u521b\u5efa\u9879\u76ee"},"\u547d\u4ee4\u884c\u521b\u5efa\u9879\u76ee"),(0,o.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u547d\u4ee4\u884c\u5de5\u5177\u5feb\u901f\u521b\u5efa Molecule \u9879\u76ee\u3002\u8be5\u5de5\u5177\u662f\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app")," \u521b\u5efa\u9879\u76ee\u7684"),(0,o.kt)("h3",{id:"npx"},"npx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @dtinsight/create molecule-demo\n")),(0,o.kt)("p",null,"\u6216\u8005\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"TypeScript")," \u7684\u9879\u76ee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @dtinsight/create molecule-demo -t\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"npx")," \u8981\u6c42 npm \u7684\u7248\u672c\u662f 5.2+ \u6216\u66f4\u9ad8, ",(0,o.kt)("a",{parentName:"em",href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"},"\u4f4e\u7248\u672c\u7684 npm \u4f7f\u7528\u65b9\u5f0f\u53c2\u8003"))),(0,o.kt)("h3",{id:"yarn"},"Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @dtinsight/ molecule-demo\n")),(0,o.kt)("p",null,"\u6216\u8005\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"TypeScript")," \u7684\u9879\u76ee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @dtinsight/ molecule-demo -t\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"yarn create")," \u8981\u6c42 Yarn \u7684\u7248\u672c\u5728 0.25+")),(0,o.kt)("h3",{id:"\u542f\u52a8\u9879\u76ee"},"\u542f\u52a8\u9879\u76ee"),(0,o.kt)("p",null,"\u5728\u7b49\u5f85\u5b89\u88c5\u4f9d\u8d56\u4e00\u4f1a\u513f\u540e\uff0c\u7ec8\u7aef\u663e\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"Happy coding!\ud83d\ude0a")," \u5219\u8868\u793a\u5b89\u88c5\u6210\u529f\u3002\u63a5\u4e0b\u6765\u53ea\u9700\u8981\u6309\u7167\u7ec8\u7aef\u4e0a\u7684\u5411\u5bfc\u542f\u52a8\u9879\u76ee\u5373\u53ef\u3002"),(0,o.kt)("h2",{id:"\u624b\u52a8\u521b\u5efa\u9879\u76ee"},"\u624b\u52a8\u521b\u5efa\u9879\u76ee"),(0,o.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 React \u5b98\u65b9\u63a8\u8350\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app")," \u811a\u624b\u67b6\u5de5\u5177\u4f5c\u4e3a\u793a\u4f8b\uff0c\n\u8fd9\u91cc\u6211\u4eec",(0,o.kt)("strong",{parentName:"p"},"\u5f3a\u70c8\u63a8\u8350"),"\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Typescript")," \u6a21\u677f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app molecule-demo --template typescript\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u4e00\u4e2a\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"molecule-demo")," \u7684\u76ee\u5f55\uff0c\u5207\u6362\u5230\u9879\u76ee\u6587\u4ef6\u5939\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd molecule-demo\n")),(0,o.kt)("h3",{id:"\u5b89\u88c5-molecule"},"\u5b89\u88c5 Molecule"),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u9700\u8981\u5b89\u88c5 molecule \u7684\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @dtinsight/molecule\n# \u6216\u8005\nnpm install @dtinsight/molecule\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"molecule-demo")," \u9879\u76ee\u4e2d\u81ea\u52a8\u5b89\u88c5 Molecule \u7684\u4f9d\u8d56\u3002"),(0,o.kt)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,o.kt)("p",null,"\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.js")," \u6587\u4ef6\uff0c\u5c06\u8be5\u6587\u4ef6\u7684\u5185\u5bb9\u66ff\u6362\u6210\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.js"',title:'"src/App.js"'},"import React from 'react';\nimport { create, Workbench } from '@dtinsight/molecule';\nimport '@dtinsight/molecule/esm/style/mo.css';\n\nconst moInstance = create({\n    extensions: [],\n});\n\nconst App = () => moInstance.render(<Workbench />);\n\nexport default App;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," \u662f\u9700\u8981\u81ea\u5b9a\u4e49\u7684\u6269\u5c55\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.js")," \u6587\u4ef6\uff0c\u5e76\u4fee\u6539\u5982\u4e0b\u7684\u90e8\u5206:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/index.js"',title:'"src/index.js"'},"root.render(\n-  <React.StrictMode>\n    <App />\n-  </React.StrictMode>\n);\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\u76ee\u524d Molecule \u8fd8\u65e0\u6cd5\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"React.StrictMode")," \u517c\u5bb9\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.js")," \u4e2d\u79fb\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.StrictMode"),"\u3002"))),(0,o.kt)("h3",{id:"\u542f\u52a8\u9879\u76ee-1"},"\u542f\u52a8\u9879\u76ee"),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"start")," \u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n# \u6216\u8005 npm\nnpm run start\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u81ea\u52a8\u5728\u9ed8\u8ba4\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," \u8fd9\u4e2a\u5730\u5740\uff0c\u5373\u53ef\u770b\u5230 Molecule \u9ed8\u8ba4\u7684 IDE \u754c\u9762\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start",src:n(93172).Z,width:"2880",height:"1642"})),(0,o.kt)("h2",{id:"\u4f7f\u7528-monaco-editor-\u8bed\u8a00\u5305"},"\u4f7f\u7528 Monaco Editor \u8bed\u8a00\u5305"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u5e76\u770b\u5230 Molecule \u7684\u9875\u9762\u4e86\uff0c\u4f46\u662f\u8fd9\u4ecd\u7136\u662f\u8fdc\u8fdc\u4e0d\u591f\u7684\u3002\u5982\u679c\u4f60\u60f3\u8981\u5f00\u53d1\u4e00\u4e2a\u7279\u5b9a\u8bed\u6cd5\u7684 Web IDE \u5e94\u7528\uff0c\u4f60\u9700\u8981\u501f\u52a9 Monaco Editor \u7684\u8bed\u8a00\u5305\u6765\u4f7f\u5f97\u4f60\u7684\u8bed\u6cd5\u80fd\u591f\u5728 Web IDE \u4e2d\u9ad8\u4eae\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 Monaco Editor \u7684\u8bed\u8a00\u5305\uff0c\u9700\u8981\u4f7f\u7528\u63d2\u4ef6 ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/monaco-editor-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"monaco-editor-webpack-plugin")),"\uff0c\u6240\u4ee5\u8fd9\u91cc\u6211\u4eec\u5f97\u6269\u5c55\u4e0b ",(0,o.kt)("strong",{parentName:"p"},"Webpack")," \u7684\u9ed8\u8ba4\u914d\u7f6e\u3002\n\u9996\u5148\u6211\u4eec\u5148\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired")," \u5de5\u5177\uff0c\u7136\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"config-overrides.js")," \u6587\u4ef6\uff0c\u7528\u6765\u8986\u76d6\u9ed8\u8ba4 Webpack \u914d\u7f6e\u3002 ",(0,o.kt)("inlineCode",{parentName:"p"},"monaco-editor-webpack-plugin")," \u63d2\u4ef6\u5177\u4f53\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config-overrides.js"',title:'"config-overrides.js"'},"const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');\n\n/* config-overrides.js */\nmodule.exports = function override(config, env) {\n    //do stuff with the webpack config...\n    config.plugins = [\n        ...config.plugins,\n        new MonacoWebpackPlugin([\n            'javascript',\n            'typescript',\n            'css',\n            'html',\n            'json',\n        ]),\n    ];\n\n    return config;\n};\n")),(0,o.kt)("p",null,"\u5b8c\u6574\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u8bf7\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," \u9879\u76ee\u3002"))}d.isMDXComponent=!0},93172:function(e,t,n){t.Z=n.p+"assets/images/molecule-9591d7bdf72594336b2e05164768c9e6.png"}}]);