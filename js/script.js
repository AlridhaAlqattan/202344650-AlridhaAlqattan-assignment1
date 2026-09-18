const time = document.querySelector('#time'); // refers to the time id in the html
const date = document.querySelector('#date'); // refers to the date id in the html

/**
 * @param {Date} date
 * 
 */
function showTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

} // A function to Show the time as hh:mm:ss 

function showDate(date) { // A function to show the date as dd:mm:yy
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
}

setInterval(() => { // Used to update the time and date every 1000 milisecond
    const now = new Date();
    time.textContent = showTime(now);
    date.textContent = showDate(now);
}, 1000);