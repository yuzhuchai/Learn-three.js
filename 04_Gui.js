import * as THREE from 'three';
import { GUI } from "../modules/dat.gui.module.js"



const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh( geometry, material )
scene.add(cube);

camera.position.z = 5;


// renderer.render(scene, camera);

function animate(){
    requestAnimationFrame( animate )
    renderer.render( scene, camera );
}

animate(); 

let gui = new GUI()
const transformFolder = gui.addFolder('transform')
transformFolder.add(cube.position, "x", -10, 10).name('tx')
transformFolder.add(cube.position, "y", -10, 10).name('ty')
transformFolder.add(cube.position, "z", -10, 10).name('tz')
transformFolder.add(cube.rotation, "x", 0, 360).name('rx')
transformFolder.add(cube.rotation, "y", 0, 360).name('ry')
transformFolder.add(cube.rotation, "z", 0, 360).name('rz')


const materialFolder = gui.addFolder('color')
const materialParams = {
    baiscColor: material.color.getHex()
}
materialFolder.addColor(materialParams, 'baiscColor').onChange(value => material.color.set(value))
materialFolder.add(material, 'wireframe')





