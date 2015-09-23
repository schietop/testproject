!function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){function r(e){return this instanceof r?(this.element=document.createElement("div"),void(o=this.element)):new r(e)}t.exports=r;var o,i=e("mustache");r.prototype.appendTo=function(e){"string"==typeof e&&(e=document.querySelector(e)),e.appendChild(this.element)},r.prototype.loadData=function(e){var t="{{#speakers}}<h2>{{name}}</h2><p>{{bio}}</p>{{/speakers}}",n={},r=new XMLHttpRequest;r.open("GET",e),r.responseType="json",r.onload=function(){n=r.response;var e=i.to_html(t,n);o.innerHTML=e},r.onerror=function(){window.console.error("Error fetching data from",e)},r.send()}},{mustache:3}],2:[function(e,t,n){var r=e("./dataWidget.js"),o=r();o.loadData("./js/data.json"),o.appendTo("#dataArea")},{"./dataWidget.js":1}],3:[function(e,t,n){!function(e,t){"object"==typeof n&&n&&"string"!=typeof n.nodeName?t(n):"function"==typeof define&&define.amd?define(["exports"],t):(e.Mustache={},t(Mustache))}(this,function(e){function t(e){return"function"==typeof e}function n(e){return v(e)?"array":typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}function i(e,t){return g.call(e,t)}function s(e){return!i(w,e)}function a(e){return String(e).replace(/[&<>"'\/]/g,function(e){return y[e]})}function u(t,n){function o(){if(w&&!y)for(;g.length;)delete d[g.pop()];else g=[];w=!1,y=!1}function i(e){if("string"==typeof e&&(e=e.split(k,2)),!v(e)||2!==e.length)throw new Error("Invalid tags: "+e);a=new RegExp(r(e[0])+"\\s*"),u=new RegExp("\\s*"+r(e[1])),l=new RegExp("\\s*"+r("}"+e[1]))}if(!t)return[];var a,u,l,h=[],d=[],g=[],w=!1,y=!1;i(n||e.tags);for(var T,U,j,q,C,S,V=new f(t);!V.eos();){if(T=V.pos,j=V.scanUntil(a))for(var R=0,A=j.length;A>R;++R)q=j.charAt(R),s(q)?g.push(d.length):y=!0,d.push(["text",q,T,T+1]),T+=1,"\n"===q&&o();if(!V.scan(a))break;if(w=!0,U=V.scan(E)||"name",V.scan(m),"="===U?(j=V.scanUntil(b),V.scan(b),V.scanUntil(u)):"{"===U?(j=V.scanUntil(l),V.scan(x),V.scanUntil(u),U="&"):j=V.scanUntil(u),!V.scan(u))throw new Error("Unclosed tag at "+V.pos);if(C=[U,j,T,V.pos],d.push(C),"#"===U||"^"===U)h.push(C);else if("/"===U){if(S=h.pop(),!S)throw new Error('Unopened section "'+j+'" at '+T);if(S[1]!==j)throw new Error('Unclosed section "'+S[1]+'" at '+T)}else"name"===U||"{"===U||"&"===U?y=!0:"="===U&&i(j)}if(S=h.pop())throw new Error('Unclosed section "'+S[1]+'" at '+V.pos);return p(c(d))}function c(e){for(var t,n,r=[],o=0,i=e.length;i>o;++o)t=e[o],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function p(e){for(var t,n,r=[],o=r,i=[],s=0,a=e.length;a>s;++s)switch(t=e[s],t[0]){case"#":case"^":o.push(t),i.push(t),o=t[4]=[];break;case"/":n=i.pop(),n[5]=t[2],o=i.length>0?i[i.length-1][4]:r;break;default:o.push(t)}return r}function f(e){this.string=e,this.tail=e,this.pos=0}function l(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function h(){this.cache={}}var d=Object.prototype.toString,v=Array.isArray||function(e){return"[object Array]"===d.call(e)},g=RegExp.prototype.test,w=/\S/,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},m=/\s*/,k=/\s+/,b=/\s*=/,x=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;f.prototype.eos=function(){return""===this.tail},f.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},f.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},l.prototype.push=function(e){return new l(e,this)},l.prototype.lookup=function(e){var n,r=this.cache;if(r.hasOwnProperty(e))n=r[e];else{for(var i,s,a=this,u=!1;a;){if(e.indexOf(".")>0)for(n=a.view,i=e.split("."),s=0;null!=n&&s<i.length;)s===i.length-1&&(u=o(n,i[s])),n=n[i[s++]];else n=a.view[e],u=o(a.view,e);if(u)break;a=a.parent}r[e]=n}return t(n)&&(n=n.call(this.view)),n},h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=u(e,t)),r},h.prototype.render=function(e,t,n){var r=this.parse(e),o=t instanceof l?t:new l(t);return this.renderTokens(r,o,n,e)},h.prototype.renderTokens=function(e,t,n,r){for(var o,i,s,a="",u=0,c=e.length;c>u;++u)s=void 0,o=e[u],i=o[0],"#"===i?s=this.renderSection(o,t,n,r):"^"===i?s=this.renderInverted(o,t,n,r):">"===i?s=this.renderPartial(o,t,n,r):"&"===i?s=this.unescapedValue(o,t):"name"===i?s=this.escapedValue(o,t):"text"===i&&(s=this.rawValue(o)),void 0!==s&&(a+=s);return a},h.prototype.renderSection=function(e,n,r,o){function i(e){return s.render(e,n,r)}var s=this,a="",u=n.lookup(e[1]);if(u){if(v(u))for(var c=0,p=u.length;p>c;++c)a+=this.renderTokens(e[4],n.push(u[c]),r,o);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)a+=this.renderTokens(e[4],n.push(u),r,o);else if(t(u)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(e[3],e[5]),i),null!=u&&(a+=u)}else a+=this.renderTokens(e[4],n,r,o);return a}},h.prototype.renderInverted=function(e,t,n,r){var o=t.lookup(e[1]);return!o||v(o)&&0===o.length?this.renderTokens(e[4],t,n,r):void 0},h.prototype.renderPartial=function(e,n,r){if(r){var o=t(r)?r(e[1]):r[e[1]];return null!=o?this.renderTokens(this.parse(o),n,r,o):void 0}},h.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);return null!=n?n:void 0},h.prototype.escapedValue=function(t,n){var r=n.lookup(t[1]);return null!=r?e.escape(r):void 0},h.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="2.1.3",e.tags=["{{","}}"];var T=new h;e.clearCache=function(){return T.clearCache()},e.parse=function(e,t){return T.parse(e,t)},e.render=function(e,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+n(e)+'" was given as the first argument for mustache#render(template, view, partials)');return T.render(e,t,r)},e.to_html=function(n,r,o,i){var s=e.render(n,r,o);return t(i)?void i(s):s},e.escape=a,e.Scanner=f,e.Context=l,e.Writer=h})},{}]},{},[2])(function t(e,n,r){function o(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return o(n?n:t)},c,c.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o})({1:[function(e,t,n){function r(e){return this instanceof r?(this.element=document.createElement("div"),void(o=this.element)):new r(e)}t.exports=r;var o,i=e("mustache");r.prototype.appendTo=function(e){"string"==typeof e&&(e=document.querySelector(e)),e.appendChild(this.element)},r.prototype.loadData=function(e){var t="{{#speakers}}<h2>{{name}}</h2><p>{{bio}}</p>{{/speakers}}",n={},r=new XMLHttpRequest;r.open("GET",e),r.responseType="json",r.onload=function(){n=r.response;var e=i.to_html(t,n);o.innerHTML=e},r.onerror=function(){window.console.error("Error fetching data from",e)},r.send()}},{mustache:2}],2:[function(e,t,n){!function(e,t){"object"==typeof n&&n&&"string"!=typeof n.nodeName?t(n):"function"==typeof define&&define.amd?define(["exports"],t):(e.Mustache={},t(Mustache))}(this,function(e){function t(e){return"function"==typeof e}function n(e){return v(e)?"array":typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}function i(e,t){return g.call(e,t)}function s(e){return!i(w,e)}function a(e){return String(e).replace(/[&<>"'\/]/g,function(e){return y[e]})}function u(t,n){function o(){if(w&&!y)for(;g.length;)delete d[g.pop()];else g=[];w=!1,y=!1}function i(e){if("string"==typeof e&&(e=e.split(k,2)),!v(e)||2!==e.length)throw new Error("Invalid tags: "+e);a=new RegExp(r(e[0])+"\\s*"),u=new RegExp("\\s*"+r(e[1])),l=new RegExp("\\s*"+r("}"+e[1]))}if(!t)return[];var a,u,l,h=[],d=[],g=[],w=!1,y=!1;i(n||e.tags);for(var T,U,j,q,C,S,V=new f(t);!V.eos();){if(T=V.pos,j=V.scanUntil(a))for(var R=0,A=j.length;A>R;++R)q=j.charAt(R),s(q)?g.push(d.length):y=!0,d.push(["text",q,T,T+1]),T+=1,"\n"===q&&o();if(!V.scan(a))break;if(w=!0,U=V.scan(E)||"name",V.scan(m),"="===U?(j=V.scanUntil(b),V.scan(b),V.scanUntil(u)):"{"===U?(j=V.scanUntil(l),V.scan(x),V.scanUntil(u),U="&"):j=V.scanUntil(u),!V.scan(u))throw new Error("Unclosed tag at "+V.pos);if(C=[U,j,T,V.pos],d.push(C),"#"===U||"^"===U)h.push(C);else if("/"===U){if(S=h.pop(),!S)throw new Error('Unopened section "'+j+'" at '+T);if(S[1]!==j)throw new Error('Unclosed section "'+S[1]+'" at '+T)}else"name"===U||"{"===U||"&"===U?y=!0:"="===U&&i(j)}if(S=h.pop())throw new Error('Unclosed section "'+S[1]+'" at '+V.pos);return p(c(d))}function c(e){for(var t,n,r=[],o=0,i=e.length;i>o;++o)t=e[o],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function p(e){for(var t,n,r=[],o=r,i=[],s=0,a=e.length;a>s;++s)switch(t=e[s],t[0]){case"#":case"^":o.push(t),i.push(t),o=t[4]=[];break;case"/":n=i.pop(),n[5]=t[2],o=i.length>0?i[i.length-1][4]:r;break;default:o.push(t)}return r}function f(e){this.string=e,this.tail=e,this.pos=0}function l(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function h(){this.cache={}}var d=Object.prototype.toString,v=Array.isArray||function(e){return"[object Array]"===d.call(e)},g=RegExp.prototype.test,w=/\S/,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},m=/\s*/,k=/\s+/,b=/\s*=/,x=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;f.prototype.eos=function(){return""===this.tail},f.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},f.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},l.prototype.push=function(e){return new l(e,this)},l.prototype.lookup=function(e){var n,r=this.cache;if(r.hasOwnProperty(e))n=r[e];else{for(var i,s,a=this,u=!1;a;){if(e.indexOf(".")>0)for(n=a.view,i=e.split("."),s=0;null!=n&&s<i.length;)s===i.length-1&&(u=o(n,i[s])),n=n[i[s++]];else n=a.view[e],u=o(a.view,e);if(u)break;a=a.parent}r[e]=n}return t(n)&&(n=n.call(this.view)),n},h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=u(e,t)),r},h.prototype.render=function(e,t,n){var r=this.parse(e),o=t instanceof l?t:new l(t);return this.renderTokens(r,o,n,e)},h.prototype.renderTokens=function(e,t,n,r){for(var o,i,s,a="",u=0,c=e.length;c>u;++u)s=void 0,o=e[u],i=o[0],"#"===i?s=this.renderSection(o,t,n,r):"^"===i?s=this.renderInverted(o,t,n,r):">"===i?s=this.renderPartial(o,t,n,r):"&"===i?s=this.unescapedValue(o,t):"name"===i?s=this.escapedValue(o,t):"text"===i&&(s=this.rawValue(o)),void 0!==s&&(a+=s);return a},h.prototype.renderSection=function(e,n,r,o){function i(e){return s.render(e,n,r)}var s=this,a="",u=n.lookup(e[1]);if(u){if(v(u))for(var c=0,p=u.length;p>c;++c)a+=this.renderTokens(e[4],n.push(u[c]),r,o);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)a+=this.renderTokens(e[4],n.push(u),r,o);else if(t(u)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(e[3],e[5]),i),null!=u&&(a+=u)}else a+=this.renderTokens(e[4],n,r,o);return a}},h.prototype.renderInverted=function(e,t,n,r){var o=t.lookup(e[1]);return!o||v(o)&&0===o.length?this.renderTokens(e[4],t,n,r):void 0},h.prototype.renderPartial=function(e,n,r){if(r){var o=t(r)?r(e[1]):r[e[1]];return null!=o?this.renderTokens(this.parse(o),n,r,o):void 0}},h.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);return null!=n?n:void 0},h.prototype.escapedValue=function(t,n){var r=n.lookup(t[1]);return null!=r?e.escape(r):void 0},h.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="2.1.3",e.tags=["{{","}}"];var T=new h;e.clearCache=function(){return T.clearCache()},e.parse=function(e,t){return T.parse(e,t)},e.render=function(e,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+n(e)+'" was given as the first argument for mustache#render(template, view, partials)');return T.render(e,t,r)},e.to_html=function(n,r,o,i){var s=e.render(n,r,o);return t(i)?void i(s):s},e.escape=a,e.Scanner=f,e.Context=l,e.Writer=h})},{}]},{},[1]);