(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{3730:function(module,exports){module.exports=function(hljs){var PARENTED={begin:/\(/,end:/\)/,relevance:0},LIST={begin:/\[/,end:/\]/},LINE_COMMENT={className:"comment",begin:/%/,end:/$/,contains:[hljs.PHRASAL_WORDS_MODE]},BACKTICK_STRING={className:"string",begin:/`/,end:/`/,contains:[hljs.BACKSLASH_ESCAPE]},inner=[{begin:/[a-z][A-Za-z0-9_]*/,relevance:0},{className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},PARENTED,{begin:/:-/},LIST,LINE_COMMENT,hljs.C_BLOCK_COMMENT_MODE,hljs.QUOTE_STRING_MODE,hljs.APOS_STRING_MODE,BACKTICK_STRING,{className:"string",begin:/0\'(\\\'|.)/},{className:"string",begin:/0\'\\s/},hljs.C_NUMBER_MODE];return PARENTED.contains=inner,LIST.contains=inner,{contains:inner.concat([{begin:/\.$/}])}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_prolog.4c09d21f64fd4c41f2a8.bundle.js.map