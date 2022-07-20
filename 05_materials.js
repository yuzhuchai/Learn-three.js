import * as THREE from 'three'
import { GUI } from "../modules/dat.gui.module.js"



const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// create a sphere array: 
let sph = []
let mesh = []
let materials = []
let numOfSph = 7


// creating lights -------------------------------------------------------
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
dirLight.position.set( 0, 0, 1 ).normalize();
scene.add( dirLight );

const pointLight = new THREE.PointLight( 0xffffff, 1.5 );
pointLight.position.set( 0, 100, 90 );
scene.add( pointLight );



// creating materials ------------------------------------

// baisc material
let baiscMaterial = new THREE.MeshBasicMaterial({ color: 0x3e5df0 })
materials.push(baiscMaterial)


// depth material 
// A material for drawing geometry by depth. Depth is based off of the camera near and far plane. White is nearest, black is farthest.
let depthMaterial = new THREE.MeshDepthMaterial({ color: 0x3e5df0 })
materials.push(depthMaterial)


// MeshLambertMaterial
let lambertMaterial = new THREE.MeshLambertMaterial({ color: 0x3e5df0 })
materials.push(lambertMaterial)


//MeshMatcapMaterial
let normalMaterial = new THREE.MeshNormalMaterial({ color: 0x3e5df0 })
materials.push(normalMaterial)


//meshPhong Material
let phongMaterial = new THREE.MeshPhongMaterial({ color: 0x3e5df0 })
materials.push(phongMaterial)


//standard Materal
let standardMaterial = new THREE.MeshStandardMaterial({ color: 0x3e5df0 })
materials.push(standardMaterial)


// MeshToonMaterial
let toonMaterial = new THREE.MeshToonMaterial({ color: 0x3e5df0 })
materials.push(toonMaterial)


// create geometry and adding Geo and material to mesh -----------
for (let i = 0 ; i < numOfSph; i++){
    // using a spehere geometry 
    sph.push(new THREE.SphereGeometry(0.5, 32, 16))
    mesh.push(new THREE.Mesh(sph[i], materials[i]))
    if(i < 3){
        // y = -1 
        mesh[i].position.y = 2
    } else if (i > 2 && i < 6){
        mesh[i].position.y = 0
    } else if (i > 5){
        mesh[i].position.y = -2
    }
    
    mesh[i].position.x -= (3 - 3 * (i%3))
    // mesh[i].position.y 
    scene.add(mesh[i])
}

scene.background = new THREE.Color( 0xff0000 );


camera.position.z = 5;



// // camera.position.z = 5
function render() {
    requestAnimationFrame(render);
    for(let i = 0; i < numOfSph; i++){
        mesh[i].rotation.x += 0.01 
        mesh[i].rotation.y += 0.01 
        mesh[i].rotation.z += 0.01 
    }
    renderer.render(scene, camera);
  }

// change the background color
render();

// renderer.render(scene, camera);


const gui = new GUI();
const lightFolder = gui.addFolder('Ambient Light')
lightFolder.add(dirLight, "intensity", 0, 5).name('dirlight intensity')
lightFolder.add(pointLight, "intensity", 0, 5).name('plight intensity')



// baisc material GUI 
const basicMaterialFolder = gui.addFolder('basic Material')
const basicMaterialParams = {
    baiscColor: baiscMaterial.color.getHex()
}
basicMaterialFolder.addColor(basicMaterialParams, 'baiscColor').onChange(value => baiscMaterial.color.set(value))
basicMaterialFolder.add(baiscMaterial, 'wireframe')


// depth mateiral GUI 
const DepthMaterialFolder = gui.addFolder('depth Material')
DepthMaterialFolder.add(depthMaterial, 'wireframe')



// lambertMaterial GUI 
const lambertMaterialFolder = gui.addFolder('lambert Material')
const lambertMaterialParams = {
    lambertColor: lambertMaterial.color.getHex(),
    lambertEmissive: lambertMaterial.emissive.getHex(),
}
lambertMaterialFolder.addColor(lambertMaterialParams, 'lambertColor').onChange(value => lambertMaterial.color.set(value))
lambertMaterialFolder.addColor(lambertMaterialParams, 'lambertEmissive').onChange(value => lambertMaterial.emissive.set(value))
lambertMaterialFolder.add( lambertMaterial, 'reflectivity', 0, 1 );
lambertMaterialFolder.add( lambertMaterial, 'refractionRatio', 0, 1 );
lambertMaterialFolder.add(lambertMaterial, 'wireframe')



// phong material Gui 
const phongMaterialFolder = gui.addFolder('phong Material')
const phongMaterialParams = {
    phongColor: phongMaterial.color.getHex(),
    phongEmissive: phongMaterial.emissive.getHex(),
    phongSpecular: phongMaterial.specular.getHex()
}
phongMaterialFolder.addColor(phongMaterialParams, 'phongColor').onChange(value => phongMaterial.color.set(value))
phongMaterialFolder.addColor(phongMaterialParams, 'phongEmissive').onChange(value => phongMaterial.emissive.set(value))
phongMaterialFolder.addColor(phongMaterialParams, 'phongSpecular').onChange(value => phongMaterial.specular.set(value))
phongMaterialFolder.add( phongMaterial, 'shininess', 0, 100 );
phongMaterialFolder.add( phongMaterial, 'reflectivity', 0, 1 );
phongMaterialFolder.add( phongMaterial, 'refractionRatio', 0, 1 );
phongMaterialFolder.add( phongMaterial, 'wireframe')




// standard Material GUI 
const standardMaterialFolder = gui.addFolder('standard Material')
const standardMaterialParams = {
    standardColor: standardMaterial.color.getHex(),
    standardEmissive: standardMaterial.emissive.getHex(),
}
standardMaterialFolder.addColor(standardMaterialParams, 'standardColor').onChange(value => standardMaterial.color.set(value))
standardMaterialFolder.addColor(standardMaterialParams, 'standardEmissive').onChange(value => standardMaterial.emissive.set(value))
standardMaterialFolder.add( standardMaterial, 'roughness', 0, 1 );
standardMaterialFolder.add( standardMaterial, 'metalness', 0, 1 );
standardMaterialFolder.add(standardMaterial, 'wireframe')



// toon material GUIs
const toonMaterialFolder = gui.addFolder('toon Material')
const toonMaterialParams = {
    toonColor: toonMaterial.color.getHex()
}
toonMaterialFolder.addColor(toonMaterialParams, 'toonColor').onChange(value => toonMaterial.color.set(value))
toonMaterialFolder.add(toonMaterial, 'wireframe')


