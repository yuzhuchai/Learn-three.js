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
let numOfSph = 3


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
materials.push(new THREE.MeshBasicMaterial({ color: 0x00ff00 }))


// depth material 
// A material for drawing geometry by depth. Depth is based off of the camera near and far plane. White is nearest, black is farthest.
materials.push(new THREE.MeshDepthMaterial())






// create geometry and adding Geo and material to mesh -----------
for (let i = 0 ; i < numOfSph; i++){
    // using a spehere geometry 
    sph.push(new THREE.SphereGeometry(0.5, 32, 16))
    mesh.push(new THREE.Mesh(sph[i], materials[i]))
    mesh[i].position.x -= (3 - numOfSph * i)
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

const basicMaterialFolder = gui.addFolder('basic Material')
// basicMaterialFolder.add(materials[0], 'color').name('color')
const basicMaterialParams = {
    baiscColor: materials[0].color.getHex()
}
basicMaterialFolder.addColor(basicMaterialParams, 'baiscColor').onChange(value => materials[0].color.set(value))

const DepthMaterialFolder = gui.addFolder('depth Material')
DepthMaterialFolder.add(materials[2], 'wireframe')
