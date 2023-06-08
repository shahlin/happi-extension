import { CLIENT_ID_STORAGE_KEY, CLIENT_EMAIL_STORAGE_KEY } from "./Constants";
import { getKeyPromise } from './StorageUtils'
import { getCurrentSystemDate, getCurrentSystemTime, getSystemTimezone } from './TimeUtils'

export async function callStoreAnswersAPI(answers) {
    const clientId = await getKeyPromise(CLIENT_ID_STORAGE_KEY);
    const clientEmail = await getKeyPromise(CLIENT_EMAIL_STORAGE_KEY);

    await fetch(process.env.REACT_APP_API_URL + '/answers/', {
        method: 'POST',
        body: JSON.stringify(buildStoreAnswerRequest(clientId, clientEmail, answers)),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
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
            "overall_productivity": answers.overall_productivity.toUpperCase(),
            "productive_time_of_day": answers.productive_time_of_day.toUpperCase(),
            "distractions_frequency": answers.distractions_frequency.toUpperCase(),
            "worked_with_others_frequency": answers.worked_with_others_frequency.toUpperCase(),
            "interruptions_frequency": answers.interruptions_frequency.toUpperCase(),
            "amount_of_work_done": answers.amount_of_work_done.toUpperCase(),
            "high_quality_work_done": answers.high_quality_work_done.toUpperCase(),
            "breaks_frequency": answers.breaks_frequency.toUpperCase(),
            "sleep_quality": answers.sleep_quality.toUpperCase()
        },
        "system_date": getCurrentSystemDate(),
        "system_time": getCurrentSystemTime(),
        "timezone": getSystemTimezone()
    }
}