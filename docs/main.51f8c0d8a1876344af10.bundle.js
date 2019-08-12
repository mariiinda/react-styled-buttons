(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1419:function(module,exports,__webpack_require__){var map={"./components/Button.stories.js":1420,"./ui/Buttons.stories.js":1536};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1419},1420:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"primary",function(){return primary});var _emotion_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(2),__webpack_require__(134)),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(336),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(32),variantValuesObj={primary:"primary",secondary:"secondary",accent1:"accent",accent2:"accent2",accent3:"accent3",accent4:"accent4",gray:"gray"},variantOptionsObj={display:"inline-radio"},variantOptions=function(){var variantDefaultValue=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"primary";return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.optionsKnob)("variant",variantValuesObj,variantDefaultValue,variantOptionsObj)},sizeValuesObj={small:"small",medium:"medium",large:"large"},sizeOptionsObj={display:"inline-radio"},sizeOptions=function(){return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.optionsKnob)("size",sizeValuesObj,"large",sizeOptionsObj)},modeValuesObj={light:"light",dark:"dark"},modeOptionsObj={display:"inline-radio"},modeOptions=function(){return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.optionsKnob)("mode",modeValuesObj,"light",modeOptionsObj)},asValuesObj={button:"button",a:"a"},asOptionsObj={display:"inline-radio"},asOptions=function(){var asDefaultValue=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"button";return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.optionsKnob)("as",asValuesObj,asDefaultValue,asOptionsObj)};__webpack_exports__.default={title:"Buttons|Button",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs,_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__.withA11y]};var primary=function(){var _ref=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},_ref$children=_ref.children,children=void 0===_ref$children?"Primary Button":_ref$children,onClick=_ref.onClick,disabled=_ref.disabled,_ref$id=_ref.id,id=void 0===_ref$id?"primary-button":_ref$id,as=_ref.as;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.c)(_Button__WEBPACK_IMPORTED_MODULE_4__.a,{variant:variantOptions(),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",disabled),size:sizeOptions(),mode:modeOptions(),as:asOptions(as),onClick:onClick,id:id},children)};primary.displayName="primary",primary.__docgenInfo={description:"",methods:[],displayName:"primary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.stories.js"]={name:"primary",docgenInfo:primary.__docgenInfo,path:"src/components/Button.stories.js"})},1535:function(module){module.exports=JSON.parse('{"initialColorMode":"light","useCustomProperties":true,"colors":{"text":"#212529","background":"#ffffff","primary":"#3b5bdb","secondary":"#C2255C","accent":"#008658","accent2":"#C93700","accent3":"#e03131","accent4":"#00788C","muted":"#dbe4ff","gray":"#dee2e6","grayText":"#495057","primaryShades":["#b0b7ff","#0054ff","#0032a8"],"secondaryShades":["#ff91b8","#ff0052","#8c0033"],"accentShades":["#7feab5","#009423","#00582e"],"accent2Shades":["#ff9c61","#ff0000","#910000"],"accent3Shades":["#ff9d89","#ff0000","#a60009"],"accent4Shades":["#82d9ef","#008cdf","#004c5f"],"modes":{"dark":{"text":"#ffffff","background":"#212529","primary":"#b0b7ff","secondary":"#ff91b8","accent":"#7feab5","accent2":"#ff9c61","accent3":"#ff9d89","accent4":"#82d9ef","muted":"#7a839b","gray":"#515458","grayText":"#a3abb3","primaryShades":["#0032a8","#37b0ff","#b0b7ff"],"secondaryShades":["#8c0033","#ff00c2","#ff91b8"],"accentShades":["#00582e","#00ff80","#7feab5"],"accent2Shades":["#910000","#ff6c00","#ff9c61"],"accent3Shades":["#a60009","#ff493b","#ff9d89"],"accent4Shades":["#004c5f","#00f3ff","#82d9ef"]}}},"space":[0,4,8,16,32,64,128,256,512],"fonts":{"body":"\\"IBM Plex Sans\\", Arial, Helvetica, sans-serif","heading":"\\"IBM Plex Sans Medium\\", Arial, Helvetica, sans-serif","monospace":"\\"IBM Plex Mono\\", Courier, monospace"},"fontSizes":["0.625rem","0.75rem","0.875rem","1rem","1.25rem","1.5rem","2rem","3rem","4rem","6rem"],"fontWeights":{"body":400,"heading":"normal","bold":700},"lineHeights":{"body":1.5,"heading":1.125},"radii":["2px","5px","50%"],"zIndices":[10,20,100],"shadows":{"default":"0 .5rem 1rem rgba(0, 0, 0, .15)","sm":"0 .125rem .25rem rgba(0, 0, 0, .075)","lg":"0 1rem 3rem rgba(0, 0, 0, .175)"},"breakpoints":["576px","768px","992px","1200px"],"sizes":{"sm":540,"md":720,"lg":960,"xl":1140},"buttons":{"color":{"border":"none","margin":0,"padding":2,"width":"auto","overflow":"visible","background":"transparent","color":"background","font":"inherit","lineHeight":"normal","cursor":"pointer","bg":"primary","transition":".2s ease-in-out",":hover, :focus":{"bg":"primaryShades.1"},":active":{"bg":"primaryShades.2"}},"outline":{"border":"1px solid","margin":0,"padding":2,"width":"auto","overflow":"visible","background":"transparent","color":"primary","font":"inherit","lineHeight":"normal","cursor":"pointer","position":"relative","borderColor":"currentColor","transition":".2s ease-in-out",":hover":{":before":{"width":"100%"}},":before":{"content":"\'\'","display":"block","position":"absolute","bottom":"-3px","left":0,"width":0,"height":"2px","bg":"currentColor","transition":".2s ease-in-out"}}},"styles":{"root":{"fontFamily":"body","lineHeight":"body","fontWeight":"body","fontSize":3,"color":"text","bg":"background","*::selection":{"bg":"muted","color":"primaryShades.1"}},"Header":{"color":"text","transition":".15s ease-in-out"},"Main":{"bg":"background","transition":".15s ease-in-out"},"Footer":{"bg":"background","transition":".15s ease-in-out"},"h1":{"color":"text","fontFamily":"heading","lineHeight":"1.2","fontWeight":"heading","mt":0,"mb":3,"fontSize":7},"h2":{"color":"text","fontFamily":"heading","lineHeight":"1.2","fontWeight":"heading","mt":0,"mb":2,"fontSize":6},"h3":{"color":"text","fontFamily":"heading","lineHeight":"1.2","fontWeight":"heading","mt":0,"mb":2,"fontSize":5},"h4":{"color":"text","fontFamily":"heading","lineHeight":"1.2","fontWeight":"heading","mt":0,"mb":2,"fontSize":4},"h5":{"color":"text","fontFamily":"heading","lineHeight":"1.2","fontWeight":"heading","mt":0,"mb":2,"fontSize":3},"h6":{"color":"text","fontFamily":"heading","lineHeight":"1.2","fontWeight":"heading","mt":0,"mb":2,"fontSize":3,"textTransform":"uppercase"},"p":{"color":"text","fontFamily":"body","fontWeight":"body","lineHeight":"body","fontSize":3,"mb":3,"mt":0},"small":{"fontSize":1},"a":{"color":"primary","position":"relative","textDecoration":"none",":hover":{":before":{"width":"100%"}},":before":{"content":"\'\'","display":"block","position":"absolute","bottom":"-3px","left":0,"width":0,"height":"2px","bg":"currentColor","transition":".2s ease-in-out"}},"b":{"fontWeight":"bold"},"strong":{"fontWeight":"bold"},"pre":{"fontFamily":"monospace","overflowX":"auto","code":{"color":"inherit"}},"code":{"fontFamily":"monospace","fontSize":"inherit"},"table":{"width":"100%","borderCollapse":"separate","borderSpacing":0},"th":{"textAlign":"left","borderBottomStyle":"solid"},"td":{"textAlign":"left","borderBottomStyle":"solid"},"img":{"maxWidth":"100%","height":"auto"}}}')},1536:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(812),__webpack_require__(825),__webpack_require__(826),__webpack_require__(827),__webpack_require__(487),__webpack_require__(831),__webpack_require__(832),__webpack_require__(833);var core_browser_esm=__webpack_require__(0),react=__webpack_require__(2),react_default=__webpack_require__.n(react),dist=__webpack_require__(336),Button=__webpack_require__(32),tetris_theme_ui_preset_dist=__webpack_require__(161),tetris_theme_ui_preset_dist_default=__webpack_require__.n(tetris_theme_ui_preset_dist),globalStyle={name:"1ev88fz-globalStyle",styles:"*{box-sizing:border-box;margin:0;}* + *{margin-top:1rem;}html,body{width:100%;height:100%;margin:0;padding:0;}label:globalStyle;"},gridStyle=function(_ref2){var text=_ref2.text,background=_ref2.background;return Object(core_browser_esm.b)("display:grid;grid-template-columns:1fr 3fr 1fr;grid-template-rows:auto 1fr 1fr;grid-template-areas:","\n  'header header header'\n  '. buttons .'\n  '. . .'",";background:",background,";color:",text,";width:100%;height:100%;transition:0.2s ease;section{position:relative;}h2{position:absolute;top:0px;left:0;text-transform:uppercase;}")},headerStyle={name:"1tstz6r-headerStyle",styles:"grid-area:header;padding:30px;border-bottom:1px solid currentColor;display:flex;align-items:center;justify-content:center;> div{margin-top:0;button{margin:0 4px;}}label:headerStyle;"},buttonWrapperStyle={name:"1huk9yl-buttonWrapperStyle",styles:"grid-area:buttons;padding:30px;border-bottom:1px solid currentColor;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-evenly;> button{flex:0 1 calc(50% - 20px);margin-top:20px;}label:buttonWrapperStyle;"},_ref={name:"rvphvc-Buttons",styles:"&:hover,&:focus{background:#a64ebc;}&:active{background:#862e9c;}label:Buttons;"},_ref4=Object(core_browser_esm.c)(core_browser_esm.a,{styles:globalStyle});function Buttons(_ref3){var mode=_ref3.mode,setMode=_ref3.setMode,colors=tetris_theme_ui_preset_dist_default.a.colors,colormodeColors="light"===mode?colors:colors.modes.dark;return Object(core_browser_esm.c)(react_default.a.Fragment,null,_ref4,Object(core_browser_esm.c)("div",{css:gridStyle({background:colormodeColors.background,text:colormodeColors.text})},Object(core_browser_esm.c)("div",{css:headerStyle},Object(core_browser_esm.c)(Button.a,{onClick:function onClick(){return setMode("light"===mode?"dark":"light")},size:"small"},"Show ","light"===mode?"dark":"light"," mode")),Object(core_browser_esm.c)("section",{css:buttonWrapperStyle},Object(core_browser_esm.c)(Button.a,{mode:mode},"Default Button"),Object(core_browser_esm.c)(Button.a,{mode:mode,variant:"secondary"},"Secondary Button"),Object(core_browser_esm.c)(Button.a,{mode:mode,variant:"accent"},"Accent1 Button"),Object(core_browser_esm.c)(Button.a,{mode:mode,variant:"accent2"},"Accent2 Button"),Object(core_browser_esm.c)(Button.a,{mode:mode,variant:"accent3"},"Accent3 Button"),Object(core_browser_esm.c)(Button.a,{mode:mode,variant:"accent4"},"Accent4 Button"),Object(core_browser_esm.c)(Button.a,{mode:mode,variant:"gray"},"Gray Button"),Object(core_browser_esm.c)(Button.a,{mode:mode,size:"medium"},"Medium Button"),Object(core_browser_esm.c)(Button.a,{mode:mode,size:"small"},"Small Button"),Object(core_browser_esm.c)(Button.a,{mode:mode,theme:{colors:{background:"#f8f0fc",primary:"#862E9C",modes:{dark:{background:"#333",primary:"#e599f7"}}},shadows:{default:"0 .5rem 1rem rebeccapurple"}},css:_ref},"Custom theme button"))))}var ui_Buttons=Buttons;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Buttons.__docgenInfo={description:"",methods:[],displayName:"Buttons"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/Buttons.js"]={name:"Buttons",docgenInfo:Buttons.__docgenInfo,path:"src/ui/Buttons.js"}),__webpack_require__.d(__webpack_exports__,"light",function(){return light}),__webpack_require__.d(__webpack_exports__,"dark",function(){return dark});__webpack_exports__.default={title:"UI|Buttons",decorators:[dist.withA11y]};var light=function(){return react_default.a.createElement(function(){var _useState2=_slicedToArray(Object(react.useState)("light"),2),mode=_useState2[0],setMode=_useState2[1];return Object(core_browser_esm.c)(ui_Buttons,{mode:mode,setMode:setMode})})},dark=function(){return react_default.a.createElement(function(){var _useState4=_slicedToArray(Object(react.useState)("dark"),2),mode=_useState4[0],setMode=_useState4[1];return Object(core_browser_esm.c)(ui_Buttons,{mode:mode,setMode:setMode})})};light.__docgenInfo={description:"",methods:[],displayName:"light"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/Buttons.stories.js"]={name:"light",docgenInfo:light.__docgenInfo,path:"src/ui/Buttons.stories.js"}),dark.__docgenInfo={description:"",methods:[],displayName:"dark"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/Buttons.stories.js"]={name:"dark",docgenInfo:dark.__docgenInfo,path:"src/ui/Buttons.stories.js"})},161:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1535)).default;exports.default=_default},32:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(812),__webpack_require__(825),__webpack_require__(826),__webpack_require__(1521),__webpack_require__(827),__webpack_require__(487),__webpack_require__(1528),__webpack_require__(1530),__webpack_require__(831),__webpack_require__(832),__webpack_require__(833);var _emotion_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2),deepmerge__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(836),deepmerge__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_13__),_marinda_tetris_theme_ui_preset__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(161),_marinda_tetris_theme_ui_preset__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_marinda_tetris_theme_ui_preset__WEBPACK_IMPORTED_MODULE_14__);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var disabledStyle={name:"1fa46cq-disabledStyle",styles:"opacity:0.6;cursor:default;transition:none;transform:translate3d(0,0,0);pointer-events:none;label:disabledStyle;"},composeStyles=function(_ref5){var theme=_ref5.theme,themeColors=_ref5.themeColors,variant=_ref5.variant,size=_ref5.size,disabled=_ref5.disabled;console.log({theme:theme,themeColors:themeColors});var _ref,_ref$theme,fourthFontSize,fourthSpace,secondRadius,shadows,body,_ref$themeColors,background,primary,_ref$themeColors$prim,firstShade,secondShade,lastShade,cssStyles=[(_ref={theme:theme,themeColors:themeColors},_ref$theme=_ref.theme,fourthFontSize=_slicedToArray(_ref$theme.fontSizes,4)[3],fourthSpace=_slicedToArray(_ref$theme.space,4)[3],secondRadius=_slicedToArray(_ref$theme.radii,2)[1],shadows=_ref$theme.shadows,body=_ref$theme.fonts.body,_ref$themeColors=_ref.themeColors,background=_ref$themeColors.background,primary=_ref$themeColors.primary,_ref$themeColors$prim=_slicedToArray(_ref$themeColors.primaryShades,3),firstShade=_ref$themeColors$prim[0],secondShade=_ref$themeColors$prim[1],lastShade=_ref$themeColors$prim[2],Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__.b)("position:relative;cursor:pointer;outline:none;margin:0;padding:",fourthSpace,"px;width:auto;text-align:center;display:inline-block;border:none;border-radius:",secondRadius,";background:",primary,";color:",background,";font-size:",fourthFontSize,";font-family:",body,";line-height:inherit;font-weight:inherit;transform:translate3d(0,0,0);transition:0.2s ease-in-out;&:hover{background:",secondShade,";transform:translate3d(0,-3px,0);box-shadow:",shadows.default,";}&:active{background:",lastShade,";transform:translate3d(0,0,0);box-shadow:",shadows.default,";}&:focus{box-shadow:0 0px 8px ",secondShade,",0 0px 8px ",firstShade,";}label:ButtonStyle;"))],sizeCases={small:function small(){return cssStyles.push((_ref3$space=_slicedToArray((_ref3=theme).space,3),secondSpace=_ref3$space[1],thirdSpace=_ref3$space[2],thirdFontSize=_slicedToArray(_ref3.fontSizes,3)[2],Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__.b)("padding:",secondSpace,"px ",thirdSpace,"px;font-size:",thirdFontSize,"px;label:SmallButtonStyle;")));var _ref3,_ref3$space,secondSpace,thirdSpace,thirdFontSize},medium:function medium(){return cssStyles.push((thirdSpace=_slicedToArray(theme.space,3)[2],Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__.b)("padding:",thirdSpace,"px;label:MediumButtonStyle;")));var thirdSpace}};return sizeCases[size]&&sizeCases[size](),variant&&cssStyles.push(function(_ref2){var colors=_ref2.colors,variant=_ref2.variant,shades=colors["".concat(variant,"Shades")],hoverColor=colors.grayText;return shades&&0<shades.length&&(hoverColor=shades[1]),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__.b)("background:",colors[variant],";color:","gray"===variant?colors.text:colors.background,";&:hover{color:","gray"===variant?colors.gray:colors.background,";background:",hoverColor,";}label:VariantStyle;")}({colors:themeColors,variant:variant})),disabled&&cssStyles.push(disabledStyle),cssStyles};function Button(_ref6){var Element=_ref6.as,id=_ref6.id,onClick=_ref6.onClick,variant=_ref6.variant,size=_ref6.size,mode=_ref6.mode,disabled=_ref6.disabled,theme=_ref6.theme,props=_objectWithoutProperties(_ref6,["as","id","onClick","variant","size","mode","disabled","theme"]),_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(_marinda_tetris_theme_ui_preset__WEBPACK_IMPORTED_MODULE_14___default.a),2),mergedTheme=_useState2[0],setMergedTheme=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(_marinda_tetris_theme_ui_preset__WEBPACK_IMPORTED_MODULE_14___default.a.colors),2),themeColors=_useState4[0],setThemeColors=_useState4[1];Object(react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function(){if(theme){var nextMergedTheme=deepmerge__WEBPACK_IMPORTED_MODULE_13___default.a.all([_marinda_tetris_theme_ui_preset__WEBPACK_IMPORTED_MODULE_14___default.a,theme]);setMergedTheme(nextMergedTheme)}},[theme]),Object(react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function(){if("light"!==mode){var nextThemeColors=mergedTheme.colors.modes[mode];setThemeColors(nextThemeColors)}if("light"===mode){var _nextThemeColors=mergedTheme.colors;setThemeColors(_nextThemeColors)}},[mode,mergedTheme]);var composedStyles=composeStyles({theme:mergedTheme,themeColors:themeColors,variant:variant,size:size,disabled:disabled}),type="button"!==Element||props.type?null:"button";return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__.c)(Element,_extends({css:composedStyles,id:id,"data-testid":id,onClick:onClick,type:type,disabled:disabled},props),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__.c)("span",null,props.children))}Button.displayName="Button",Button.defaultProps={as:"button",id:"",children:null,theme:null,disabled:!1,onClick:function onClick(){},mode:"light",variant:"primary",size:"large"},__webpack_exports__.a=Button,Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{as:{defaultValue:{value:'"button"',computed:!1},required:!1},id:{defaultValue:{value:'""',computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},theme:{defaultValue:{value:"null",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},mode:{defaultValue:{value:'"light"',computed:!1},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"large"',computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/Button.js"})},837:function(module,exports,__webpack_require__){__webpack_require__(838),__webpack_require__(945),module.exports=__webpack_require__(946)},946:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(834);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(1419),module)}.call(this,__webpack_require__(947)(module))}},[[837,1,2]]]);
//# sourceMappingURL=main.51f8c0d8a1876344af10.bundle.js.map