(()=>{"use strict";var n,e,t,r,i,a,o,c,d,p,s,l,h,g,u={28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,":root {\n    --dark: rgb(0, 0, 0);\n    --main-background: rgb(255, 255, 255);\n    --keda-orange: rgb(160, 67, 13);\n    --keda-grey : rgb(214, 205, 205);\n  }\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    background-color: var(--main-background);\n    font-family: sans-serif;\n    color: var(--dark);\n}\n.white-text {\n    color: var(--main-background);\n}\n.orange-text {\n    color: var(--keda-orange);\n}\n.italicize {\n    font-style: italic;\n}\n.ease {\n    transition: 0.1s ease-in;\n}\n.small-text{\n    font-size: 0.9em;\n}\n.tiny-text {\n    font-size: 0.75em;\n}\n.medium-text{\n    font-size: 1.3em;\n}\n.big-text {\n    font-size: 1.8em;\n}\n.large-text{\n    font-size: 2.4em;\n}\n.f200 {\n    font-weight: 200;\n}\n.f300 {\n    font-weight: 300;\n}\n.f400 {\n    font-weight: 400;\n}\n.f500 {\n    font-weight: 500;\n}\n.f600 {\n    font-weight: 600;\n}\n.f700 {\n    font-weight: 700;\n}\n.f800 {\n    font-weight: 800;\n}\n.f900 {\n    font-weight: 900;\n}\n.center-text {\n    text-align: center;\n}\n.pointer {\n    cursor: pointer;\n}\nnav {\n    height: 70px;\n    background-color: var(--main-background);\n    padding: 0px max(10%, 50px);\n    position: fixed;\n    width: 100%;\n    z-index: 2;\n}\n.flex {\n    display: flex;\n}\n.center-flex {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.sb-flex {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.sa-flex {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.left-flex {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n    \n}\n.row-flex {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    flex-wrap: wrap;\n}\n.thin-border {\n    border: 1px solid var(--dark);\n}\n.h3-bottom-pad {\n    gap: 40px;\n}\n.section-pad {\n    padding-bottom: 160px;\n}\n.sec-width {\n    width: 65%;\n}\n.home-text {\n    font-size: 1.9em;\n}\n.nav-ul {\n    list-style: none;\n}\n.nav-links {\n    width: min(40%, 380px);\n}\n.nav-link:hover{\n    transform: scale(1.1);\n    transition: 0.2s ease-in;\n}\n.nav-link a:hover {\n    color: var(--keda-orange);\n}\nbutton {\n    cursor: pointer;\n}\n.cta-button button {\n    border: 2px var(--dark) solid;\n    outline: none;\n    background-color: var(--main-background);\n    width: 130px;\n    height: 40px;\n    font-size: 0.9em;\n}\n.cta-button button:hover {\n    color: var(--keda-orange);\n    border: 2px var(--keda-orange) solid;\n}\n.hamburger {\n    row-gap: 5px;\n    display: none;\n}\n.hamburger.active :nth-child(1){\n    transform: translateY(9px) rotate(45deg);\n}\n.hamburger.active :nth-child(2){\n    opacity: 0;\n}\n.hamburger.active :nth-child(3){\n    transform: translateY(-9px) rotate(-45deg);\n}\n.bar {\n    width: 25px;\n    height: 4px;\n    background-color: var(--dark);\n    border-radius: 2px;\n    display: block;\n}\na {\n    text-decoration: none;\n    color: black;\n}\nsection {\n    top: 70px;\n    position: relative;\n}\n.expand-ham {\n    background-color: var(--main-background); \n    position: fixed;\n    top: 65px;\n    width: 100%;\n    z-index: 2;\n    text-align: center;\n    height: 400px;\n    flex-direction: column;\n    gap: 20px;\n    display: flex;\n    left: -100%;\n    transition: 0.3s ease-in;\n    opacity: 0;\n}\n.expand-ham.active {\n    left: 0;\n    opacity: 1;\n}\n#head-section {\n    padding: 0px 10px;\n}\n.head-text {\n    width: 35%;\n    column-gap: 30px;\n    position: relative;\n    animation: left-ease 1.5s ease-in;\n}\n.head-supplement {\n    gap: 6px;\n}\n.head-image{\n    height: 550px;\n    overflow: hidden;\n}\n.head-image-div {\n    position: relative;\n    animation: opaque 1s ease-in;\n}\n.head-image img{\n    object-fit: cover;\n    height: 700px;\n}\nh1 {\n    font-size: 2.6em;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\n.cta-black-button button {\n    border: 2px var(--dark) solid;\n    outline: none;\n    background-color: var(--dark);\n    color: var(--main-background);\n    width: 130px;\n    height: 40px;\n    font-size: 0.9em;\n}\n.cta-black-button button:hover {\n    background-color: var(--keda-orange);\n    border: 2px var(--keda-orange) solid;\n}\n.banner-display {\n    background-color: var(--dark);\n    height: 55px;\n    gap: 6px;\n}\n.about-him {\n    gap: min(8%, 30px);\n    padding: 100px max(30px, 6%);\n    align-items: flex-start;\n\n}\n.doings-div {\n    width: min(400px, 50%);\n    overflow: hidden;\n    coolum-gap: 8px;/*note*/\n}\n.him-name-div {\n    width: min(450px, 39%);\n    overflow: hidden;\n}\n.no-display {\n    display: none;\n}\n.experience-section {\n    align-items: center;\n    padding-bottom: 150px;\n}\n.experience-div, .cert {\n    width: 65%;\n    height: 90px;\n}\n.experience-item {\n    width: 33.3%;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n    gap: 2px;\n}\n.experience-item:nth-child(2) {\n    background-color: var(--dark);\n}\n.certs-section, .experience-section{\n    padding-bottom: 200px;\n}\n.certs-head {\n    padding-bottom: 20px;\n}\n.cert-icon {\n    background-color: var(--dark);\n    width: 35px;\n    height: 35px;\n}\n.certs {\n    align-items: center;\n}\n.cert {\n    column-gap: 20px;\n    padding: 0 30px;\n}\n.port-folio-section {\n    height: 600px;\n}\n.services-section {\n    align-items: center;\n    padding-bottom: 150px;\n \n}\n.service {\n    height: 110px;\n    padding: 15px 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.service:nth-child(3) {\n    color: var(--main-background);\n    background-color: var(--dark);\n}\n.service-div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n.happy-customers-div {\n    \n}\n.services {\n    width: 65%;\n}\n.happy-customers {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 25px;\n    width: 65%;\n}\n.customer {\n    width: 100%;\n    height: 65px;\n}\n.article {\n    height: 100px;\n    padding: 15px;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n.articles-section {\n    align-items: center;\n}\n.browse-articles-button {\n    background-color: var(--dark);\n    color: var(--main-background);\n    width: 100%;\n    height: 40px;\n    outline: none;\n    border: none;\n}\n.browse-articles-button:hover {\n    background-color: var(--keda-orange);\n    transition: 0.2s ease-in;\n}\n.email-section {\n    height: 200px;\n    background-color: var(--keda-grey);\n}\n.mail {\n    outline: none;\n    border: 1px solid var(--dark);\n    width: 250px;\n    height: 35px;\n    background-color: var(--keda-grey);\n}\n.mail:hover {\n    border: 2px solid var(--keda-orange);\n}\n.mail:focus {\n    border: 2px solid var(--keda-orange);\n}\n.send-mail-button {\n    width: 80px;\n    height: 35px;\n    outline: none;\n    border: none;\n    background-color: var(--dark);\n    color: var(--main-background);\n\n}\n@keyframes left-ease {\n    from {\n        left: -100%;\n        opacity: 0;\n    }\n    to {\n        left: 0;\n        opacity: 1;\n    }\n}\n@keyframes right-ease {\n    from {\n        right: -60%;\n        opacity: 0;\n    }\n    to {\n        right: 0;\n        opacity: 1;\n\n    }\n}\n\n@keyframes opaque {\n    from {\n        opacity: 0.3;\n    }\n    to {\n        opacity: 1;\n\n    }\n}\n\n@media (max-width: 1000px) {\n    .head-text, .head-image-div{\n        width: 45%;\n        \n    }\n    .head-image img {\n        width: 100%;\n        object-fit: contain;\n        height: 500px;\n    }\n    .head-image {\n        height: 500px;\n    }\n    .experience-div, .cert, .services, .happy-customers, .sec-width {\n        width: 80%;\n    }\n    .service {\n        height: 120px;\n    }\n\n}     \n\n\n@media (max-width: 800px) {\n\n    .hamburger {\n        display: flex;\n    }\n    .nav-links {\n        display: none;\n    }\n    #head-section {\n        flex-direction: column-reverse;\n        row-gap: 15px;\n        padding: 0 0 30px 0;\n        \n    }\n    .head-image-div, .head-text, .doings-div, .him-name-div{\n        width: 90%;\n\n    }\n   \n    .about-him{\n        flex-direction: column;\n    }\n    #nav-cta {\n        display: none;\n    }\n    .experience-div, .cert, .services, .happy-customers, .sec-width {\n        width: 90%;\n    }\n    .service-div {\n        grid-template-columns: 1fr;\n    }\n    .service {\n        padding: 15px 30px;\n    }\n    .happy-customers {\n        grid-template-columns: repeat(2, 1fr);\n    }\n    .article {\n        height: 130px;\n    }\n    \n}   \n\n@media (max-width: 500px) {\n    .certs, .experience-div {\n        font-size: 12px;\n    }\n    .cert {\n        padding: 0 15px;\n        column-gap: 10px;\n        height: 70px;\n    }\n    .cert-icon {\n        width: 25px;\n        height: 25px;\n    }\n    .article {\n        font-weight: 0.7em;\n        height: 180px;\n        gap: 10px;\n    }\n}\n\n@media (max-width: 400px) {\n    \n    .head-image img {\n        width: 100%;\n        object-fit: cover;\n        height: 450px;\n        object-position: 0 90px;\n    }\n    .head-image-div, .head-text, .doings-div, .him-name-div{\n        width: 93%;\n\n    }\n    .head-image {\n        height: 460px;\n    }\n    .experience-div, .cert, .services, .happy-customers, .sec-width {\n        width: 93%;\n    }\n    .happy-customers {\n        gap: 15px;\n    }\n    .article {\n        height: 200px;\n    }\n\n} \n                ",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var p=0;p<n.length;p++){var s=[].concat(n[p]);r&&o[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],c=0;c<n.length;c++){var d=n[c],p=r.base?d[0]+r.base:d[0],s=a[p]||0,l="".concat(p," ").concat(s);a[p]=s+1;var h=t(l),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==h)e[h].references++,e[h].updater(g);else{var u=i(g,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:u,references:1})}o.push(l)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var c=t(a[o]);e[c].references--}for(var d=r(n,i),p=0;p<a.length;p++){var s=t(a[p]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},x={};function f(n){var e=x[n];if(void 0!==e)return e.exports;var t=x[n]={id:n,exports:{}};return u[n](t,t.exports,f),t.exports}f.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return f.d(e,{a:e}),e},f.d=(n,e)=>{for(var t in e)f.o(e,t)&&!f.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},f.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),f.nc=void 0,n=f(379),e=f.n(n),t=f(795),r=f.n(t),i=f(569),a=f.n(i),o=f(565),c=f.n(o),d=f(216),p=f.n(d),s=f(589),l=f.n(s),h=f(28),(g={}).styleTagTransform=l(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,console.log("ddd"),function(){const n=document.querySelector(".hamburger"),e=document.querySelector(".expand-ham");n.addEventListener("click",(()=>{n.classList.toggle("active"),e.classList.toggle("active"),console.log("fffff")}))}()})();