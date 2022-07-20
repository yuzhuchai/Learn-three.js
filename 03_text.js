import * as THREE from "three"
import { FontLoader } from 'https://unpkg.com/three@0.142.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://unpkg.com/three@0.142.0/examples/jsm/geometries/TextGeometry.js';


let width = window.innerWidth
let height = window.innerHeight

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)


renderer.setSize(width, height);
document.body.appendChild(renderer.domElement)



let loader = new FontLoader()
loader.load('fonts/helvetiker_bold.typeface.json', function(font){
    let textGeo = new TextGeometry('plums in the icebox', {
        font:font, 
        size: 8,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
    })

    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00} )

    const textMesh = new THREE.Mesh( textGeo, material )
    scene.add(textMesh)

    // textMesh.rotation.x = 90;
})

// to render the text, must use requestAnimationFrame?
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
render();

camera.position.z = 500


// renderer.render(scene, camera);

