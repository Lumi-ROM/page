

// Theme Toggle Logic
const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Logic for TUI: When dark-mode class is active, it's actually "Light Theme"
    const isLight = body.classList.contains('dark-mode');
    toggle.textContent = isLight ? "SET_DARK_MODE" : "SET_LIGHT_MODE";
});

console.log("SYSTEM_READY: LumiROM initialized.");