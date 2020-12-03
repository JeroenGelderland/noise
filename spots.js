const AMOUNT_OF_SPOTS = 6

class Spot{
    constructor(image){
        this.image = image
        this.xvelocity = 0
        this.yvelocity = 0
        this.x = random(image.heigth)
        this.y = random(image.width)
        this.color = {r:randomBool(),g:randomBool(),b:randomBool()}
    }

    draw(){
        this.image.context.beginPath();
        this.image.context.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
        this.image.context.fill()
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

    getDistance(x, y){
        let dx = Math.abs(this.x - x)
        let dy = Math.abs(this.y - y)
        return Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2))
    
        
    }
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
