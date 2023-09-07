export function getProductiveTimeStats(data) {
    if (data == null || Object.keys(data).length === 0) {
        return {}
    }

    return data.productive_time_of_day
}