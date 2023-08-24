browser.commands.onCommand.addListener((command) => {
    if (command === "switch-tab") {
        browser.tabs.query({}).then((tabs) => {
            for (let tab of tabs) {
                if (tab.url.includes("https://chat.openai.com/")) {
                    browser.tabs.update(tab.id, { active: true });
                    return;
                }
            }
        });
    }
});
