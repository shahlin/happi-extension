/*global chrome*/
import { getKeyPromise, storeKey } from './StorageUtils';
import { CLIENT_ID_STORAGE_KEY, CLIENT_EMAIL_STORAGE_KEY } from './Constants';

export function generateUniqueToken() {
    return crypto.randomUUID();
}

export async function getEmailPromise() {
    const email = await chrome.identity.getProfileUserInfo({ 'accountStatus': 'ANY' }).then(function (userInfo) {
        return userInfo.email;
    });

    return email;
}

export async function storeAuthKeys() {
    let clientId = await getKeyPromise(CLIENT_ID_STORAGE_KEY);
    let email = await getKeyPromise(CLIENT_EMAIL_STORAGE_KEY);

    if (!clientId) {
        console.log("First time usage, creating client ID...");
        clientId = generateUniqueToken();
        storeKey(CLIENT_ID_STORAGE_KEY, clientId);
    }

    if (!email) {
        email = await getEmailPromise();
        storeKey(CLIENT_EMAIL_STORAGE_KEY, email);
    }

    console.log("CLIENT ID: " + clientId);
    console.log("CLIENT EMAIL: " + email);
}