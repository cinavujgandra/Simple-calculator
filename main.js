let sumStr = ""
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");

const char = (e) => {
    sumStr = sumStr.concat(e.dataset.value)
    result1.innerHTML = sumStr
    result2.innerHTML = `=${eval(sumStr)}`
}

const equal = () => {
    result2.innerHTML = `=${eval(sumStr)}`
}


const cls = () => {
    sumStr = ""
    result1.innerHTML = ""
    result2.innerHTML = ""
}
