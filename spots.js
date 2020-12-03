class Spot{
    constructor(image){
        this.image = image
        this.xvelocity = 0
        this.yvelocity = 0
        this.x = random(image.heigth)
        this.y = random(image.width)
        this.color = `rgb(${Math.round(random(256))} ${Math.round(random(256))} ${Math.round(random(256))})`
        // console.log(this.color)
    }

    draw(){
        this.image.context.beginPath();
        this.image.context.arc(this.x, this.y, 5.5, 0, 2 * Math.PI);
        this.image.context.fillStyle = this.color
        this.image.context.fill()
    }

    setPos(x,y){
        this.x = x
        this.y = y
        this.draw()
    }

    move(){
        this.xvelocity += randomBool() ? random(2) : random(2) * -1
        this.yvelocity += randomBool() ? random(2) : random(2) * -1

        this.xvelocity = this.xvelocity < 3 ? this.xvelocity : 3
        this.yvelocity = this.yvelocity < 3 ? this.yvelocity : 3
        
        this.xvelocity = this.x <= this.image.heigth && this.x >= 0 ? this.xvelocity : this.xvelocity * -1
        this.yvelocity = this.y <= this.image.width && this.y >= 0 ? this.yvelocity : this.yvelocity * -1

        this.x += this.xvelocity
        this.y += this.yvelocity
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
    return Math.round(Math.random()*10) % 2 == 0
}

function moveSpots(){
    spots.forEach(spot => {
        spot.move()
    })
}
