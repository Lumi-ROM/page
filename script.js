const toggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

// Check for saved user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    themeIcon.textContent = 'Light';
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    const isDark = body.classList.contains('dark-mode');
    themeIcon.textContent = isDark ? 'Light' : 'Dark';
    
    // Feedback for the console
    console.log(`LumiROM Theme Switched: ${isDark ? 'Dark' : 'Light'}`);
});