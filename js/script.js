const time= document.querySelector('#time');
const date= document.querySelector('#date');

/**
 * @param {Date} date
 * 
 */
function showTime(date) {
    const hours= date.getHours();
    const minutes= date.getMinutes();
    const seconds= date.getSeconds();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

function showDate(date) {
    const day= date.getDate();
    const month= date.getMonth() + 1;
    const year= date.getFullYear();

    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
}

setInterval(() => {
    const now = new Date();
    time.textContent = showTime(now);
    date.textContent = showDate(now);
}, 1000);