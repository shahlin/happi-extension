/*global chrome*/

export function getKeyPromise(key) {
    return chrome.storage.sync.get(key).then(function (value) {
        return value[key]
    });
}

export function storeKey(key, value) {
    console.log("Setting key value... " + JSON.stringify({ [key]: value }))
    chrome.storage.sync.set({ [key]: value });
}

export function remove(key) {
    chrome.storage.sync.remove(key);
}