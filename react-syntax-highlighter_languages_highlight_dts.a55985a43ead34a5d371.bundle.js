(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{3518:function(module,exports){module.exports=function(hljs){var STRINGS={className:"string",variants:[hljs.inherit(hljs.QUOTE_STRING_MODE,{begin:'((u8?|U)|L)?"'}),{begin:'(u8?|U)?R"',end:'"',contains:[hljs.BACKSLASH_ESCAPE]},{begin:"'\\\\?.",end:"'",illegal:"."}]},NUMBERS={className:"number",variants:[{begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{begin:hljs.C_NUMBER_RE}],relevance:0},PREPROCESSOR={className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef ifdef ifndef"},contains:[{begin:/\\\n/,relevance:0},{beginKeywords:"include",end:"$",keywords:{"meta-keyword":"include"},contains:[hljs.inherit(STRINGS,{className:"meta-string"}),{className:"meta-string",begin:"<",end:">",illegal:"\\n"}]},STRINGS,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]},DTS_REFERENCE={className:"variable",begin:"\\&[a-z\\d_]*\\b"},DTS_KEYWORD={className:"meta-keyword",begin:"/[a-z][a-z\\d-]*/"},DTS_LABEL={className:"symbol",begin:"^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"},DTS_CELL_PROPERTY={className:"params",begin:"<",end:">",contains:[NUMBERS,DTS_REFERENCE]},DTS_NODE={className:"class",begin:/[a-zA-Z_][a-zA-Z\d_@]*\s{/,end:/[{;=]/,returnBegin:!0,excludeEnd:!0};return{keywords:"",contains:[{className:"class",begin:"/\\s*{",end:"};",relevance:10,contains:[DTS_REFERENCE,DTS_KEYWORD,DTS_LABEL,DTS_NODE,DTS_CELL_PROPERTY,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,NUMBERS,STRINGS]},DTS_REFERENCE,DTS_KEYWORD,DTS_LABEL,DTS_NODE,DTS_CELL_PROPERTY,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,NUMBERS,STRINGS,PREPROCESSOR,{begin:hljs.IDENT_RE+"::",keywords:""}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_dts.a55985a43ead34a5d371.bundle.js.map