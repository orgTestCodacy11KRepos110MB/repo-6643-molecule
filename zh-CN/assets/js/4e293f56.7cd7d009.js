"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2857],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"\u8d21\u732e\u6307\u5357",sidebar_label:"\u8d21\u732e\u6307\u5357"},p=void 0,c={unversionedId:"contributing",id:"version-0.9.0-beta.1/contributing",title:"\u8d21\u732e\u6307\u5357",description:"Development",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.9.0-beta.1/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/molecule/zh-CN/docs/contributing",editUrl:"https://github.com/DTStack/molecule/website/i18n/zh-CN",tags:[],version:"0.9.0-beta.1",frontMatter:{title:"\u8d21\u732e\u6307\u5357",sidebar_label:"\u8d21\u732e\u6307\u5357"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49\u5de5\u4f5c\u53f0",permalink:"/molecule/zh-CN/docs/advanced/customize-workbench"}},u=[{value:"Development",id:"development",children:[],level:2},{value:"Git Work Flow",id:"git-work-flow",children:[],level:2},{value:"Naming rules",id:"naming-rules",children:[{value:"Reference",id:"reference",children:[],level:3}],level:2}],s={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:DTStack/molecule.git\n")),(0,i.kt)("p",null,"\u9996\u5148 Clone \u6e90\u7801\u5230\u672c\u5730\n",(0,i.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u6a21\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn # install dependencies\n\nyarn dev # \u542f\u52a8\u5f00\u53d1\u6a21\u5f0f\n")),(0,i.kt)("p",null,"Molecule \u4e2d\u7684\u7ec4\u4ef6\u662f\u57fa\u4e8e Storybook \u5f00\u53d1\u5e76\u7ba1\u7406\u7684\uff0c\u9884\u89c8\u5730\u5740\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:6006/"),"\u9ed8\u8ba4\u5730\u5740\u6d4f\u89c8\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6784\u5efa & \u9884\u89c8")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\nyarn web # \u9884\u89c8\u6253\u5305\u540e\u7684 Web\n")),(0,i.kt)("p",null,"\u5f53\u524d\u6211\u4eec\u9ed8\u8ba4\u5c06 Molecule \u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"ES6")," \u6a21\u5757\u7684\u65b9\u5f0f\u6784\u5efa\u5230 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"esm"))," \u76ee\u5f55\u3002\u53e6\u5916\uff0c\n\u8fd9\u91cc\u9664\u4e86 Storybook \u63d0\u4f9b\u7684\u7ec4\u4ef6\u9884\u89c8\u6a21\u5f0f\u4ee5\u5916\uff0c\u6211\u4eec\u540c\u65f6\u5185\u7f6e\u4e86\u4e00\u4e2a\u4f7f\u7528 ESM \u6a21\u5757\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Web")," \u9884\u89c8\u6a21\u5f0f\u3002"),(0,i.kt)("h2",{id:"git-work-flow"},"Git Work Flow"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow/"},"Branch-based Workflow")),(0,i.kt)("h2",{id:"naming-rules"},"Naming rules"),(0,i.kt)("p",null,"Unify the Service methods basic prefix naming:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add, prefix for Add sth."),(0,i.kt)("li",{parentName:"ul"},"remove, prefix for Remove sth."),(0,i.kt)("li",{parentName:"ul"},"update, prefix for Update sth."),(0,i.kt)("li",{parentName:"ul"},"get, prefix for Get sth."),(0,i.kt)("li",{parentName:"ul"},"set, prefix for Set sth."),(0,i.kt)("li",{parentName:"ul"},"create, perfix for create sth."),(0,i.kt)("li",{parentName:"ul"},"on, prefix for listen to the event."),(0,i.kt)("li",{parentName:"ul"},"find, prefix for Find sth."),(0,i.kt)("li",{parentName:"ul"},"move, prefix for Move sth."),(0,i.kt)("li",{parentName:"ul"},"append, prefix for Append sth."),(0,i.kt)("li",{parentName:"ul"},"toggle, prefix for Toggle sth.")),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"},"Accessible Rich Internet Applications")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/api/get-started/your-first-extension"},"VS Code Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/api"},"https://code.visualstudio.com/api"))))}f.isMDXComponent=!0}}]);