// import { TextGeometry } from 'https://unpkg.com/browse/three@0.142.0/examples/jsm/geometries/TextGeometry.js';


import * as THREE from 'three';
import { FontLoader } from 'https://unpkg.com/three@0.142.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://unpkg.com/three@0.142.0/examples/jsm/geometries/TextGeometry.js';



var gWidth = window.innerWidth;
  var gHeight = window.innerHeight;
  var ratio = gWidth / gHeight;
//   var borders = [40, 24] //indicate where the ball needs to move in mirror position


//   var light = new THREE.AmbientLight(0xffffff, 0.5);
//   var light1 = new THREE.PointLight(0xffffff, 0.5);
//   light1.position.set(0, 5, 0);
// light1.castShadow = true;

  //  set the renderer 
  var renderer = new THREE.WebGLRenderer();
  var camera = new THREE.PerspectiveCamera();
  // camera.position.set(10, 10, 100   );

  camera.position.z = 500
  // camera.lookAt(new THREE.Vector3(0, 0, 0));
  //properties for casting shadow
//   renderer.shadowMap.enabled = true;
//   renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  renderer.setSize(gWidth, gHeight);
  document.body.appendChild(renderer.domElement);

  var scene = new THREE.Scene();
//   scene.add(light);
//   scene.add(light1);

// var ground = new THREE.Mesh(new THREE.BoxGeometry(10, 0.5, 10),new THREE.MeshLambertMaterial())
// ground.receiveShadow = true;
//   scene.add(ground)
  var geometry;


  var loader = new FontLoader();
  var mesh;





  loader.load('fonts/Roboto_Medium.json', function(font) {

    var geometry = new TextGeometry('Hello three.js!', {
      font: font,
      size: 8,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelSegments: 5
    });

    // var material = new THREE.MeshLambertMaterial({
    //   color: 0xF3FFE2
    // });
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    mesh = new THREE.Mesh(geometry, material);
    // mesh.position.set(0, 2, 0);
    // mesh.scale.multiplyScalar(0.01)
    // mesh.castShadow = true;
    scene.add(mesh);

  });

  // requestAnimationFrame(render);

  function render() {
    // if (mesh){ mesh.rotation.y += 0.01;mesh.rotation.z += 0.007;}
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  render();
  