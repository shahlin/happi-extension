import { CLIENT_ID_STORAGE_KEY } from "../../utils/Constants";
import { getKeyPromise } from "../../utils/StorageUtils";

export async function getOverallSatisfactionStats() {
    try {
        const clientId = await getKeyPromise(CLIENT_ID_STORAGE_KEY);
        const response = await fetch(process.env.REACT_APP_API_URL + '/stats/' + clientId + '/overall-satisfaction');
        return response.json();
    } catch (error) {
        return {};
    }
}