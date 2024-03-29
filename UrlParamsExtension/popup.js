'use strict';

function getUrlParams() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    const urlObj = new URL(tabs[0].url);

    const wholeUrlDiv = document.getElementById("url-params-popup-url-content");
    wholeUrlDiv.innerHTML += url;

    const pathDiv = document.getElementById("url-params-popup-path");
    pathDiv.innerHTML += urlObj.pathname ? urlObj.pathname : '';

    const searchParams = new URLSearchParams(urlObj.search);
    const searchParamsDiv = document.getElementById("url-params-popup-search-params-content");
    searchParamsDiv.innerHTML += "<ul>";
    for (let [key, value] of searchParams.entries()) {
      searchParamsDiv.innerHTML += `<li><b>${key}:</b> ${value}`;
    }
    searchParamsDiv.innerHTML += "</ul>";

    const hashDiv = document.getElementById("url-params-popup-anchor-content");
    hashDiv.innerHTML += urlObj.hash ? JSON.stringify(urlObj.hash) : '';
  });
};
getUrlParams();