(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{3688:function(module,exports){module.exports=function(hljs){var KEYWORDS={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual trait volatile transient native default",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},LABEL={className:"symbol",begin:hljs.UNDERSCORE_IDENT_RE+"@"},SUBST={className:"subst",begin:"\\${",end:"}",contains:[hljs.APOS_STRING_MODE,hljs.C_NUMBER_MODE]},VARIABLE={className:"variable",begin:"\\$"+hljs.UNDERSCORE_IDENT_RE},STRING={className:"string",variants:[{begin:'"""',end:'"""',contains:[VARIABLE,SUBST]},{begin:"'",end:"'",illegal:/\n/,contains:[hljs.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[hljs.BACKSLASH_ESCAPE,VARIABLE,SUBST]}]},ANNOTATION_USE_SITE={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+hljs.UNDERSCORE_IDENT_RE+")?"},ANNOTATION={className:"meta",begin:"@"+hljs.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[hljs.inherit(STRING,{className:"meta-string"})]}]},KOTLIN_NUMBER_MODE={className:"number",begin:"\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",relevance:0};return{aliases:["kt"],keywords:KEYWORDS,contains:[hljs.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,{className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},LABEL,ANNOTATION_USE_SITE,ANNOTATION,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:KEYWORDS,illegal:/fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,relevance:5,contains:[{begin:hljs.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[hljs.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:KEYWORDS,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[{className:"type",begin:hljs.UNDERSCORE_IDENT_RE},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE],relevance:0},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,ANNOTATION_USE_SITE,ANNOTATION,STRING,hljs.C_NUMBER_MODE]},hljs.C_BLOCK_COMMENT_MODE]},{className:"class",beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},hljs.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,excludeBegin:!0,returnEnd:!0},ANNOTATION_USE_SITE,ANNOTATION]},STRING,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:"\n"},KOTLIN_NUMBER_MODE]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_kotlin.4c09d21f64fd4c41f2a8.bundle.js.map