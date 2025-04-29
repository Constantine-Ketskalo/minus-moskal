// ==UserScript==
// @name         мінус москаль: переклад результатів пошуку
// @namespace    http://tampermonkey.net/
// @version      1.0|2025-04-29
// @description  Визначає результати пошуку москальською мовою. Коли знаходить, то робить їх сірими. Якщо біля результату пошуку є посилання "Перекласти цю сторінку", то підсвічує її для кращої видимості. Попередження! Для того, щоб коректно відображалось це посилання "Перекласти цю сторінку" і переклад був саме на українську, знадобиться зробити правильні налаштування в інших місцях: налаштування пошуку гугл (на сторінці https://www.google.com/preferences?hl=uk&lang=1), можливо також мова браузера і облікового запису гугл.
// @author       https://constantine-ketskalo.azurewebsites.net/uk/
// @match        http*://www.google.com/search*
// @include      http*://www.google.com.*/search*
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAyIiB3aWR0aD0iMjQyIj48cGF0aCBmaWxsPSIjZmZkNTAwIiBkPSJtIDEyMSAxIGMgLTkuMzIgMTAuNTggLTE1IDI0LjQyIC0xNSAzOS42MiAwLjU1IDMzLjM3IDQuNjQgNjYuNyA1IDEwMCAwLjc0IDMxLjEgLTguNTggNjAuMyAtMTkuOTIgODguOCAtMy43OCA3Ljg3IC03Ljg2IDE1LjU3IC0xMS45NSAyMy4yOSBsIC0xMiAtMi40MiBjIC0xMC44MyAtMi4xNiAtMTcuODcgLTEyLjY5IC0xNS43IC0yMy41MiAxLjg5IC05LjQ3IDEwLjIzIC0xNi4xIDE5LjUzIC0xNi4xIGwgNC4zOCAwLjQ3IGwgLTkuNzcgLTgxLjYgYyAtMy4xOSAtMzYuMyAtMjEuOTMgLTY4LjIgLTQ5LjUgLTg4LjkgLTQuNzQgLTMuNTYgLTkuNzcgLTYuODIgLTE1IC05LjY5IHYgMjg5LjcgaCA2Ni44OCBjIDUgMjcuMSAxOS45NCA1MC44IDQwLjk0IDY3IDQuOTkgMy40NCA5LjE4IDcuOTggMTIuMTkgMTMuMjggMyAtNS4zIDcuMTkgLTkuODQgMTIuMTkgLTEzLjI4IDIxIC0xNi4yNCAzNS45NCAtMzkuODkgNDAuOTQgLTY3IGggNjYuODggdiAtMjg5LjcgYyAtNS4yMyAyLjg3IC0xMC4yNiA2LjEzIC0xNSA5LjY5IC0yNy42IDIwLjczIC00Ni4zIDUyLjYgLTQ5LjUgODguOSBsIC05Ljc3IDgxLjYgbCA0LjM4IC0wLjQ3IGMgOS4zIDAuMDQgMTcuNjQgNi42MiAxOS41MyAxNi4xIDIuMTYgMTAuODMgLTQuODggMjEuMzUgLTE1LjcgMjMuNTIgbCAtMTIgMi40MiBjIC00LjA5IC03LjcxIC04LjE4IC0xNS40MSAtMTEuOTUgLTIzLjI5IC0xMS4zNSAtMjguNDggLTIwLjY3IC01Ny42OCAtMTkuOTMgLTg4LjggMC4zNiAtMzMuNCA0LjQ1IC02Ni43IDUgLTEwMCAwIC0xNS4yIC01LjY4IC0yOSAtMTUgLTM5LjYyIHogbSAtMTAwIDcxLjcgYyAxMi45NCAxNS4xOSAyMS42MyAzNC4xIDI0LjIgNTQuOTMgbCA4IDY3LjMgYyAtMTAuMjUgNS4xIC0xOCAxNC40NiAtMjAuOTQgMjUuNzkgaCAtMTEuMzMgdiAtMTQ4IHogbSAyMDAgMCB2IDE0OCBoIC0xMS4zMyBjIC0yLjkyIC0xMS4zMiAtMTAuNjkgLTIwLjY4IC0yMC45NCAtMjUuNzkgbCA4IC02Ny4zIGMgMi41OSAtMjAuODEgMTEuMjggLTM5Ljc0IDI0LjIgLTU0Ljk0IHogbSAtMTAwIDEzNS4zIGMgNS4zNyAxNy41NyAxMi43NiAzNC4zIDIxLjk1IDQ5Ljc4IC04Ljc0IDIuNjUgLTE2LjM0IDcuODEgLTIxLjk1IDE0Ljc2IC01LjYxIC02Ljk1IC0xMy4yMSAtMTIuMSAtMjEuOTUgLTE0Ljc3IDkuMTkgLTE1LjUxIDE2LjU4IC0zMi4yIDIxLjk1IC00OS43NyB6IG0gLTEwMCAzMi43NCBoIDExLjMzIGMgMy41NyAxMy44MSAxNC4zNSAyNC43MSAyOCAyOC41MiBsIDkuNjEgMi4xOSBjIC0yLjU3IDkuMzIgLTMuOTggMTkuMSAtMy45OCAyOS4zIGggLTQ1IHYgLTYwIHogbSAxODguNyAwIGggMTEuMzMgdiA2MCBoIC00NSBjIDAgLTEwLjE0IC0xLjQxIC0xOS45NyAtMy45OCAtMjkuMyBsIDkuNjEgLTIuMTkgYyAxMy43IC0zLjgxIDI0LjQ3IC0xNC43MiAyOCAtMjguNTIgeiBtIC0xMjAuMiAzNS4zIGMgMTIuMTMgMS43MSAyMS40OCAxMi4xIDIxLjQ4IDI0LjY5IGggLTI1IGMgMCAtOC41NyAxLjI3IC0xNi44NCAzLjUyIC0yNC42OSB6IG0gNjIuOTcgMCBjIDIuMjUgNy44NSAzLjUyIDE2LjEgMy41MiAyNC42OSBoIC0yNSBjIDAgLTEyLjYxIDkuMzUgLTIyLjk4IDIxLjQ4IC0yNC42OSB6IG0gLTY0LjIgNDQuNyBoIDIyLjczIHYgNDIuMSBjIC0xMSAtMTEuNTUgLTE5IC0yNiAtMjIuNzMgLTQyLjEgeiBtIDQyLjczIDAgaCAyMi43MyBjIC0zLjY4IDE2LjEgLTExLjcgMzAuNTcgLTIyLjczIDQyLjEgdiAtNDIuMSB6Ii8+PC9zdmc+
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    
    // 1. Унікальні москальські літери
    const moskalUniqueLetters = ['ы', 'э', 'ё', 'ъ'];

    // 2. Часті москальські слова без унікальних літер
    const moskalCommonWords = ['и', 'что', 'как', 'да', 'нет', 'она', 'они', 'из', 'с', 'к', 'года', 'также', 'или', 'будет', 'время', 'их', 'после', 'есть', 'более', 'только', 'еще', 'все', 'это', 'для', 'по', 'на', 'от', 'при', 'так', 'но', 'всегда', 'может', 'чтобы', 'если', 'тогда', 'где', 'когда', 'здесь', 'там'];

    const ismoskalDomain = (url) => {
        const hostname = new URL(url).hostname.toLowerCase();

        return hostname.endsWith('.ru') ||
                hostname.startsWith('ru.') ||
                url.includes('/ru/')
    };

    const ismoskalText = (text) => {
        text = text.toLowerCase();
        
        if (!text) {
            return false;
        }

        for (const letter of moskalUniqueLetters) {
            if (text.includes(letter)) {
                return true;
            }
        }

        for (const word of text.split(' ')) {
            if (moskalCommonWords.includes(word)) {
                return true;
            }
        }

        return false;
    }

    const formatStylesForSearchResult = (result) => {
        const mainLinkElement = result.querySelector('a:not([hreftranslate])');
        const translatedLinkElement = result.querySelector('a[hreftranslate]');
        const contentElement = result.querySelector('div.VwiC3b');

        for (const element of [mainLinkElement, contentElement]) {
            element.style.color = 'gray';
            element.style.textDecoration = 'line-through';
            element.style.opacity = '0.5';
        }

        if (translatedLinkElement && translatedLinkElement.getAttribute('hreftranslate') === 'uk') {
            translatedLinkElement.style.fontWeight = 'bold';
        }
    }

    const redirectClickToTranslateLink = (result) => {
        const mainLinkElement = result.querySelector('a:not([hreftranslate])');
        const translatedLinkElement = result.querySelector('a[hreftranslate]');
        
        let translateUrl = '/';
        let ping = null;
        if (translatedLinkElement && translatedLinkElement.getAttribute('hreftranslate') === 'uk') {
            translateUrl = translatedLinkElement.getAttribute('href');
            ping = translatedLinkElement.getAttribute('ping');
        } else {
            translateUrl = `https://translate.google.com/translate?hl=uk&sl=ru&tl=uk&u=${encodeURIComponent(mainLinkElement.href)}`;
        }

        mainLinkElement.setAttribute('href', translateUrl);
        mainLinkElement.setAttribute('hreftranslate', 'uk');
        if (ping) {
            mainLinkElement.setAttribute('ping', ping);
        }
    }

    const searchResults = document.querySelectorAll('div.MjjYud');

    for (const result of searchResults) {
        const mainLinkElement = result.querySelector('a:not([hreftranslate])');
        const text = result.innerText;

        if (mainLinkElement && ismoskalDomain(mainLinkElement.href) || ismoskalText(text)) {
            formatStylesForSearchResult(result);
            redirectClickToTranslateLink(result);
        }
    }
})();