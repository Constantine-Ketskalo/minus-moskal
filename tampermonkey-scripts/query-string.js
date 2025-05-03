// ==UserScript==
// @name         Мовний щит: додаткові параметри пошуку
// @namespace    https://constantine-ketskalo.azurewebsites.net/uk/
// @version      1.0|2025-05-01
// @description  Додає до текстового запиту пошуку гугл текст "-и -site:*.ru". Зменшує кількість москальськомовних сайтів у результатах пошуку. Добре доповнює існуючі додатки "Лагідна українізація" та "Лагідна українізація" та "stopRU". Попередження: додатково перезавантажує сторінку, щоб додати ці параметри до запиту.
// @author       Constantine Ketskalo
// @match        http*://www.google.com/search*
// @include      http*://www.google.com.*/search*
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAyIiB3aWR0aD0iMjQyIj48cGF0aCBmaWxsPSIjZmZkNTAwIiBkPSJtIDEyMSAxIGMgLTkuMzIgMTAuNTggLTE1IDI0LjQyIC0xNSAzOS42MiAwLjU1IDMzLjM3IDQuNjQgNjYuNyA1IDEwMCAwLjc0IDMxLjEgLTguNTggNjAuMyAtMTkuOTIgODguOCAtMy43OCA3Ljg3IC03Ljg2IDE1LjU3IC0xMS45NSAyMy4yOSBsIC0xMiAtMi40MiBjIC0xMC44MyAtMi4xNiAtMTcuODcgLTEyLjY5IC0xNS43IC0yMy41MiAxLjg5IC05LjQ3IDEwLjIzIC0xNi4xIDE5LjUzIC0xNi4xIGwgNC4zOCAwLjQ3IGwgLTkuNzcgLTgxLjYgYyAtMy4xOSAtMzYuMyAtMjEuOTMgLTY4LjIgLTQ5LjUgLTg4LjkgLTQuNzQgLTMuNTYgLTkuNzcgLTYuODIgLTE1IC05LjY5IHYgMjg5LjcgaCA2Ni44OCBjIDUgMjcuMSAxOS45NCA1MC44IDQwLjk0IDY3IDQuOTkgMy40NCA5LjE4IDcuOTggMTIuMTkgMTMuMjggMyAtNS4zIDcuMTkgLTkuODQgMTIuMTkgLTEzLjI4IDIxIC0xNi4yNCAzNS45NCAtMzkuODkgNDAuOTQgLTY3IGggNjYuODggdiAtMjg5LjcgYyAtNS4yMyAyLjg3IC0xMC4yNiA2LjEzIC0xNSA5LjY5IC0yNy42IDIwLjczIC00Ni4zIDUyLjYgLTQ5LjUgODguOSBsIC05Ljc3IDgxLjYgbCA0LjM4IC0wLjQ3IGMgOS4zIDAuMDQgMTcuNjQgNi42MiAxOS41MyAxNi4xIDIuMTYgMTAuODMgLTQuODggMjEuMzUgLTE1LjcgMjMuNTIgbCAtMTIgMi40MiBjIC00LjA5IC03LjcxIC04LjE4IC0xNS40MSAtMTEuOTUgLTIzLjI5IC0xMS4zNSAtMjguNDggLTIwLjY3IC01Ny42OCAtMTkuOTMgLTg4LjggMC4zNiAtMzMuNCA0LjQ1IC02Ni43IDUgLTEwMCAwIC0xNS4yIC01LjY4IC0yOSAtMTUgLTM5LjYyIHogbSAtMTAwIDcxLjcgYyAxMi45NCAxNS4xOSAyMS42MyAzNC4xIDI0LjIgNTQuOTMgbCA4IDY3LjMgYyAtMTAuMjUgNS4xIC0xOCAxNC40NiAtMjAuOTQgMjUuNzkgaCAtMTEuMzMgdiAtMTQ4IHogbSAyMDAgMCB2IDE0OCBoIC0xMS4zMyBjIC0yLjkyIC0xMS4zMiAtMTAuNjkgLTIwLjY4IC0yMC45NCAtMjUuNzkgbCA4IC02Ny4zIGMgMi41OSAtMjAuODEgMTEuMjggLTM5Ljc0IDI0LjIgLTU0Ljk0IHogbSAtMTAwIDEzNS4zIGMgNS4zNyAxNy41NyAxMi43NiAzNC4zIDIxLjk1IDQ5Ljc4IC04Ljc0IDIuNjUgLTE2LjM0IDcuODEgLTIxLjk1IDE0Ljc2IC01LjYxIC02Ljk1IC0xMy4yMSAtMTIuMSAtMjEuOTUgLTE0Ljc3IDkuMTkgLTE1LjUxIDE2LjU4IC0zMi4yIDIxLjk1IC00OS43NyB6IG0gLTEwMCAzMi43NCBoIDExLjMzIGMgMy41NyAxMy44MSAxNC4zNSAyNC43MSAyOCAyOC41MiBsIDkuNjEgMi4xOSBjIC0yLjU3IDkuMzIgLTMuOTggMTkuMSAtMy45OCAyOS4zIGggLTQ1IHYgLTYwIHogbSAxODguNyAwIGggMTEuMzMgdiA2MCBoIC00NSBjIDAgLTEwLjE0IC0xLjQxIC0xOS45NyAtMy45OCAtMjkuMyBsIDkuNjEgLTIuMTkgYyAxMy43IC0zLjgxIDI0LjQ3IC0xNC43MiAyOCAtMjguNTIgeiBtIC0xMjAuMiAzNS4zIGMgMTIuMTMgMS43MSAyMS40OCAxMi4xIDIxLjQ4IDI0LjY5IGggLTI1IGMgMCAtOC41NyAxLjI3IC0xNi44NCAzLjUyIC0yNC42OSB6IG0gNjIuOTcgMCBjIDIuMjUgNy44NSAzLjUyIDE2LjEgMy41MiAyNC42OSBoIC0yNSBjIDAgLTEyLjYxIDkuMzUgLTIyLjk4IDIxLjQ4IC0yNC42OSB6IG0gLTY0LjIgNDQuNyBoIDIyLjczIHYgNDIuMSBjIC0xMSAtMTEuNTUgLTE5IC0yNiAtMjIuNzMgLTQyLjEgeiBtIDQyLjczIDAgaCAyMi43MyBjIC0zLjY4IDE2LjEgLTExLjcgMzAuNTcgLTIyLjczIDQyLjEgdiAtNDIuMSB6Ii8+PC9zdmc+
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    const additionalParameters = ['-и', '-site:*.ru'];
    const wordsSeparator = ' ';

    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);

    if (searchParams.has('q')) {
        let needToReload = false;
        const currentValue = searchParams.get('q');
        let searchQueryParts = currentValue.split(wordsSeparator);

        for (const additionalText of additionalParameters) {
            if (!searchQueryParts.some(part => part.trim() === additionalText)) {
                searchQueryParts.unshift(additionalText);
                needToReload = true;
            }
        }

        let newSearchQuery = searchQueryParts.join(wordsSeparator);

        if (needToReload) {
            searchParams.set('q', newSearchQuery);
            const newUrl = window.location.origin + window.location.pathname + '?' + searchParams.toString();

            window.location.href = newUrl;
        }
    }
})();