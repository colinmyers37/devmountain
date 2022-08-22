const createHourString = (hours) => {
    let hoursInt = parseInt(hours)
 if(hoursInt > 12) {
    hoursInt -= 12;
 }
let hoursArr = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
return hoursArr[hoursInt]


}


const createMinuteString = (minutes) => {
if (minutes === '00') {
    return "o'clock"
} else if (parseInt(minutes) >= 10 && parseInt(minutes) < 20) {
    let teensArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    return teensArr[parseInt(minutes[1])]
}
let tensNum = minutes[0]
let onesNum = minutes[1]
let tensArr = ['oh', '', 'twenty', 'thirty', 'forty', 'fifty']
let onesArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
return tensArr[tensNum] + ' ' + onesArr[onesNum]
}




function showTime(time){
    let timeStr = "It's "
    if(timeStr === '00:00' ) {
        return 'midnight.'
    } 
    if (timeStr === '12:00' ) {
        return 'noon.'
    }
    let splitTime = time.split(':')

    let hoursStr = createHourString(splitTime[0]);
    let minutesStr = createMinuteString(splitTime[1]);
    if (parseInt(splitTime[0]) > 12) {
        return timeStr + hoursStr + ' ' + minutesStr + ' ' + 'am.'
    } else {
        return `${timeStr}${hoursStr} ${minutesStr} pm.`
    }

}

showTime('01:18')