const timeDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');
const timezoneSelector = document.getElementById('timezone');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const container = document.querySelector('.container');
const clickSound = document.getElementById('click-sound');


function updateClock(timezone) {
    const now = new Date();

    const options = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const dateOptions = {
        timeZone: timezone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    timeDisplay.textContent = now.toLocaleTimeString('en-US', options);
    dateDisplay.textContent = now.toLocaleDateString('en-US', dateOptions);
}

let currentZone = timezoneSelector.value;
updateClock(currentZone);
setInterval(() => updateClock(currentZone), 1000);

timezoneSelector.addEventListener('change', () => {
    currentZone = timezoneSelector.value;
    updateClock(currentZone);
});

let isSwapped = false;

themeToggle.addEventListener('click', () => {
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play().catch(err => console.error("Click sound failed:", err));
    isSwapped = !isSwapped;

    if (isSwapped) {
        body.style.background = '#500711';         // deep velvet background
        container.style.background = '#ED9BBD';    // rose pink box
        container.style.color = '#500711';
        timeDisplay.style.color = '#500711';
        dateDisplay.style.color = '#661b32';
    } else {
        body.style.background = '#ED9BBD';         // rose pink background
        container.style.background = '#500711';    // deep velvet box
        container.style.color = '#fff';
        timeDisplay.style.color = '#fff';
        dateDisplay.style.color = '#fff';
    }
});
