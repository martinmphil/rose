const f=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}};f();function g(e){const t=document.querySelector("#greeting");t.innerText=`Hello ${e}`}function c(e){const t=document.querySelector("#crux");t.innerHTML=e}function d(){let e;try{e=window.sessionStorage;const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return e?t instanceof DOMException&&(t.code===22||t.code===1014||t.name==="QuotaExceededError"||t.name==="NS_ERROR_DOM_QUOTA_REACHED")&&e&&e.length!==0:!1}}function m(){const e=new URLSearchParams(window.location.hash).get("access_token");typeof e=="string"&&e.length>0&&sessionStorage.setItem("Authorization",e)}const l="https://greenstem-pine.auth.eu-west-1.amazoncognito.com/login?response_type=token&client_id=uedkl69k5q69qtietp85l2smb&redirect_uri=https://prod.d2u3xtx2d48te5.amplifyapp.com/can",y=l.length>0?l:"https://www.greenstem.uk/can/";function u(){c(`<p class="ingress"><a href=${y}>Please log in </a></p>`)}async function h(e="",t="GET",a=""){const i=sessionStorage.getItem("Authorization");if(typeof i!="string"||i.length<1)throw u()," Authorization header missing from authorized-fetch ";const r="https://7hmryyd0m0.execute-api.eu-west-1.amazonaws.com"+e,s={method:t,headers:{Authorization:i}};return typeof a=="string"&&a.length>0&&(s.body=a),fetch(r,s).then(o=>{if(!o.ok)throw console.warn(o.statusText),new Error(` Authorized fetch response not ok, ${o.statusText} `);return o.json()}).then(o=>{if(o.error)throw console.warn(o.error),new Error(" Fetching data returned an error (see warning log). ");if(o.body)return o.body;throw new Error(" The body-field absent from fetched data. ")})}async function p(){return h("/data/email").then(e=>{if(typeof e=="string"&&e.length>1)return e;throw console.log(e),u(),sessionStorage.clear()," Invalid email-address from get-email. "})}async function w(){return h("/data/disciplines").then(e=>{if(typeof e=="string"&&e.length>0)return e;throw" Invalid disciplines-listings from get-disciplines function. "})}async function b(){if(sessionStorage.clear(),!d()){c(`
Please enable session-storage by reloading this page
after exiting incognito Private Browsing.
    `);return}m(),await p().then(e=>{e&&(g(e),w().then(t=>{c(t)})),u()}),sessionStorage.clear()}async function x(){await b()}async function S(){try{await x()}catch(e){console.warn(e)}}S();
