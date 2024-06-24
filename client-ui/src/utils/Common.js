
export const getDatetimeDetail = (timestamp) => {
    let datetime = new Date(timestamp);
    return `${datetime.getDate()}/${datetime.getMonth() + 1}/${datetime.getFullYear()} - ${datetime.getHours()}:${datetime.getMinutes()}`;
}

export const convertTimestampToDatetime = (timestamp) => {
    return new Date(timestamp)
}