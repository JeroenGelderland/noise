function generateId(){
    id = ""
    for(i=0; i< 64; i++){
        id += Math.round(Math.random() *10)
    }
    return id
}