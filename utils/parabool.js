function paraboolValue(x){
    y = Math.pow(x-350,2) *.01
    return getActualValue(y)
}
// 185 515

function getActualValue(x){
    if(x > 256){
        x = 256 - (x % 256)
    }
    return x
}