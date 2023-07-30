import { generateUniqueToken, getEmailPromise } from "../../utils/AuthUtils";
import { CLIENT_EMAIL_STORAGE_KEY, CLIENT_ID_STORAGE_KEY } from "../../utils/Constants";
import { isDevEnv } from "../../utils/EnvUtils";
import { getKeyPromise, storeKey } from "../../utils/StorageUtils";
import { getSystemTimezone } from "../../utils/TimeUtils";

export async function registerUserIfNotExists() {
    const clientId = await getKeyPromise(CLIENT_ID_STORAGE_KEY);
    if (clientId || isDevEnv()) {
        return
    }

    const newClientId = generateAndStoreClientId()
    const clientEmail = await getAndStoreEmail()

    return registerUser(newClientId, clientEmail)
}

function generateAndStoreClientId() {
    const clientId = generateUniqueToken();
    storeKey(CLIENT_ID_STORAGE_KEY, clientId);

    return clientId
}

async function getAndStoreEmail() {
    const email = await getEmailPromise();
    storeKey(CLIENT_EMAIL_STORAGE_KEY, email);

    return email
}

async function registerUser(clientId, clientEmail) {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/users/register', {
            method: 'POST',
            body: JSON.stringify(buildRegisterClientRequest(clientId, clientEmail)),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

        return response.json()
    } catch (error) {
        throw error
    }
}

function buildRegisterClientRequest(clientId, clientEmail) {
    return {
        "client_id": clientId,
        "client_email": clientEmail,
        "timezone": getSystemTimezone()
    }
}