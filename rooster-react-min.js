var roosterjsReact=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t){e.exports=roosterjs},function(e,t){e.exports=FluentUIReact},function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i=null==e?void 0:e[t];return"function"==typeof i?i():"string"==typeof i?i:n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.alignCenter=void 0;var i=n(0);t.alignCenter={key:"buttonNameAlignCenter",unlocalizedText:"Align center",iconName:"AlignCenter",onClick:function(e){(0,i.setAlignment)(e,1)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.alignLeft=void 0;var i=n(0);t.alignLeft={key:"buttonNameAlignLeft",unlocalizedText:"Align left",iconName:"AlignLeft",onClick:function(e){(0,i.setAlignment)(e,0)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.alignRight=void 0;var i=n(0);t.alignRight={key:"buttonNameAlignRight",unlocalizedText:"Align right",iconName:"AlignRight",onClick:function(e){(0,i.setAlignment)(e,2)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bold=void 0;var i=n(0);t.bold={key:"buttonNameBold",unlocalizedText:"Bold",iconName:"Bold",checked:function(e){return e.isBold},onClick:function(e){return(0,i.toggleBold)(e),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bulletedList=void 0;var i=n(0);t.bulletedList={key:"buttonNameBulletedList",unlocalizedText:"Bulleted list",iconName:"BulletedList",checked:function(e){return e.isBullet},onClick:function(e){return(0,i.toggleBullet)(e),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearFormat=void 0;var i=n(0);t.clearFormat={key:"buttonNameClearFormat",unlocalizedText:"Clear format",iconName:"ClearFormatting",onClick:function(e){(0,i.clearFormat)(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.code=void 0;var i=n(0);t.code={key:"buttonNameCode",unlocalizedText:"Code",iconName:"Code",onClick:function(e){(0,i.toggleCodeBlock)(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decreaseIndent=void 0;var i=n(0);t.decreaseIndent={key:"buttonNameDecreaseIntent",unlocalizedText:"Decrease indent",iconName:"DecreaseIndentLegacy",onClick:function(e){(0,i.setIndentation)(e,1)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.font=void 0;var i=n(0),r=[{name:"Arial",family:"Arial,Helvetica,sans-serif"},{name:"Arial Black",family:"'Arial Black',Arial,sans-serif"},{name:"Calibri",family:"Calibri,Helvetica,sans-serif"},{name:"Calibri Light",family:"'Calibri Light','Helvetica Light',sans-serif"},{name:"Cambria",family:"Cambria,Georgia,serif"},{name:"Candara",family:"Candara,Optima,sans-serif"},{name:"Century Gothic",family:"'Century Gothic',sans-serif"},{name:"Comic Sans MS",family:"'Comic Sans MS',Chalkboard,cursive"},{name:"Consolas",family:"Consolas,Courier,monospace"},{name:"Constantia",family:"Constantia,'Hoefler Text',serif"},{name:"Corbel",family:"Corbel,Skia,sans-serif"},{name:"Courier New",family:"'Courier New',monospace"},{name:"Franklin Gothic Book",family:"'Franklin Gothic Book','Avenir Next Condensed',sans-serif"},{name:"Franklin Gothic Demi",family:"'Franklin Gothic Demi','Avenir Next Condensed Demi Bold',sans-serif"},{name:"Franklin Gothic Medium",family:"'Franklin Gothic Medium','Avenir Next Condensed Medium',sans-serif"},{name:"Garamond",family:"Garamond,Georgia,serif"},{name:"Georgia",family:"Georgia,serif"},{name:"Impact",family:"Impact,Charcoal,sans-serif"},{name:"Lucida Console",family:"'Lucida Console',Monaco,monospace"},{name:"Lucida Handwriting",family:"'Lucida Handwriting','Apple Chancery',cursive"},{name:"Lucida Sans Unicode",family:"'Lucida Sans Unicode','Lucida Grande',sans-serif"},{name:"Palatino Linotype",family:"'Palatino Linotype','Book Antiqua',Palatino,serif"},{name:"Segoe UI",family:"'Segoe UI', 'Segoe UI Web (West European)', 'Helvetica Neue', sans-serif"},{name:"Sitka Heading",family:"'Sitka Heading',Cochin,serif"},{name:"Sitka Text",family:"'Sitka Text',Cochin,serif"},{name:"Tahoma",family:"Tahoma,Geneva,sans-serif"},{name:"Times",family:"Times,'Times New Roman',serif"},{name:"Times New Roman",family:"'Times New Roman',Times,serif"},{name:"Trebuchet MS",family:"'Trebuchet MS',Trebuchet,sans-serif"},{name:"TW Cen MT",family:"'TW Cen MT','Century Gothic',sans-serif"},{name:"Verdana",family:"Verdana,Geneva,sans-serif"},{name:"-",family:"FontDivider0"},{name:"Microsoft YaHei",family:"'Microsoft YaHei','微软雅黑',STHeiti,sans-serif",localizedName:"微软雅黑"},{name:"SimHei",family:"SimHei,'黑体',STHeiti,sans-serif",localizedName:"黑体"},{name:"NSimSun",family:"NSimSun,'新宋体',SimSun,'宋体',SimSun-ExtB,'宋体-ExtB',STSong,serif",localizedName:"新宋体"},{name:"FangSong",family:"FangSong,'仿宋',STFangsong,serif",localizedName:"仿宋"},{name:"SimLi",family:"SimLi,'隶书','Baoli SC',serif",localizedName:"隶书"},{name:"KaiTi",family:"KaiTi,'楷体',STKaiti,serif",localizedName:"楷体"},{name:"-",family:"FontDivider1"},{name:"Microsoft JhengHei",family:"'Microsoft JhengHei','微軟正黑體','Apple LiGothic',sans-serif",localizedName:"微軟正黑體"},{name:"PMingLiU",family:"PMingLiU,'新細明體',PMingLiU-ExtB,'新細明體-ExtB','Apple LiSung',serif",localizedName:"新細明體"},{name:"DFKai-SB",family:"DFKai-SB,'標楷體','BiauKai',serif",localizedName:"標楷體"},{name:"-",family:"FontDivider2"},{name:"Meiryo",family:"Meiryo,'メイリオ','Hiragino Sans',sans-serif",localizedName:"メイリオ"},{name:"MS PGothic",family:"'MS PGothic','ＭＳ Ｐゴシック','MS Gothic','ＭＳ ゴシック','Hiragino Kaku Gothic ProN',sans-serif",localizedName:"ＭＳ Ｐゴシック"},{name:"MS PMincho",family:"'MS PMincho','ＭＳ Ｐ明朝','MS Mincho','ＭＳ 明朝','Hiragino Mincho ProN',serif",localizedName:"ＭＳ Ｐ明朝"},{name:"Yu Gothic",family:"'Yu Gothic','游ゴシック','YuGothic',sans-serif",localizedName:"游ゴシック"},{name:"Yu Mincho",family:"'Yu Mincho','游明朝','YuMincho',serif",localizedName:"游明朝"},{name:"-",family:"FontDivider3"},{name:"Malgun Gothic",family:"'Malgun Gothic','맑은 고딕',AppleGothic,sans-serif",localizedName:"맑은 고딕"},{name:"Gulim",family:"Gulim,'굴림','Nanum Gothic',sans-serif",localizedName:"굴림"},{name:"Dotum",family:"Dotum,'돋움',AppleGothic,sans-serif",localizedName:"돋움"},{name:"Batang",family:"Batang,'바탕',AppleMyungjo,serif",localizedName:"바탕"},{name:"BatangChe",family:"BatangChe,'바탕체',AppleMyungjo,serif",localizedName:"바탕체"},{name:"Gungsuh",family:"Gungsuh,'궁서',GungSeo,serif",localizedName:"궁서"},{name:"-",family:"FontDivider4"},{name:"Leelawadee UI",family:"'Leelawadee UI',Thonburi,sans-serif"},{name:"Angsana New",family:"'Angsana New','Leelawadee UI',Sathu,serif"},{name:"Cordia New",family:"'Cordia New','Leelawadee UI',Silom,sans-serif"},{name:"DaunPenh",family:"DaunPenh,'Leelawadee UI','Khmer MN',sans-serif"},{name:"-",family:"FontDivider5"},{name:"Nirmala UI",family:"'Nirmala UI',sans-serif"},{name:"Gautami",family:"Gautami,'Nirmala UI','Telugu MN',sans-serif"},{name:"Iskoola Pota",family:"'Iskoola Pota','Nirmala UI','Sinhala MN',sans-serif"},{name:"Kalinga",family:"Kalinga,'Nirmala UI','Oriya MN',sans-serif"},{name:"Kartika",family:"Kartika,'Nirmala UI','Malayalam MN',sans-serif"},{name:"Latha",family:"Latha,'Nirmala UI','Tamil MN',sans-serif"},{name:"Mangal",family:"Mangal,'Nirmala UI','Devanagari Sangam MN',sans-serif"},{name:"Raavi",family:"Raavi,'Nirmala UI','Gurmukhi MN',sans-serif"},{name:"Shruti",family:"Shruti,'Nirmala UI','Gujarati Sangam MN',sans-serif"},{name:"Tunga",family:"Tunga,'Nirmala UI','Kannada MN',sans-serif"},{name:"Vrinda",family:"Vrinda,'Nirmala UI','Bangla MN',sans-serif"},{name:"-",family:"FontDivider6"},{name:"Nyala",family:"Nyala,Kefa,sans-serif"},{name:"Sylfaen",family:"Sylfaen,Mshtakan,Menlo,serif"}],a=r.reduce((function(e,t){return e[t.family]=t.localizedName||t.name,e}),{}),o=r.reduce((function(e,t){return e[t.name.toLowerCase()]=t.family,e}),{}),u=/^['"]?([^'",]+)/i;t.font={key:"buttonNameFont",unlocalizedText:"Font",iconName:"Font",dropDownItems:a,selectedItem:function(e){var t,n,i=null===(t=e.fontName)||void 0===t?void 0:t.match(u),r=null===(n=null==i?void 0:i[1])||void 0===n?void 0:n.toLowerCase();return r&&o[r]||""},onClick:function(e,t){(0,i.setFontName)(e,t)},allowLivePreview:!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fontSize=void 0;var i=n(0);t.fontSize={key:"buttonNameFontSize",unlocalizedText:"Font size",iconName:"FontSize",dropDownItems:i.FONT_SIZES.reduce((function(e,t){return e[t+"pt"]=t.toString(),e}),{}),selectedItem:function(e){return e.fontSize},onClick:function(e,t){(0,i.setFontSize)(e,t)},allowLivePreview:!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.header=void 0;var i=n(0),r={header1:"Header 1",header2:"Header 2",header3:"Header 3",header4:"Header 4",header5:"Header 5",header6:"Header 6",headerDivider:"-",noHeader:"No header"};t.header={key:"buttonNameHeader",unlocalizedText:"Header",iconName:"Header1",dropDownItems:r,onClick:function(e,t){var n=Object.keys(r).indexOf(t)+1;n>6?(0,i.toggleHeader)(e,0):n>0&&(0,i.toggleHeader)(e,n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.increaseIndent=void 0;var i=n(0);t.increaseIndent={key:"buttonNameIncreaseIndent",unlocalizedText:"Increase indent",iconName:"IncreaseIndentLegacy",onClick:function(e){(0,i.setIndentation)(e,0)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.italic=void 0;var i=n(0);t.italic={key:"buttonNameItalic",unlocalizedText:"Italic",iconName:"Italic",checked:function(e){return e.isItalic},onClick:function(e){return(0,i.toggleItalic)(e),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ltr=void 0;var i=n(0);t.ltr={key:"buttonNameLtr",unlocalizedText:"Left to right",iconName:"BidiLtr",onClick:function(e){(0,i.setDirection)(e,0)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numberedList=void 0;var i=n(0);t.numberedList={key:"buttonNameNumberedList",unlocalizedText:"Numbered list",iconName:"NumberedList",checked:function(e){return e.isNumbering},onClick:function(e){return(0,i.toggleNumbering)(e),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.quote=void 0;var i=n(0);t.quote={key:"buttonNameQuote",unlocalizedText:"Quote",iconName:"RightDoubleQuote",checked:function(e){return e.isBlockQuote},onClick:function(e){return(0,i.toggleBlockQuote)(e),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.redo=void 0,t.redo={key:"buttonNameRedo",unlocalizedText:"Redo",iconName:"Redo",disabled:function(e){return!e.canRedo},onClick:function(e){return e.redo(),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rtl=void 0;var i=n(0);t.rtl={key:"buttonNameRtl",unlocalizedText:"Right to left",iconName:"BidiRtl",onClick:function(e){(0,i.setDirection)(e,1)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.strikethrough=void 0;var i=n(0);t.strikethrough={key:"buttonNameStrikethrough",unlocalizedText:"Strikethrough",iconName:"Strikethrough",checked:function(e){return e.isStrikeThrough},onClick:function(e){return(0,i.toggleStrikethrough)(e),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.subscript=void 0;var i=n(0);t.subscript={key:"buttonNameSubscript",unlocalizedText:"Subscript",iconName:"Subscript",checked:function(e){return e.isSubscript},onClick:function(e){return(0,i.toggleSubscript)(e),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.superscript=void 0;var i=n(0);t.superscript={key:"buttonNameSuperscript",unlocalizedText:"Superscript",iconName:"Superscript",checked:function(e){return e.isSuperscript},onClick:function(e){return(0,i.toggleSuperscript)(e),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.underline=void 0;var i=n(0);t.underline={key:"buttonNameUnderline",unlocalizedText:"Underline",iconName:"Underline",checked:function(e){return e.isUnderline},onClick:function(e){return(0,i.toggleUnderline)(e),!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.undo=void 0,t.undo={key:"buttonNameUndo",unlocalizedText:"Undo",iconName:"undo",disabled:function(e){return!e.canUndo},onClick:function(e){return e.undo(),!0}}},function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(28),t),r(n(30),t),r(n(33),t),r(n(35),t),r(n(37),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Rooster=void 0;var i=n(29);Object.defineProperty(t,"Rooster",{enumerable:!0,get:function(){return i.default}})},function(e,t,n){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=n(0);function o(e,t){return new a.Editor(e,t)}t.default=function(e){var t=r.useRef(null),n=r.useRef(null),a=e.domAttributes,u=e.editorOptions,l=e.focusOnInit,c=e.editorCreator,s=u||{},d=s.zoomScale,f=s.inDarkMode;return r.useEffect((function(){return n.current=(c||o)(t.current,u),l&&n.current.focus(),function(){n.current&&(n.current.dispose(),n.current=null)}}),[c]),r.useEffect((function(){n.current.setDarkModeState(!!f)}),[f]),r.useEffect((function(){n.current.setZoomScale(d)}),[d]),r.createElement("div",i({ref:t,tabIndex:0},a||{}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearFormat=t.redo=t.undo=t.rtl=t.ltr=t.code=t.header=t.strikethrough=t.subscript=t.superscript=t.alignRight=t.alignCenter=t.alignLeft=t.quote=t.increaseIndent=t.decreaseIndent=t.numberedList=t.bulletedList=t.fontSize=t.font=t.underline=t.italic=t.bold=t.getAllButtons=t.Ribbon=void 0;var i=n(31);Object.defineProperty(t,"Ribbon",{enumerable:!0,get:function(){return i.default}});var r=n(32);Object.defineProperty(t,"getAllButtons",{enumerable:!0,get:function(){return r.default}});var a=n(7);Object.defineProperty(t,"bold",{enumerable:!0,get:function(){return a.bold}});var o=n(16);Object.defineProperty(t,"italic",{enumerable:!0,get:function(){return o.italic}});var u=n(25);Object.defineProperty(t,"underline",{enumerable:!0,get:function(){return u.underline}});var l=n(12);Object.defineProperty(t,"font",{enumerable:!0,get:function(){return l.font}});var c=n(13);Object.defineProperty(t,"fontSize",{enumerable:!0,get:function(){return c.fontSize}});var s=n(8);Object.defineProperty(t,"bulletedList",{enumerable:!0,get:function(){return s.bulletedList}});var d=n(18);Object.defineProperty(t,"numberedList",{enumerable:!0,get:function(){return d.numberedList}});var f=n(11);Object.defineProperty(t,"decreaseIndent",{enumerable:!0,get:function(){return f.decreaseIndent}});var m=n(15);Object.defineProperty(t,"increaseIndent",{enumerable:!0,get:function(){return m.increaseIndent}});var p=n(19);Object.defineProperty(t,"quote",{enumerable:!0,get:function(){return p.quote}});var y=n(5);Object.defineProperty(t,"alignLeft",{enumerable:!0,get:function(){return y.alignLeft}});var b=n(4);Object.defineProperty(t,"alignCenter",{enumerable:!0,get:function(){return b.alignCenter}});var v=n(6);Object.defineProperty(t,"alignRight",{enumerable:!0,get:function(){return v.alignRight}});var g=n(24);Object.defineProperty(t,"superscript",{enumerable:!0,get:function(){return g.superscript}});var h=n(23);Object.defineProperty(t,"subscript",{enumerable:!0,get:function(){return h.subscript}});var N=n(22);Object.defineProperty(t,"strikethrough",{enumerable:!0,get:function(){return N.strikethrough}});var k=n(14);Object.defineProperty(t,"header",{enumerable:!0,get:function(){return k.header}});var C=n(10);Object.defineProperty(t,"code",{enumerable:!0,get:function(){return C.code}});var S=n(17);Object.defineProperty(t,"ltr",{enumerable:!0,get:function(){return S.ltr}});var P=n(21);Object.defineProperty(t,"rtl",{enumerable:!0,get:function(){return P.rtl}});var M=n(26);Object.defineProperty(t,"undo",{enumerable:!0,get:function(){return M.undo}});var O=n(20);Object.defineProperty(t,"redo",{enumerable:!0,get:function(){return O.redo}});var j=n(9);Object.defineProperty(t,"clearFormat",{enumerable:!0,get:function(){return j.clearFormat}})},function(e,t,n){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=n(3),o=n(1),u=n(1),l=(0,n(1).mergeStyles)({"& .ms-CommandBar":{padding:"0px"}});t.default=function(e){var t=e.plugin,n=e.buttons,c=e.strings,s=e.dir,d=r.useState(null),f=d[0],m=d[1],p="rtl"==s,y=r.useCallback((function(e,n){null==t||t.onButtonClick(n.data,n.key,c)}),[t,c]),b=r.useCallback((function(e,n){t.startLivePreview(e,n,c)}),[t,c]),v=r.useCallback((function(){t.stopLivePreview()}),[t]),g=r.useMemo((function(){return n.map((function(e){var t,n,i,o=f&&(null===(t=e.selectedItem)||void 0===t?void 0:t.call(e,f)),l=e.dropDownItems,s={key:e.key,data:e,iconProps:{iconName:p&&e.rtlIconName?e.rtlIconName:e.iconName},iconOnly:!0,text:(0,a.default)(c,e.key,e.unlocalizedText),canCheck:!0,checked:f&&(null===(n=e.checked)||void 0===n?void 0:n.call(e,f))||!1,disabled:f&&(null===(i=e.disabled)||void 0===i?void 0:i.call(e,f))||!1};return l?s.subMenuProps={className:e.dropDownClassName,shouldFocusOnMount:!0,focusZoneProps:{direction:u.FocusZoneDirection.bidirectional},onDismiss:v,onItemClick:y,onRenderContextualMenuItem:e.allowLivePreview?function(t,n){return r.createElement("div",{onMouseOver:function(n){return b(e,t.key)}},n(t))}:void 0,items:Object.keys(e.dropDownItems).map((function(t){return{key:t,text:(0,a.default)(c,t,l[t]),data:e,canCheck:!!e.selectedItem,checked:o==t||!1,className:e.itemClassName,onRender:e.dropDownItemRender?function(t){return e.dropDownItemRender(t,y)}:void 0}}))}:s.onClick=y,s}))}),[n,f,p,c,y,v,b]);return r.useEffect((function(){var e=null==t?void 0:t.registerFormatChangedCallback(m);return function(){null==e||e()}}),[t]),r.createElement(o.CommandBar,i({items:g},e,{className:l+" "+((null==e?void 0:e.className)||"")}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),r=n(5),a=n(6),o=n(7),u=n(8),l=n(9),c=n(10),s=n(11),d=n(12),f=n(13),m=n(14),p=n(15),y=n(16),b=n(17),v=n(18),g=n(19),h=n(20),N=n(21),k=n(22),C=n(23),S=n(24),P=n(25),M=n(26);t.default=function(){return[o.bold,y.italic,P.underline,d.font,f.fontSize,u.bulletedList,v.numberedList,s.decreaseIndent,p.increaseIndent,g.quote,r.alignLeft,i.alignCenter,a.alignRight,S.superscript,C.subscript,k.strikethrough,m.header,c.code,b.ltr,N.rtl,M.undo,h.redo,l.clearFormat]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateContentPlugin=void 0;var i=n(34);Object.defineProperty(t,"UpdateContentPlugin",{enumerable:!0,get:function(){return i.default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var n=this;this.updateMode=e,this.onUpdate=t,this.onBlur=function(){n.update(16)}}return e.prototype.getName=function(){return"UpdateContent"},e.prototype.initialize=function(e){this.editor=e,this.disposer=this.editor.addDomEventHandler("blur",this.onBlur)},e.prototype.dispose=function(){var e;null===(e=this.disposer)||void 0===e||e.call(this),this.disposer=null,this.editor=null},e.prototype.onPluginEvent=function(e){switch(e.eventType){case 11:this.update(1);break;case 12:this.update(2);break;case 7:this.update(8);break;case 3:this.update(4)}},e.prototype.forceUpdate=function(){this.update(0)},e.prototype.update=function(e){if(this.editor&&(0==e||((this.updateMode||0)&e)==e)&&this.onUpdate){var t=this.editor.getContent();this.onUpdate(t,e)}},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRibbonPlugin=void 0;var i=n(36);Object.defineProperty(t,"createRibbonPlugin",{enumerable:!0,get:function(){return i.default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=function(){function e(e){void 0===e&&(e=200),this.delayUpdateTime=e,this.timer=0}return e.prototype.getName=function(){return"Ribbon"},e.prototype.initialize=function(e){this.editor=e},e.prototype.dispose=function(){this.editor=null},e.prototype.onPluginEvent=function(e){switch(e.eventType){case 11:case 7:case 21:this.updateFormat();break;case 0:case 5:this.delayUpdate()}},e.prototype.registerFormatChangedCallback=function(e){var t=this;return this.onFormatChanged=e,function(){t.onFormatChanged=null}},e.prototype.onButtonClick=function(e,t,n){this.editor&&(this.editor.stopShadowEdit(),e.onClick(this.editor,t,n)&&this.updateFormat())},e.prototype.startLivePreview=function(e,t,n){if(this.editor){var i=this.editor.isInShadowEdit(),r=!i&&this.editor.getSelectionRangeEx();(i||r&&!r.areAllCollapsed)&&(this.editor.startShadowEdit(),e.onClick(this.editor,t,n))}},e.prototype.stopLivePreview=function(){var e;null===(e=this.editor)||void 0===e||e.stopShadowEdit()},e.prototype.delayUpdate=function(){var e=this,t=this.editor.getDocument().defaultView;this.timer&&t.clearTimeout(this.timer),this.timer=t.setTimeout((function(){var t;e.timer=0,null===(t=e.updateFormat)||void 0===t||t.call(e)}),this.delayUpdateTime)},e.prototype.updateFormat=function(){var e=this;if(this.editor&&this.onFormatChanged){var t=(0,i.getFormatState)(this.editor);this.formatState&&!Object.keys(t).some((function(n){return t[n]!=e.formatState[n]}))||(this.formatState=t,this.onFormatChanged(t))}},e}();t.default=function(e){return new r(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalizedString=void 0;var i=n(3);Object.defineProperty(t,"getLocalizedString",{enumerable:!0,get:function(){return i.default}})}]);
//# sourceMappingURL=rooster-react-min.js.map