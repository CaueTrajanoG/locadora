(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function c(t){return`
    <div id="investment-${t.id}" class="bg-white shadow-md rounded-lg p-4">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-700">${t.nome}</h3>
        <p class="text-lg font-semibold text-gray-700">${t.fab}</p>
      </div>
      <div class="mt-4">
        <p class="text-sm text-gray-500"><span class="font-bold">Ano:</span> ${t.ano}</p>        
      </div>
    </div>
  `}function d(t,r){console.log(r),console.log(t);const s=document.getElementById("search-input").value.toLowerCase();if(s){const n=r.filter(e=>e.nome.toLowerCase().includes(s.toLowerCase()));t.innerHTML=n.map(e=>c(e)).join("")}else t.innerHTML=r.map(n=>c(n)).join("")}const u={filtra:d},a=document.querySelector(".carGrid"),l=JSON.parse(localStorage.getItem("@cars"));console.log(l);a.innerHTML=l.map(t=>c(t)).join("");document.getElementById("searchButton").addEventListener("click",t=>{t.preventDefault(),u.filtra(a,l)});
