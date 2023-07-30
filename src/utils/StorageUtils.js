/*global chrome*/

import { isDevEnv } from "./EnvUtils";

export function getKeyPromise(key) {
    if (isDevEnv()) {
        return null
    }

    return chrome.storage.sync.get(key).then(function (value) {
        return value[key]
    });
}

export function storeKey(key, value) {
    if (isDevEnv()) {
        return null
    }

    chrome.storage.sync.set({ [key]: value });
}

export function remove(key) {
    if (isDevEnv()) {
        return null
    }

    chrome.storage.sync.remove(key);
}