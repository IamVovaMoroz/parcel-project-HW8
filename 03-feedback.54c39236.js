!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),g=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=y();if(b(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,m&&o?g(e):(o=r=void 0,u)}function T(){var e=y(),n=b(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(w,t),s?g(e):u}(l);if(d)return f=setTimeout(w,t),g(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=h(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(h(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:O(y())},T}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const w=document.querySelector(".feedback-form"),O="feedback-form-state";let T={};!function(){const e=localStorage.getItem(O),t=JSON.parse(e);t&&(w.elements.message.value=t.message,T.message=t.message,w.elements.email.value=t.email,T.email=t.email)}(),w.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(O),T={}})),w.addEventListener("input",e(t)((function(e){const t=e.target.name;T[t]=e.target.value;const n=JSON.stringify(T);localStorage.setItem(O,n),console.log(T)}),500))}();
//# sourceMappingURL=03-feedback.54c39236.js.map
