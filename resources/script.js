// Preserve your committed changelog data
const logs = [
    {
        version: "v1.0-STABLE",
        changes: [
            "Fixed: Fingerprint sensor latency",
            "Added: Custom Blue UI accent engine",
            "Kernel: Updated to Dec 2025 security patch"
        ]
    }
    // ... rest of your logs array ...
];

// Logic for the live monitor preserved
setInterval(() => {
    let load = Math.floor(Math.random() * 50) + 10;
    const cpuLoad = document.getElementById('cpu-load');
    const cpuBar = document.getElementById('cpu-bar');
    if (cpuLoad) cpuLoad.innerText = (load/10).toFixed(1) + "GHz";
    if (cpuBar) cpuBar.style.width = load + "%";
}, 1500);

// Logic for logs preserved
const msgs = ["> Scanned AP slot", "> Handshake OK", "> Mapping sectors", "> Mirror synced"];
setInterval(() => {
    const feed = document.getElementById('log-feed');
    if (feed) {
        const p = document.createElement('p');
        p.innerText = msgs[Math.floor(Math.random() * msgs.length)];
        feed.appendChild(p);
        if(feed.children.length > 5) feed.removeChild(feed.children[0]);
    }
}, 4000);