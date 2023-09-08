export function getWorkDoneSatisfactionStats(data) {
    if (data == null || Object.keys(data).length === 0) {
        return {}
    }

    return data.work_done_satisfaction
}