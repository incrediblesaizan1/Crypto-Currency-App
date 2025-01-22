export const convertDate = (milliseconds) => {
    const myDate = new Date(milliseconds);
    const day = myDate.getDate();
    const month = myDate.getMonth() + 1;


    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}`;
}


export const convertDate2 = (number) => {
    let myDate = new Date(number)
    return myDate.getDate() + "/" + (myDate.getMonth() + 1);
}