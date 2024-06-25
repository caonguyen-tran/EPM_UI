
export const getDatetimeDetail = (timestamp) => {
<<<<<<< HEAD
    let datetime = new Date(timestamp)
    return `${datetime.getDate()}/${datetime.getMonth() + 1}/${datetime.getFullYear()} - ${datetime.getHours()}:${datetime.getMinutes()}` 
=======
    let datetime = new Date(timestamp);
    return `${datetime.getDate()}/${datetime.getMonth() + 1}/${datetime.getFullYear()} - ${datetime.getHours()}:${datetime.getMinutes()}`;
>>>>>>> e82222c6a03b7661c399a2b3be114edba209fceb
}

export const convertTimestampToDatetime = (timestamp) => {
    return new Date(timestamp)
}