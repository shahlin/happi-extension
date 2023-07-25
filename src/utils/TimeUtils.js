export function getCurrentSystemDate() {
    return getDateFromDateObject(new Date());
}

export function getCurrentSystemTime() {
    return getTimeFromDateObject(new Date());
}

export function getCurrentTimestamp() {
    return Date.now();
}

export function getCurrentTimeIn12HourFormat() {
    return getTimeFromDateObjectIn12HourFormat(new Date());
}

export function getTimeFromDateObjectIn12HourFormat(date) {
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

export function getDateObjectFromTimestamp(timestamp) {
    return new Date(timestamp);
}

export function getDateFromDateObject(date) {
    return date.toISOString().slice(0, 10);
}

export function getTimeFromDateObject(date) {
    return date.toString().split(" ")[4];
}

export function getSystemTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function dateIsToday(date) {
    // Avoid changing date variable as date is passed by reference
    var copiedDate = new Date(date.getTime());

    if (copiedDate.setHours(0, 0, 0, 0) == (new Date()).setHours(0, 0, 0, 0)) {
        return true;
    }

    return false;
}

export function minutesPassedSince(timestamp) {
    return Math.floor((Date.now() - timestamp) / 1000 / 60);
}

export function getStartDateOfYear() { return new Date().getFullYear() + "-01-01" }

export function getEndDateOfYear() { return new Date().getFullYear() + "-12-31" }

export function getDatesBetween(startDate, endDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= (endDate.addDays(1))) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }

    return dateArray;
}

export function getYearMonthDayFormattedDate(date) {
    const year = date.toLocaleString('default', { year: 'numeric' });
    const month = date.toLocaleString('default', { month: '2-digit' });
    const day = date.toLocaleString('default', { day: '2-digit' });

    return [year, month, day].join('-');
}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}