!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function i(e){return e&&e.constructor===Symbol?"symbol":typeof e}var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,f=setTimeout(h,t),s?y(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=p();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function w(e){return f=void 0,m&&i?y(e):(i=o=void 0,a)}function O(){var e=p(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=E(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(E(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},O.flush=function(){return void 0===f?a:w(p())},O}function b(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):u.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var S={formEl:document.querySelector(".feedback-form"),messageEl:document.querySelector("textarea"),emailEl:document.querySelector("input")},j={},h="feedback-form-state";function w(e){j[e.target.name]=e.target.value,console.log(e),localStorage.setItem(h,JSON.stringify(j))}!function(e){var t=localStorage.getItem(h),n=JSON.parse(t);t&&(S.emailEl.value=n.email);t&&(S.messageEl.value=n.message)}(),S.emailEl.addEventListener("input",e(t)(w,500)),S.messageEl.addEventListener("input",e(t)(w,500)),S.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(h)}))}();
//# sourceMappingURL=03-feedback.0a50bfe0.js.map
