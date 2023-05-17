import { CLIENT_ID_STORAGE_KEY, CLIENT_EMAIL_STORAGE_KEY } from "./Constants";
import { getKeyPromise } from './StorageUtils'
import { getCurrentSystemDate, getCurrentSystemTime, getSystemTimezone } from './TimeUtils'

export async function callStoreAnswersAPI(answers) {
    const clientId = await getKeyPromise(CLIENT_ID_STORAGE_KEY);
    const clientEmail = await getKeyPromise(CLIENT_EMAIL_STORAGE_KEY);

    const signature = getAwsSignature();

    await fetch(process.env.REACT_APP_API_URL + '/save', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(buildStoreAnswerRequest(clientId, clientEmail, answers)),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Origin': '*',
            ...signature.headers
        },
    }).then((response) => {
        return Promise.resolve()
    }).catch((error) => {
        return Promise.reject(error);
    });
}

function buildStoreAnswerRequest(clientId, clientEmail, answers) {
    return {
        "client_id": clientId,
        "client_email": clientEmail,
        "answer": {
            "overall_productivity": answers.overall_productivity,
            "productive_time_of_day": answers.productive_time_of_day,
            "distractions_frequency": answers.distractions_frequency,
            "worked_with_others_frequency": answers.worked_with_others_frequency,
            "interruptions_frequency": answers.interruptions_frequency,
            "amount_of_work_done": answers.amount_of_work_done,
            "high_quality_work_done": answers.high_quality_work_done,
            "breaks_frequency": answers.breaks_frequency,
            "sleep_quality": answers.sleep_quality
        },
        "system_date": getCurrentSystemDate(),
        "system_time": getCurrentSystemTime(),
        "timezone": getSystemTimezone()
    }
}

function getAwsSignature() {
    const aws4 = require('aws4');
    const CREDS = { accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY, secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY }

    return aws4.sign({
        service: 'lambda',
        region: 'eu-west-1',
        host: process.env.REACT_APP_API_URL
    }, CREDS)
}