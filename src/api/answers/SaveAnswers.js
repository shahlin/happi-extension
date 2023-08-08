import { CLIENT_EMAIL_STORAGE_KEY, CLIENT_ID_STORAGE_KEY } from "../../utils/Constants";
import { getKeyPromise } from "../../utils/StorageUtils";
import { getCurrentSystemDate, getCurrentSystemTime, getSystemTimezone } from "../../utils/TimeUtils";

export async function saveAnswers(answers) {
    const clientId = await getKeyPromise(CLIENT_ID_STORAGE_KEY);
    const clientEmail = await getKeyPromise(CLIENT_EMAIL_STORAGE_KEY);

    return fetch(process.env.REACT_APP_API_URL + '/answers/', {
        method: 'POST',
        body: JSON.stringify(buildStoreAnswerRequest(clientId, clientEmail, answers)),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
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