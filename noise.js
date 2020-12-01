
function setImage(){
    let imageData = context.createImageData(w, h)

    function setPixel(imageData, x, y, r, g, b, a){

        var index = (x + y * imageData.width);
        imageData.data[index * 4 + 0] = r;
        imageData.data[index * 4 + 1] = g;
        imageData.data[index * 4 + 2] = b;
        imageData.data[index * 4 + 3] = a;
    }

    function random(){
        return Math.floor(Math.random() * 255); 
    }
    
    let cellsize = 1;
    for (let i = 0; i < imageData.width; i += cellsize)
    {
        for (let j = 0; j < imageData.height; j += cellsize)
        {
            let diff = ((j / cellsize) % 2) * cellsize;
            for ( x = i + diff; (x < i + diff + cellsize) && (x < imageData.width); x++)
            {
                for (let y = j; y < j + cellsize; y++)
                {
                    // value = randomBool() ? 255 : 0
                    value = getClosestSpot(x, y)

                    //hier zijn wat verschillene settings 
                    setPixel(imageData, x, y, 256 - value* .5 , 256 -  value , 256 -  value * 2, 256)
                    // setPixel(imageData, x, y, value, value * .3, Math.tan(value)*10, 256)
                    // setPixel(imageData, x, y, 256-value, x, y, 256);
                }
            }
        }
    }

    context.putImageData(imageData,0,0)
}

function convertValue(value){}


setImage()

// setInterval(() => {
//     moveSpots()
// }, 100);

// setInterval(() => {
//     setImage()
// }, 100);







