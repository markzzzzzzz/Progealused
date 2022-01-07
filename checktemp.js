// 0-20 liiga külm    -1
// 21-40 paras         0
// 41-60 liiga kuum    1
// checkTemp(temp)

function checkTemp(temp){

    if (temp<21) {
        return -1
    }
    else if (temp >= 41) {
        return 1
    }
    else{
        return 0
    }

}