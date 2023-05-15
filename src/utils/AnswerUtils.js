import { SELECTED_ANSWERS_STORAGE_KEY, LAST_SYNCED_AT_STORAGE_KEY } from "./Constants";
import { getKeyPromise, remove } from "./StorageUtils";
import { dateIsToday } from "./TimeUtils";

export async function clearStoredAnswersFromPreviousDay() {
    const answersLastSavedAt = await getKeyPromise(LAST_SYNCED_AT_STORAGE_KEY);
    var date = new Date(answersLastSavedAt);

    if (!dateIsToday(date)) {
        remove(SELECTED_ANSWERS_STORAGE_KEY);
    }
}

export async function handleAnswersIfExistsInStorage(callback, key) {
    const storedAnswers = await getKeyPromise(SELECTED_ANSWERS_STORAGE_KEY);

    if (storedAnswers) {
        callback(storedAnswers[key]);
    }
}