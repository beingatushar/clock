const hour = document.querySelectorAll(".needle")[0];
const minute = document.querySelectorAll(".needle")[1];
const second = document.querySelectorAll(".needle")[2];
setInterval(() => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    hour.style.transform = `rotate(${getHourRotation(h,m,s)}deg)`;
    minute.style.transform = `rotate(${getMinuteRotation(m,s)}deg)`;
    second.style.transform = `rotate(${getSecondRotation(s)}deg)`;
}, 1000);

function getHourRotation(h, m, s) {
    return 30 * h + m / 2 + s / 3600
}

function getMinuteRotation(m, s) {
    return 6 * m + s / 60
}

function getSecondRotation(s) {
    return 6 * s
}