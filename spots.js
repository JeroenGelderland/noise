const AMOUNT_OF_SPOTS = 6

class Spot{
    constructor(color){
        this.xvelocity = 0
        this.yvelocity = 0
        this.x = random(h)
        this.y = random(w)
        this.color = color
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
        context.fillStyle = this.color
        context.fill()
    }

    setPos(x,y){
        this.x = x
        this.y = y
        this.draw()
    }

    move(){
        this.xvelocity = randomBool() ? Math.random() : Math.random() * -1
        this.yvelocity = randomBool() ? Math.random() : Math.random() * -1
        this.x += this.xvelocity
        this.y += this.yvelocity
        // console.log(JSON.stringify(this))        
    }
}

let spots = []
for(i=0;i < AMOUNT_OF_SPOTS; i++){
    spots.push(new Spot())    
}

spots.forEach(spot => {
    spot.draw()
})

function getClosestSpot(x,y){
    closestSpot = spots[0]
    closestValue = getShortedDistance(closestSpot, x, y)
    spots.forEach(spot => {
        spotValue = getShortedDistance(spot, x, y)
        if(closestValue > spotValue){
            closestValue = spotValue
            closestSpot = spot
        }
    })
    return closestValue
}

function getShortedDistance(spot, x, y){
    dx = Math.abs(spot.x - x)
    dy = Math.abs(spot.y - y)
    // return dx > dy ? dx : dy
    return Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2))

    
}

function random(max){
    return Math.floor(Math.random() * max); 
}

function randomBool(){
    return Math.random() > .5
}

function moveSpots(){
    spots.forEach(spot => {
        spot.move()
    })
}

getClosestSpot(50,50)