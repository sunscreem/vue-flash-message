!function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],m=0,f=[];m<r.length;m++)i=r[m],o[i]&&f.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(u&&u(e);f.length;)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-flash-message/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),s()}({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("e2a1");s.n(a).a},1582:function(t,e,s){"use strict";var a=s("adc3");s.n(a).a},3664:function(t,e,s){var a=s("d857");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,s("499e").default)("0d52856b",a,!0,{sourceMap:!1,shadowMode:!1})},"3f8c":function(t,e,s){(t.exports=s("2350")(!1)).push([t.i,"#app{-webkit-box-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:100vw;min-height:100vh;background:-webkit-gradient(linear,left top,right top,from(#a224dc),to(#3624dc));background:linear-gradient(90deg,#a224dc,#3624dc);background-repeat:no-repeat;background-size:cover;font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center}#app,#app section{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#app section{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;width:40vw}#app section>h1,#app section>p{color:#fff}#app section>p{margin-bottom:60px}#app section .callback-text{min-height:2.5rem}#app .settings{width:40vw;min-width:425px;margin-left:40px;padding:20px;border-radius:5px;background-color:rgba(0,0,0,.5);-webkit-box-shadow:2px 2px 6px rgba(0,0,0,.2);box-shadow:2px 2px 6px rgba(0,0,0,.2)}#app .settings .settings-presets{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}#app .settings .custom-settings h3,#app .settings .settings-presets h3{width:100%;color:#fff}#app .settings .custom-settings form{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}#app .settings .custom-settings label{display:block;font-weight:300;letter-spacing:1.3px;min-width:40%;margin-bottom:20px;color:#fff}#app .settings .custom-settings input,#app .settings .custom-settings select{display:block;min-width:40%;margin-bottom:20px;border:none;background-color:hsla(0,0%,100%,.7);padding:5px}#app .settings .custom-settings button{display:block;max-width:40%;margin:0 auto;margin-bottom:20px}#app button{display:block;margin-bottom:20px;max-width:50%;width:40%;padding:10px;border:2px solid;border-radius:5px;font-size:.8rem;font-weight:700;cursor:pointer;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in}#app button.error{background-color:rgba(241,34,34,.68);border-color:#f12222}#app button.error:hover{background-color:#f12222}#app button.warning{background-color:rgba(241,139,34,.68);border-color:#f18b22}#app button.warning:hover{background-color:#f18b22}#app button.success{background-color:rgba(1,148,122,.68);border-color:#01947a}#app button.success:hover{background-color:#01947a}#app button.info{background-color:rgba(16,135,194,.68);border-color:#1087c2}#app button.info:hover{background-color:#1087c2}#app button.empty{background-color:rgba(191,39,222,.68);border-color:#bf27de}#app button.empty:hover{background-color:#bf27de}#app button.custom{background-image:linear-gradient(72deg,#e66465,#2e3ffa);border-color:#e66465;color:#fff}#app button.custom_two{background-color:rgba(222,39,176,.68);border-color:#de27b0}#app button.custom_two:hover{background-color:#de27b0}.custom_msg{background:linear-gradient(72deg,#f713cc,#177bff)}.custom_msg._vue-flash-msg-body ._vue-flash-msg-body__icon{width:100%}@media (min-width:320px) and (max-width:1023px){#app{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}#app button{width:45%;max-width:45%;font-size:.6rem}#app section{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:90%}#app .settings{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;width:90%;min-width:90%;margin:0 auto}#app .settings form input,#app .settings form select{width:35%;max-width:35%}#app .custom_msg_two{width:100%;max-width:100%}}",""])},"425c":function(t,e,s){t.exports=s.p+"img/information.76cb9faa.svg"},"449c":function(t,e,s){t.exports=s.p+"img/warning.ffb0426a.svg"},"4dcb":function(t,e,s){var a=s("812c");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,s("499e").default)("6e063d30",a,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,s){"use strict";s.r(e),s("cadf"),s("551c"),s("097d");var a=s("2b0e"),o={name:"app",data:function(){return{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum, ligula ac accumsan lobortis, nulla ante pharetra magna, sed sagittis dui metus sit amet lorem. ",callbackText:"",customMessageIcon:"".concat(s("b288")),succesIcon:"".concat(s("d1ae")),warningIcon:"".concat(s("7984")),errorIcon:"".concat(s("449c")),infoIcon:"".concat(s("425c")),doveIcon:"".concat(s("a016")),sounds:{message:"".concat(s("6ea5")),delete:"".concat(s("af7a"))},userData:{position:"right bottom",strategy:"single",title:"",message:"",icon:"",time:8e3}}},methods:{showText:function(){new Audio(this.sounds.message).play(),this.callbackText="Hello from callback! FlashMessage is appear"},clearText:function(){var t=this;new Audio(this.sounds.delete).play(),this.callbackText="My time has passed! I will disappear in 3 second...",setTimeout(function(){return t.callbackText=""},3e3)},showUserMessage:function(){var t=this.userData,e=t.title,s=t.message,a=t.icon,o=t.time;this.flashMessage.show({title:e,message:s,icon:a,time:o})}}},n=(s("034f"),s("2877")),i=Object(n.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",[s("h1",[t._v("Vue Flash Messages")]),s("p",[t._v("An easy way to notify your users ")]),s("p",{staticClass:"callback-text"},[t._v(t._s(t.callbackText))])]),s("aside",{staticClass:"settings"},[s("div",{staticClass:"settings-presets"},[s("h3",[t._v("Preset Styles")]),s("button",{staticClass:"error",on:{click:function(e){t.flashMessage.error({title:"Error Title",message:t.text,icon:t.errorIcon})}}},[t._v("\n              ERROR\n          ")]),s("button",{staticClass:"warning",on:{click:function(e){t.flashMessage.warning({title:"Warning Title",message:t.text,icon:t.warningIcon})}}},[t._v("\n          WARNING\n          ")]),s("button",{staticClass:"success",on:{click:function(e){t.flashMessage.success({title:"Success Title",message:t.text,icon:t.succesIcon})}}},[t._v("\n          SUCCESS\n          ")]),s("button",{staticClass:"info",on:{click:function(e){t.flashMessage.info({title:"Info Title",message:t.text,icon:t.infoIcon})}}},[t._v("\n          INFO\n      ")]),s("button",{staticClass:"empty",on:{click:function(e){t.flashMessage.error({title:"Message Without Icon",message:t.text,icon:!1,clickable:!1})}}},[t._v("\n      WITHOUT ICON AND UNCKLICKABE\n      ")]),s("button",{staticClass:"custom",on:{click:function(e){t.flashMessage.show({title:"Custom Styled Message",message:t.text,icon:t.customMessageIcon,blockClass:"custom_msg"},{mounted:t.showText,destroyed:t.clearText})}}},[t._v("\n          CUSTOM STYLE MESSAGE WITH CALLBACKS\n      ")]),s("button",{staticClass:"custom_two",on:{click:function(e){t.flashMessage.show({title:"Custom Styled Message",message:t.text,icon:t.doveIcon,blockClass:"custom_msg_two",position:"left top",x:e.clientX+20,y:e.clientY+20})}}},[t._v("\n          MESSAGE WITH POSITION PROP\n      ")])]),s("div",{staticClass:"custom-settings"},[s("h3",[t._v("Customize your own message")]),s("form",{attrs:{action:""}},[s("label",{attrs:{for:""}},[t._v("Strategy")]),s("label",{attrs:{for:""}},[t._v("Position")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.userData.strategy,expression:"userData.strategy"}],attrs:{name:"",id:""},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.userData,"strategy",e.target.multiple?s:s[0])},function(e){t.flashMessage.setStrategy(e.target.value)}]}},[s("option",{attrs:{value:"single",selected:""}},[t._v("single")]),s("option",{attrs:{value:"multiple"}},[t._v("multiple")])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.userData.position,expression:"userData.position"}],attrs:{name:"",id:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.userData,"position",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"right bottom ",selected:""}},[t._v("right bottom")]),s("option",{attrs:{value:"right top"}},[t._v("right top")]),s("option",{attrs:{value:"left bottom"}},[t._v("left bottom")]),s("option",{attrs:{value:"left top"}},[t._v("left top")])]),s("label",{attrs:{for:""}},[t._v("Title")]),s("label",{attrs:{for:""}},[t._v("Message")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.title,expression:"userData.title"}],attrs:{type:"text",name:"",id:"",placeholder:"Message Title"},domProps:{value:t.userData.title},on:{input:function(e){e.target.composing||t.$set(t.userData,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.message,expression:"userData.message"}],attrs:{type:"text",name:"",id:"",placeholder:"Message Text"},domProps:{value:t.userData.message},on:{input:function(e){e.target.composing||t.$set(t.userData,"message",e.target.value)}}}),s("label",{attrs:{for:""}},[t._v("Icon")]),s("label",{attrs:{for:""}},[t._v("Duration in ms")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.icon,expression:"userData.icon"}],attrs:{type:"text",name:"",id:"",placeholder:"URL to image"},domProps:{value:t.userData.icon},on:{input:function(e){e.target.composing||t.$set(t.userData,"icon",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.userData.time,expression:"userData.time",modifiers:{number:!0}}],attrs:{type:"text",name:"",id:"",placeholder:"Time the message will live in ms"},domProps:{value:t.userData.time},on:{input:function(e){e.target.composing||t.$set(t.userData,"time",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),s("button",{attrs:{type:"button",name:"button"},on:{click:t.showUserMessage}},[t._v("Show Message")])])])]),s("FlashMessage",{attrs:{position:t.userData.position}})],1)},[],!1,null,null,null);i.options.__file="App.vue";var r=i.exports;s("7f7f"),s("f751");var l={},c=(s("88b1"),Object(n.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return"single"===t.strategy?s("div",{class:["_vue-flash-msg-container",t.positionClass]},[s("transition",{attrs:{name:t.positionClass,mode:"out-in"}},[t.showMessage?s("VueMessageBlock",{attrs:{messageObj:t.message}}):t._e()],1)],1):s("transition-group",{class:["_vue-flash-msg-container",t.positionClass],attrs:{name:t.positionClass,tag:"div"}},t._l(t.messages,function(t){return s("VueMessageBlock",{key:t.id,attrs:{messageObj:t}})}),1)},[],!1,null,null,null));c.options.__file="Container.vue";var u=c.exports,m=s("3835");s("28a5");var f={},p=(s("1582"),Object(n.a)(f,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:[t.classObj,t.position.class,t.messageObj.blockClass],style:[t.position.style],on:{click:t.clickHandler}},[t.messageObj.icon?s("div",{class:["_vue-flash-msg-body__icon",t.messageObj.iconClass]},[s("img",{attrs:{src:t.messageObj.icon,alt:""}})]):t._e(),s("div",{class:["_vue-flash-msg-body__content",t.messageObj.contentClass]},[s("h3",[t._v(t._s(t.messageObj.title))]),s("p",[t._v(t._s(t.messageObj.message))])])])},[],!1,null,null,null));p.options.__file="FlashMessage.vue";var g=p.exports,d=(s("6b54"),s("ade3")),b={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=function(t){return t.extend(u)}(t),a=function(t){return t.extend(g)}(t),o=new t(function(t){return{data:function(){return{messages:[],nextMessageId:1,active:!1,strategy:t.strategy}},methods:{setStrategy:function(t){return!!/^(single)|(multiple)$/i.test(t)&&(this.strategy=t,!0)},show:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a={id:this.nextMessageId++,time:t.time,status:"default",message:"",icon:"",clickable:!0};return a=Object.assign(a,e,s),this.messages.length>0?(this.messages.push(a),"single"===this.strategy&&this.$emit("clearData")):(this.active=!0,this.messages.push(a)),a.id},error:function(t,e){return this.show(Object.assign(t,{status:"error"}),e)},warning:function(t,e){return this.show(Object.assign(t,{status:"warning"}),e)},info:function(t,e){return this.show(Object.assign(t,{status:"info"}),e)},success:function(t,e){return this.show(Object.assign(t,{status:"success"}),e)},deleteMessage:function(e){var s=this;this.active=!1,this.messages=this.messages.filter(function(t){return t.id!==e}),"single"===t.strategy&&this.messages.length>0&&setTimeout(function(){return s.active=!0},500)}},created:function(){this.$on("deleteMessage",this.deleteMessage)}}}(e=Object.assign({name:"flashMessage",tag:"FlashMessage",time:8e3,strategy:"single"},e)));t.prototype[e.name]=o;var n=s.extend(function(t){return{props:{position:{type:String,default:"right bottom",validator:function(t){return t.split(" ").every(function(t){return["top","left","right","bottom"].indexOf(t)>=0})}}},computed:{strategy:function(){return this[t.name].strategy},showMessage:function(){return this[t.name].active},message:function(){return this[t.name].messages[0]},messages:function(){return this[t.name].messages},positionClass:function(){var t=this.position.split(" "),e=Object(m.a)(t,2),s=e[0],a=e[1];return"_vue-flash-msg-container_".concat(s,"-").concat(a)}}}}(e)),i=a.extend(function(t){return{props:{messageObj:{type:Object,required:!0}},data:function(){return{timeoutId:void 0}},computed:{classObj:function(){return{"_vue-flash-msg-body_success":"success"===this.messageObj.status,"_vue-flash-msg-body_error":"error"===this.messageObj.status,"_vue-flash-msg-body_warning":"warning"===this.messageObj.status,"_vue-flash-msg-body_info":"info"===this.messageObj.status,"_vue-flash-msg-body_default":"default"===this.messageObj.status,"_vue-flash-msg-body_unclickabe":!this.messageObj.clickable,"_vue-flash-msg-body":!0}},position:function(){var t;return this.messageObj.position&&"string"==typeof this.messageObj.position&&this.messageObj.x&&this.messageObj.y&&"number"==typeof this.messageObj.x&&"number"==typeof this.messageObj.y?{style:(t={position:"fixed"},Object(d.a)(t,this.messageObj.position.split(" ")[0],"".concat(this.messageObj.x,"px")),Object(d.a)(t,this.messageObj.position.split(" ")[1],"".concat(this.messageObj.y,"px")),t),class:{"_vue-flash-msg-body_flying":!0}}:{style:"",class:""}}},methods:{setTimeout:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.messageObj.time;return setTimeout(t,e)}),clearData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.timeoutId&&e&&clearTimeout(this.timeoutId),this[t.name].$emit("deleteMessage",this.messageObj.id)},clickHandler:function(){this.messageObj.clickable&&this.clearData()}},created:function(){this.timeoutId=this.setTimeout(this.clearData.bind(this,!1),this.messageObj.time),this[t.name].$once("clearData",this.clearData)},mounted:function(){this.messageObj.mounted&&"function"==typeof this.messageObj.mounted&&this.messageObj.mounted()},destroyed:function(){this.messageObj.destroyed&&"function"==typeof this.messageObj.destroyed&&this.messageObj.destroyed()}}}(e));t.component(e.tag,n),t.component("VueMessageBlock",i)}};s("4dcb"),a.a.config.productionTip=!1,a.a.use(b,{name:"flashMessage",tag:"FlashMessage",time:8e3}),new a.a({render:function(t){return t(r)}}).$mount("#app")},"6ea5":function(t,e,s){t.exports=s.p+"media/message.afded356.mp3"},7984:function(t,e,s){t.exports=s.p+"img/light-bulb.a38ecc7d.svg"},"812c":function(t,e,s){(t.exports=s("2350")(!1)).push([t.i,"*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}body,ul{margin:0;padding:0}button,input,p{font-weight:300}h1,h2,h3,h4,h5,h6{font-weight:700}button,input{outline:none}button:active,input:focus{opacity:1}",""])},"88b1":function(t,e,s){"use strict";var a=s("3664");s.n(a).a},a016:function(t,e,s){t.exports=s.p+"img/dove.f9120f7c.svg"},adc3:function(t,e,s){var a=s("da8d");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,s("499e").default)("786f93e1",a,!0,{sourceMap:!1,shadowMode:!1})},af7a:function(t,e,s){t.exports=s.p+"media/delete.426e2e1c.mp3"},b288:function(t,e,s){t.exports=s.p+"img/poop.a89ddecd.svg"},d1ae:function(t,e,s){t.exports=s.p+"img/success.d379641c.svg"},d857:function(t,e,s){(t.exports=s("2350")(!1)).push([t.i,"._vue-flash-msg-container{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:300;width:35%;max-width:35%}._vue-flash-msg-container._vue-flash-msg-container_right-bottom{right:20px;bottom:20px}._vue-flash-msg-container._vue-flash-msg-container_right-top{right:20px;top:20px;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}._vue-flash-msg-container._vue-flash-msg-container_left-bottom{left:20px;bottom:20px}._vue-flash-msg-container._vue-flash-msg-container_left-top{left:20px;top:20px;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}@media (min-width:1024px) and (max-width:1200px){._vue-flash-msg-container{width:50%}}@media (min-width:320px) and (max-width:1023px){._vue-flash-msg-container{font-size:.9em;width:90%;max-width:90%;right:5%}}._vue-flash-msg-container_left-bottom-enter-active,._vue-flash-msg-container_right-bottom-enter-active{-webkit-animation:fromBottom .5s forwards;animation:fromBottom .5s forwards}._vue-flash-msg-container_left-top-enter-active,._vue-flash-msg-container_right-top-enter-active{-webkit-animation:fromTop .5s forwards;animation:fromTop .5s forwards}._vue-flash-msg-container_right-bottom-leave-active,._vue-flash-msg-container_right-top-leave-active{-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation:toRight .8s forwards;animation:toRight .8s forwards}._vue-flash-msg-container_left-bottom-leave-active,._vue-flash-msg-container_left-top-leave-active{-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation:toLeft .8s forwards;animation:toLeft .8s forwards}.flash-message-move{-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}@-webkit-keyframes fromBottom{0%{-webkit-transform:translateY(240px);transform:translateY(240px);opacity:0}70%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:.8}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fromBottom{0%{-webkit-transform:translateY(240px);transform:translateY(240px);opacity:0}70%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:.8}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes fromTop{0%{-webkit-transform:translateY(-240px);transform:translateY(-240px);opacity:0}70%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:.8}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fromTop{0%{-webkit-transform:translateY(-240px);transform:translateY(-240px);opacity:0}70%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:.8}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes toRight{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1;max-height:20vh}30%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:.8;max-height:20vh}70%{-webkit-transform:translateX(240px);transform:translateX(240px);opacity:0;max-height:20vh}to{-webkit-transform:translateX(240px);transform:translateX(240px);opacity:0;max-height:0}}@keyframes toRight{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1;max-height:20vh}30%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:.8;max-height:20vh}70%{-webkit-transform:translateX(240px);transform:translateX(240px);opacity:0;max-height:20vh}to{-webkit-transform:translateX(240px);transform:translateX(240px);opacity:0;max-height:0}}@-webkit-keyframes toLeft{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1;max-height:20vh}30%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:.8;max-height:20vh}70%{-webkit-transform:translateX(-240px);transform:translateX(-240px);opacity:0;max-height:20vh}to{-webkit-transform:translateX(-240px);transform:translateX(-240px);opacity:0;max-height:0}}@keyframes toLeft{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1;max-height:20vh}30%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:.8;max-height:20vh}70%{-webkit-transform:translateX(-240px);transform:translateX(-240px);opacity:0;max-height:20vh}to{-webkit-transform:translateX(-240px);transform:translateX(-240px);opacity:0;max-height:0}}",""])},da8d:function(t,e,s){(t.exports=s("2350")(!1)).push([t.i,"._vue-flash-msg-body{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;margin-bottom:20px;border-radius:5px;-webkit-box-shadow:0 2px 6px rgba(0,0,0,.2);box-shadow:0 2px 6px rgba(0,0,0,.2);background-color:#fff;color:#fff;text-align:left;overflow:hidden;cursor:pointer;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;max-height:20vh}._vue-flash-msg-body._vue-flash-msg-body_unclickabe{cursor:auto}._vue-flash-msg-body._vue-flash-msg-body_flying{max-width:35%}._vue-flash-msg-body ._vue-flash-msg-body__icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:20%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;background-color:#fff;overflow:hidden}._vue-flash-msg-body ._vue-flash-msg-body__icon img{width:80%;height:auto}._vue-flash-msg-body ._vue-flash-msg-body__content{padding-left:20px}._vue-flash-msg-body._vue-flash-msg-body_default{color:#000}._vue-flash-msg-body._vue-flash-msg-body_success{border:1px solid #01947a;background-color:rgba(1,148,122,.68)}._vue-flash-msg-body._vue-flash-msg-body_success:hover{background-color:#01947a}._vue-flash-msg-body._vue-flash-msg-body_success ._vue-flash-msg-body__content{border-left:5px solid #01947a}._vue-flash-msg-body._vue-flash-msg-body_info{border:1px solid #1087c2;background-color:rgba(16,135,194,.68)}._vue-flash-msg-body._vue-flash-msg-body_info:hover{background-color:#1087c2}._vue-flash-msg-body._vue-flash-msg-body_info ._vue-flash-msg-body__content{border-left:5px solid #1087c2}._vue-flash-msg-body._vue-flash-msg-body_error{border:1px solid #f12222;background-color:rgba(241,34,34,.68)}._vue-flash-msg-body._vue-flash-msg-body_error:hover{background-color:#f12222}._vue-flash-msg-body._vue-flash-msg-body_error ._vue-flash-msg-body__content{border-left:5px solid #f12222}._vue-flash-msg-body._vue-flash-msg-body_warning{border:1px solid #f18b22;background-color:rgba(241,139,34,.68)}._vue-flash-msg-body._vue-flash-msg-body_warning:hover{background-color:#f18b22}._vue-flash-msg-body._vue-flash-msg-body_warning ._vue-flash-msg-body__content{border-left:5px solid #f18b22}@media (min-width:1024px) and (max-width:1200px){._vue-flash-msg-body{width:100%}._vue-flash-msg-body ._vue-flash-msg-body__content{padding:15px}}@media (min-width:320px) and (max-width:1023px){._vue-flash-msg-body{font-size:.9em;width:100%;right:5%}._vue-flash-msg-body ._vue-flash-msg-body__content{padding:10px}}",""])},e2a1:function(t,e,s){var a=s("3f8c");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,s("499e").default)("1f50beb8",a,!0,{sourceMap:!1,shadowMode:!1})}});