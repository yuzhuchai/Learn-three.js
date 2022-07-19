

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();


camera.position.set(0,0,20)

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild(renderer.domElement)

const geometry = new THREE.TextGeometry( 'of course ', {
    size: 80,
    height: 5
})

const material = new THREE.MeshBasicMaterial( {color: 0x00ff00 } )
const text = new THREE.Mesh( geometry, material);
scene.add(text)

renderer.render( scene, camera )
// renderer.render