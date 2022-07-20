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


// creating lights -------------------------------------------------------
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
dirLight.position.set( 0, 0, 1 ).normalize();
scene.add( dirLight );

const pointLight = new THREE.PointLight( 0xffffff, 1.5 );
pointLight.position.set( 0, 100, 90 );
scene.add( pointLight );



let loader = new FontLoader()
loader.load('fonts/helvetiker_bold.typeface.json', function(font){
    let textGeo = new TextGeometry('plums in the icebox', {
        font:font, 
        size: 20,
        height: 5,
        curveSegments: 20, 
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 20
    })

    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00} )

    const material = new THREE.MeshPhongMaterial({ 
      color: 0x3e5df0,
      specular:0x111111,
      shineness: 14,
    })

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

