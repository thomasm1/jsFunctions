import CubeA from './cube-a'
import CubeBAdapter from './cube-b-adapter'

const totalCubes = 5
let cubesMade = 0

const manufactureCube = () => {
    // producing first 5 available cubes
    const width = Math.floor(Math.random() * 10)+1
    const height = Math.floor(Math.random() * 10) + 1
    const depth = Math.floor(Math.random() * 10) + 1
    let cube = new CubeA()
    let success = cube.manufacture(width, height, depth) 
    if (success)  {
        cubesMade = cubesMade+1
    } else {
        // try alternate cubemaker
        console.log(`company A busy, trying cube/create B`)
        cube  = new CubeBAdapter
        success = cube.manufacture(width, height, depth)
        if (success) {
            cubesMade = cubesMade +1
        } else {
            console.log(`Alternate Company b busy, retrying Company A`)
        }
    }
}

const interval = setInterval( () => {
    manufactureCube()  
       if (cubesMade >= totalCubes) {
        clearInterval(interval)
        console.log(`${totalCubes} cubes manufactureed`)
       } 
}, 1000)