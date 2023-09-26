/*global chrome*/

export function generateUniqueToken() {
    return crypto.randomUUID();
}

export async function getEmailPromise() {
    const email = await chrome.identity.getProfileUserInfo({ 'accountStatus': 'ANY' }).then(function (userInfo) {
        return userInfo.email;
    });

    return email;
}