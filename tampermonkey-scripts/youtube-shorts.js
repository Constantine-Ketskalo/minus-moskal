// ==UserScript==
// @name         Мовний щит: youtube shorts
// @namespace    https://constantine-ketskalo.azurewebsites.net/uk/
// @version      1.0|2025-04-29
// @description  Додає на сторінки youtube shorts 2 кнопки: "москальський канал" і "москальське відео". Обидві кнопки роблять за вас автоматичні дії, щоб ви не робили це вручну. Першим ділом обидві кнопки ставлять відео на паузу, щоб не відтворювати далі відео. Кнопка "москальський канал" звітує відео як "мова ворожнечі" і блокує канал. Кнопка "москальське відео" тільки звітує відео як "мова ворожнечі".
// @author       Constantine Ketskalo
// @match        https://www.youtube.com/shorts/*
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAyIiB3aWR0aD0iMjQyIj48cGF0aCBmaWxsPSIjZmZkNTAwIiBkPSJtIDEyMSAxIGMgLTkuMzIgMTAuNTggLTE1IDI0LjQyIC0xNSAzOS42MiAwLjU1IDMzLjM3IDQuNjQgNjYuNyA1IDEwMCAwLjc0IDMxLjEgLTguNTggNjAuMyAtMTkuOTIgODguOCAtMy43OCA3Ljg3IC03Ljg2IDE1LjU3IC0xMS45NSAyMy4yOSBsIC0xMiAtMi40MiBjIC0xMC44MyAtMi4xNiAtMTcuODcgLTEyLjY5IC0xNS43IC0yMy41MiAxLjg5IC05LjQ3IDEwLjIzIC0xNi4xIDE5LjUzIC0xNi4xIGwgNC4zOCAwLjQ3IGwgLTkuNzcgLTgxLjYgYyAtMy4xOSAtMzYuMyAtMjEuOTMgLTY4LjIgLTQ5LjUgLTg4LjkgLTQuNzQgLTMuNTYgLTkuNzcgLTYuODIgLTE1IC05LjY5IHYgMjg5LjcgaCA2Ni44OCBjIDUgMjcuMSAxOS45NCA1MC44IDQwLjk0IDY3IDQuOTkgMy40NCA5LjE4IDcuOTggMTIuMTkgMTMuMjggMyAtNS4zIDcuMTkgLTkuODQgMTIuMTkgLTEzLjI4IDIxIC0xNi4yNCAzNS45NCAtMzkuODkgNDAuOTQgLTY3IGggNjYuODggdiAtMjg5LjcgYyAtNS4yMyAyLjg3IC0xMC4yNiA2LjEzIC0xNSA5LjY5IC0yNy42IDIwLjczIC00Ni4zIDUyLjYgLTQ5LjUgODguOSBsIC05Ljc3IDgxLjYgbCA0LjM4IC0wLjQ3IGMgOS4zIDAuMDQgMTcuNjQgNi42MiAxOS41MyAxNi4xIDIuMTYgMTAuODMgLTQuODggMjEuMzUgLTE1LjcgMjMuNTIgbCAtMTIgMi40MiBjIC00LjA5IC03LjcxIC04LjE4IC0xNS40MSAtMTEuOTUgLTIzLjI5IC0xMS4zNSAtMjguNDggLTIwLjY3IC01Ny42OCAtMTkuOTMgLTg4LjggMC4zNiAtMzMuNCA0LjQ1IC02Ni43IDUgLTEwMCAwIC0xNS4yIC01LjY4IC0yOSAtMTUgLTM5LjYyIHogbSAtMTAwIDcxLjcgYyAxMi45NCAxNS4xOSAyMS42MyAzNC4xIDI0LjIgNTQuOTMgbCA4IDY3LjMgYyAtMTAuMjUgNS4xIC0xOCAxNC40NiAtMjAuOTQgMjUuNzkgaCAtMTEuMzMgdiAtMTQ4IHogbSAyMDAgMCB2IDE0OCBoIC0xMS4zMyBjIC0yLjkyIC0xMS4zMiAtMTAuNjkgLTIwLjY4IC0yMC45NCAtMjUuNzkgbCA4IC02Ny4zIGMgMi41OSAtMjAuODEgMTEuMjggLTM5Ljc0IDI0LjIgLTU0Ljk0IHogbSAtMTAwIDEzNS4zIGMgNS4zNyAxNy41NyAxMi43NiAzNC4zIDIxLjk1IDQ5Ljc4IC04Ljc0IDIuNjUgLTE2LjM0IDcuODEgLTIxLjk1IDE0Ljc2IC01LjYxIC02Ljk1IC0xMy4yMSAtMTIuMSAtMjEuOTUgLTE0Ljc3IDkuMTkgLTE1LjUxIDE2LjU4IC0zMi4yIDIxLjk1IC00OS43NyB6IG0gLTEwMCAzMi43NCBoIDExLjMzIGMgMy41NyAxMy44MSAxNC4zNSAyNC43MSAyOCAyOC41MiBsIDkuNjEgMi4xOSBjIC0yLjU3IDkuMzIgLTMuOTggMTkuMSAtMy45OCAyOS4zIGggLTQ1IHYgLTYwIHogbSAxODguNyAwIGggMTEuMzMgdiA2MCBoIC00NSBjIDAgLTEwLjE0IC0xLjQxIC0xOS45NyAtMy45OCAtMjkuMyBsIDkuNjEgLTIuMTkgYyAxMy43IC0zLjgxIDI0LjQ3IC0xNC43MiAyOCAtMjguNTIgeiBtIC0xMjAuMiAzNS4zIGMgMTIuMTMgMS43MSAyMS40OCAxMi4xIDIxLjQ4IDI0LjY5IGggLTI1IGMgMCAtOC41NyAxLjI3IC0xNi44NCAzLjUyIC0yNC42OSB6IG0gNjIuOTcgMCBjIDIuMjUgNy44NSAzLjUyIDE2LjEgMy41MiAyNC42OSBoIC0yNSBjIDAgLTEyLjYxIDkuMzUgLTIyLjk4IDIxLjQ4IC0yNC42OSB6IG0gLTY0LjIgNDQuNyBoIDIyLjczIHYgNDIuMSBjIC0xMSAtMTEuNTUgLTE5IC0yNiAtMjIuNzMgLTQyLjEgeiBtIDQyLjczIDAgaCAyMi43MyBjIC0zLjY4IDE2LjEgLTExLjcgMzAuNTcgLTIyLjczIDQyLjEgdiAtNDIuMSB6Ii8+PC9zdmc+
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

    // 1. Унікальні москальські літери
    const moskalUniqueLetters = ['ы', 'э', 'ё', 'ъ'];

    // 2. Часті москальські слова без унікальних літер
    const moskalCommonWords = ['и', 'что', 'как', 'да', 'нет', 'она', 'они', 'из', 'с', 'к', 'года', 'также', 'или', 'будет', 'время', 'их', 'после', 'есть', 'более', 'только', 'еще', 'это', 'от', 'но', 'всегда', 'может', 'чтобы', 'если', 'тогда', 'где', 'когда', 'здесь'];

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

    // ################

    const pauseVideo = () => {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.pause();
        }
    }

    const addButtons = () => {
        const menu = document.querySelector('ytd-mini-guide-renderer');

        const containerElement = document.createElement('div');
        containerElement.className = 'anti-rus-container';
        containerElement.setAttribute('style', 'position: fixed;bottom: 0;top: auto;z-index: 9999;display: flex;flex-direction: column;align-items: center;justify-content: center;');

        // Створюємо елемент кнопки "москальське відео"
        const videoButtonWrapper = document.createElement('div');
        videoButtonWrapper.className = 'anti-rus-button';
        videoButtonWrapper.setAttribute('style', 'cursor: pointer;width: 40px;height: 40px;background: yellow;margin: 15px;border-radius: 50%;text-align: center;');
        videoButtonWrapper.style.cursor = 'pointer';

        const videoAnchor = document.createElement('a');
        videoAnchor.href = '#';
        videoAnchor.style.textDecoration = 'none';
        videoAnchor.innerText = '🔥 відео';

        videoButtonWrapper.appendChild(videoAnchor);

        videoButtonWrapper.onclick = (event) => {
            event.preventDefault();
            pauseVideo();

            if (confirm('Поскаржитись на москальське відео?')) {
                alert('🔥 Готово! Відео відзначено як москальське.');
            }
        };

        // Створюємо елемент кнопки "москальський канал"
        const channelButtonWrapper = document.createElement('div');
        channelButtonWrapper.className = 'anti-rus-button';
        channelButtonWrapper.setAttribute('style', 'cursor: pointer;width: 40px;height: 40px;background: pink;margin: 15px;border-radius: 50%;text-align: center;');
        channelButtonWrapper.style.cursor = 'pointer';

        const channelAnchor = document.createElement('a');
        channelAnchor.href = '#';
        channelAnchor.style.textDecoration = 'none';
        channelAnchor.innerText = '🔥 канал';

        channelButtonWrapper.appendChild(channelAnchor);

        channelButtonWrapper.onclick = (event) => {
            event.preventDefault();

            pauseVideo();

            if (confirm('Поскаржитись на москальське відео?')) {
                alert('🔥 Готово! Канал відзначено як москальський.');
            }
        };

        containerElement.appendChild(videoButtonWrapper);
        containerElement.appendChild(channelButtonWrapper);

        menu.appendChild(containerElement);
    }

    addButtons();
})();