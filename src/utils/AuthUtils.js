/*global chrome*/

export function generateUniqueToken() {
    return crypto.randomUUID();
}

export function getLoggedInUserEmail() {
    // TODO
    // var email = '';
    // chrome
    //     .identity
    //     .getProfileUserInfo({ 'accountStatus': 'ANY' })
    //     .then((userInfo) => {
    //         email = userInfo.email;
    //     });

    // return email;
}