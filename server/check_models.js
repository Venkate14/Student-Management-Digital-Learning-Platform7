const { GoogleGenerativeAI } = require("@google/generative-ai");

// Using the key user provided in index.js
const genAI = new GoogleGenerativeAI("AIzaSyBXWPUIiDGA4OCKwXKNnTOFfB1U3ewTkaA");

async function listModels() {
    try {
        const modelsToTry = [
            "gemini-1.5-flash",
            "gemini-pro"
        ];

        console.log("Testing Models...");

        for (const modelName of modelsToTry) {
            try {
                console.log(`Trying: ${modelName}`);
                const m = genAI.getGenerativeModel({ model: modelName });
                const result = await m.generateContent("Hello");
                const response = await result.response;
                console.log(`SUCCESS: ${modelName} works!`);
                return;
            } catch (e) {
                console.log(`FAILED: ${modelName} - ${e.message.split('\n')[0]}`);
            }
        }
        console.log("All attempted models failed.");

    } catch (error) {
        console.log(`Script Error: ${error.message}`);
    }
}

listModels();
