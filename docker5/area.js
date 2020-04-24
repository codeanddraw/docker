function area(diameter){
    const PI = Math.PI
    return PI * ((diameter/2) ** 2)
}
let circleArea = area( process.env.diameter)
console.log(`Area of circle with diameter ${process.env.diameter} is ${circleArea}`)