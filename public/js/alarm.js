chrome.runtime.onInstalled.addListener(async ({ reason }) => {
    const todaysDate = new Date();

    // Notify at 4:30 every day
    const notifyAt = new Date(
        todaysDate.getFullYear(),
        todaysDate.getMonth(),
        todaysDate.getDate(),
        16,
        30,
        0,
        0
    );

    chrome.alarms.create('user-enter-data-alarm', {
        periodInMinutes: 1440, // 24 hours in minutes
        when: notifyAt.getMilliseconds()
    });
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name !== 'user-enter-data-alarm') {
        return;
    }

    chrome.storage.sync.get('last_synced_at').then(function (value) {
        const lastSyncedAtDate = new Date(value['last_synced_at']);
        const todaysDate = new Date();

        if (todaysDate.getDay() === 0 || todaysDate.getDay() === 6) {
            // If weekend, do not remind
            return;
        }

        if (
            lastSyncedAtDate.getFullYear() == todaysDate.getFullYear() &&
            lastSyncedAtDate.getMonth() == todaysDate.getMonth() &&
            lastSyncedAtDate.getDate() == todaysDate.getDate()
        ) {
            // Already added data
        } else {
            chrome.notifications.create(
                `user-enter-data-notification-${Date.now()}`,
                {
                    type: 'basic',
                    iconUrl: '../logo/logo-small-128.png',
                    title: 'HAPPI',
                    message: "Don't forget to fill out your inputs for today!",
                }
            )
        }
    });
});