class Image{
    constructor(heigth, width, spotAmount){
        this.heigth = heigth
        this.width = width
        this.spotAmount = spotAmount
        this.spots = []

        this.createCanvas()
        this.generateSpots()
        this.setImage()
    }

    MoveSpots(){
        setInterval(() => {
            this.spots.forEach(spot => {
                spot.move()
                // spot.draw()
            })
            image.setImage()
        }, 100);
    }

    createCanvas(){
        this.canvas = document.createElement('canvas')
        this.canvas.height = this.heigth
        this.canvas.width = this.width
        this.context = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
    }

    setPixel(x, y, r, g, b, a){

        var index = (x + y * this.imageData.width);
        this.imageData.data[index * 4 + 0] = r;
        this.imageData.data[index * 4 + 1] = g;
        this.imageData.data[index * 4 + 2] = b;
        this.imageData.data[index * 4 + 3] = a;
    }

    setImage(){
        this.imageData = this.context.createImageData(this.width, this.heigth)

        let cellsize = 1;
        for (let i = 0; i < this.imageData.width; i += cellsize)
        {
            for (let j = 0; j < this.imageData.height; j += cellsize)
            {
                let diff = ((j / cellsize) % 2) * cellsize;
                for (let x = i + diff; (x < i + diff + cellsize) && (x < this.imageData.width); x++)
                {
                    for (let y = j; y < j + cellsize; y++)
                    {
                        // value = randomBool() ? 255 : 0
                        let value = this.getDistanceToClosestSpot(x, y)
    
                        //hier zijn wat verschillene settings 
                        // this.setPixel(x, y, 256 - value* .5 , 256 -  value , 256 -  value * 2, 256)
                        // this.setPixel(x, y, value,(value), this.width - y, 256)
                        // this.setPixel(x, y, value, value * .3, Math.tan(value)*10, 256)
                        this.setPixel(x, y, 256-value, x, y, 256);
                        // this.setPixel(x, y, (100 * y / 256), (100 * x / 256),value, 256);                      

                    }
                }
            }
        }
    
        this.context.putImageData(this.imageData,0,0)
    }

    generateSpots(){
        for(let i=0;i < this.spotAmount; i++){
            this.spots.push(new Spot(this))    
        }
        this.closestSpot = this.spots[0];
    }

    getDistanceToClosestSpot(x,y){
        let closestValue = this.closestSpot.getDistance( x, y)
        this.spots.forEach(spot => {
            let spotValue = spot.getDistance(x, y)
            if(closestValue > spotValue){
                closestValue = spotValue
                this.closestSpot = spot
            }
        })
        return closestValue
    }

}

