// ==UserScript==
// @name         Мовний щит: youtube shorts
// @namespace    https://constantine-ketskalo.azurewebsites.net/uk/
// @version      1.0|2025-04-29
// @description  Додає на сторінки youtube shorts 2 кнопки: "🚫 канал" і "🚫 відео". Обидві кнопки роблять за вас автоматичні дії, щоб ви не робили це вручну. Першим ділом обидві кнопки ставлять відео на паузу, щоб не відтворювати далі відео. Кнопка "🚫 канал" звітує відео як "пропаганда тероризму" і блокує канал. Кнопка "🚫 відео" тільки звітує відео як "пропаганда тероризму".
// @author       Constantine Ketskalo
// @match        https://www.youtube.com/shorts/*
// @icon         data:image/png;base64,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
// @icon64       data:image/png;base64,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
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    .anti-moskal-button {
        margin-top: 16px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        border: 4px solid red;
        cursor: pointer;
        overflow: hidden;
        padding: 0;
        font-size: 12px;
        font-weight: bold;
        color: black;
        text-align: center;
        justify-content: center;
        align-items: center;
        display: flex;
        opacity: 50%;
    }

    .anti-moskal-button:hover {
        opacity: 1;
    }

    .anti-moskal-button::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 4px;
        background-color: red;
        transform: rotate(-45deg);
        pointer-events: none;
    }

    .anti-moskal-button.video {
        background: yellow;
    }
    
    .anti-moskal-button.channel {
        background: pink;
    }

    .anti-moskal-button span {
        color: black;
        text-decoration: none;

        z-index: 1;
        padding: 10px;
    }

    .button-blocking-result {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #4CAF50; /* Зелений */
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        font-weight: bold;
        font-family: sans-serif;
        user-select: none;
        margin-top: 16px;
    }

    .button-blocking-result .video {
        
    }

    .button-blocking-result .channel {

    }

    .hidden-button {
        display: none;
    }

    .blocked-video {
        opacity: 0.3;
        filter: grayscale(100%);
    }
`);

(function() {
    'use strict';

    // ################################
    // Оголошення коду
    // ################################

    const elementLoadTimeout = 10000; // 10 секунд
    const elementLoadInterval = 300; // 0.3 секунди

    const pauseVideo = () => {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.pause();
        }
    }

    // Очікує на появу елемента
    async function waitForElementAsync(selector, timeout = elementLoadTimeout) {
        const start = Date.now();
        const initialUrl = window.location.href;

        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                // припинити дію, якщо користувач прокрутив сторінку на інше відео
                if (window.location.href !== initialUrl) {
                    clearInterval(interval);
                    reject();
                    return;
                }

                const el = typeof(selector) === 'function'
                            ? selector()
                            : document.querySelector(selector);

                if (el) {
                    clearInterval(interval);
                    resolve();
                } else if (Date.now() - start > timeout) {
                    clearInterval(interval);
                    reject();
                    console.error('waitForElement: Timeout for selector', selector);
                }
            }, elementLoadInterval);
        });
    }

    function inputText(element, text) {
        element.value = text;
        element.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function confirmIsUserLoggedIn() {
        const isLoggedIn = document.querySelectorAll('#avatar-btn').length > 0;
        if (!isLoggedIn) {
            alert('Вам потрібно увійти в акаунт Google, щоб поскаржитися на відео.');
        }
        return isLoggedIn;
    }

    function markVideoAsReported() {
        document.querySelector('ytd-player#player video').classList.add('blocked-video');
        document.querySelector('.anti-moskal-button.video').classList.add('hidden-button');
        document.querySelector('.button-blocking-result.video').classList.remove('hidden-button');
    }

    async function reportVideoAsync(finishCallback = null) {
        if (!confirmIsUserLoggedIn()) {
            return;
        }

        // меню 3 крапки
        const threeDotsButtonSelector = '#button-shape .yt-spec-touch-feedback-shape__fill';
        await waitForElementAsync(threeDotsButtonSelector);
        document.querySelector(threeDotsButtonSelector).click();

        // кнопка "Поскаржитись"
        const reportButtonSelector = 'ytd-popup-container #items ytd-menu-service-item-renderer:has(svg path[d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"])';
        await waitForElementAsync(reportButtonSelector);
        document.querySelector(reportButtonSelector).click();

        // радіо "Пропаганда тероризму"
        const radioTerrorismSelector = 'tp-yt-paper-radio-button[name="7"]';
        await waitForElementAsync(radioTerrorismSelector);
        document.querySelector(radioTerrorismSelector).click();

        // кнопка "Далі"
        const nextButtonSelector = '#submit-button .yt-spec-touch-feedback-shape__fill';
        await waitForElementAsync(nextButtonSelector);
        document.querySelector(nextButtonSelector).click();

        // ввести причину звітування "russian propaganda"
        const reportReasonInputSelector = '#textarea';
        await waitForElementAsync(reportReasonInputSelector);
        const reportReasonInputElement = document.querySelector(reportReasonInputSelector);
        inputText(reportReasonInputElement, 'russian propaganda');

        // кнопка "Поскаржитися"
        const submitButtonSelector = '#submit-button .yt-spec-touch-feedback-shape__fill';
        await waitForElementAsync(submitButtonSelector);
        document.querySelector(submitButtonSelector).click();

        // кнопка "Вийти"
        const exitButtonSelector = '#confirm-button .yt-spec-touch-feedback-shape__fill';
        await waitForElementAsync(exitButtonSelector);
        document.querySelector(exitButtonSelector).click();
    }

    function resetStyles() {
        document.querySelector('ytd-player#player video').classList.remove('blocked-video');
        for (let button of document.querySelectorAll('.anti-moskal-button')) {
            button.classList.remove('hidden-button');
        }
        for (let resultButton of document.querySelectorAll('.button-blocking-result')) {
            resultButton.classList.add('hidden-button');
        }
    }

    function addButtons() {
        const menu = document.querySelector('#experiment-overlay #actions');

        // Створюємо елемент кнопки "москальське відео"
        const videoButtonWrapper = document.createElement('div');
        videoButtonWrapper.className = 'anti-moskal-button video';

        const videoText = document.createElement('span');
        videoText.href = '#';
        videoText.innerText = 'відео';

        videoButtonWrapper.appendChild(videoText);

        videoButtonWrapper.onclick = (event) => {
            event.preventDefault();
            pauseVideo();

            if (confirm('Поскаржитись на москальське відео?')) {
                reportVideoAsync()
                    .then(() => {
                        markVideoAsReported();
                    })
                    .catch((error) => {
                        console.error('Виникла помилка при спробі поскаржитися на відео.', error);
                    });
            }
        };

        // Створюємо елемент кнопки відео успішно заблоковане
        const videoButtonResult = document.createElement('div');
        videoButtonResult.className = 'button-blocking-result video hidden-button';
        videoButtonResult.textContent = '✓';

        // Створюємо елемент кнопки "москальський канал"
        const channelButtonWrapper = document.createElement('div');
        channelButtonWrapper.className = 'anti-moskal-button channel';

        const channelText = document.createElement('span');
        channelText.href = '#';
        channelText.innerText = 'канал';

        channelButtonWrapper.appendChild(channelText);

        channelButtonWrapper.onclick = (event) => {
            event.preventDefault();

            pauseVideo();

            if (confirm('Поскаржитись на москальське відео?')) {
                alert('🔥 Готово! Канал відзначено як москальський.');
            }
        };

        menu.appendChild(videoButtonWrapper);
        menu.appendChild(videoButtonResult);
        menu.appendChild(channelButtonWrapper);
    }

    // Основна функція: відслідковує появу меню в shorts
    async function addButtonsAsync() {
        await waitForElementAsync('#experiment-overlay #actions');
        addButtons();
    }

    // ################################
    // Виконання коду
    // ################################

    // скинути стилі відео і кнопок при прокручуванні на інше відео
    window.navigation.addEventListener("navigate", (event) => {
        resetStyles();
    });

    addButtonsAsync();
})();