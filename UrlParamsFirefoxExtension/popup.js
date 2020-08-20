'use strict';

function getUrlParams() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    const urlObj = new URL(tabs[0].url);

    const wholeUrlDiv = document.getElementById("url-params-popup-url");
    wholeUrlDiv.innerHTML += url;

    const pathDiv = document.getElementById("url-params-popup-path");
    pathDiv.innerHTML += url.pathname;

    const searchParams = new URLSearchParams(urlObj.search);
    const searchParamsDiv = document.getElementById("url-params-popup-search-params");
    searchParamsDiv.innerHTML += "<ul>";
    for (let [key, value] of searchParams.entries()) {
      searchParamsDiv.innerHTML += `<li><b>${key}:</b> ${value}`;
    }
    searchParamsDiv.innerHTML += "</ul>";

    const hashDiv = document.getElementById("url-params-popup-anchor");
    hashDiv.innerHTML += url.hash;
  });
};
getUrlParams();