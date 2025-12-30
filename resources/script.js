// ... previous builds code ...

// Changelog Data
const logs = [
    {
        version: "v1.0-STABLE",
        changes: [
            "Fixed: Fingerprint sensor latency",
            "Added: Custom Blue UI accent engine",
            "Kernel: Updated to Dec 2025 security patch"
        ]
    },
    {
        version: "v0.9-BETA",
        changes: [
            "Fixed: Camera shutter lag",
            "Optimized: RAM management for 4GB models",
            "Initial: Support for A32 4G variant"
        ]
    }
];

const logContainer = document.getElementById('changelog-container');

logs.forEach(log => {
    const logDiv = document.createElement('div');
    logDiv.className = 'log-entry';
    
    let items = log.changes.map(item => `<div class="log-item">> ${item}</div>`).join('');
    
    logDiv.innerHTML = `
        <div class="log-version">[ REVISION: ${log.version} ]</div>
        ${items}
    `;
    logContainer.appendChild(logDiv);
});

// Update the Navigation Links (Optional Helper)
document.querySelectorAll('.tui-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});