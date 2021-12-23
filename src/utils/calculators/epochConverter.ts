export const getCurrentUnixTime = () => (Math.floor(Date.now() / 1000)).toString();

export const epochToHumanReadableDate = (unixTime: string): string => {
    const d = new Date(0);
    let seconds = Number(unixTime);

    if (unixTime.length > 11) {
        seconds = Math.floor(seconds / 1000);
    }

    d.setUTCSeconds(seconds);

    return d.toString();
}

export const humanReadableDateToEpoch = (datetime: string, timezone: string = 'local'): string => {
    const epoch = new Date(datetime).getTime()
    const unixTime = Math.floor(epoch / 1000);
    const offset = timezone === 'gmt'
        ? (new Date(datetime)).getTimezoneOffset() * 60
        : 0

    return (unixTime - offset).toString();
}
