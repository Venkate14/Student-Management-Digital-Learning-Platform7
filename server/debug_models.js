const https = require('https');
const fs = require('fs');

// User's key from index.js
const API_KEY = "AIzaSyBXWPUIiDGA4OCKwXKNnTOFfB1U3ewTkaA";
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

console.log("Querying Google API for available models...");

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        console.log("Status Code:", res.statusCode);
        try {
            const json = JSON.parse(data);
            fs.writeFileSync('available_models.json', JSON.stringify(json, null, 2));
            console.log("Models saved to available_models.json");
        } catch (e) {
            console.log("Failed to parse JSON:", data);
        }
    });
}).on('error', (err) => {
    console.error("Network Error:", err.message);
});
