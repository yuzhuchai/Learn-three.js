# Learn-three.js

[Three.js Official Site](https://threejs.org/)


[01.Basic Scene](#baisc-componments-scene-setup) - [Code]()
[02.Drawing Line](#) - [Code]()


### BAISC COMPONMENTS SCENE SETUP 

Like any 3D environment, we need some basic components when creating with Three.js - **Scene**, **Camera**, and **Render**


    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


1. setting up the scene 
2. setting up the camera, in Three.js there are actually multiple cameras, prespective is one.  
   1. The first attribute is the field of view. FOV is the extent of the scene that is seen on the display at any given moment. The value is in degrees.
   2. The second one is the aspect ratio. You almost always want to use the width of the element divided by the height, or you'll get the same result as when you play old movies on a widescreen TV - the image looks squished.
   3. The next two attributes are the near and far clipping plane. What that means, is that objects further away from the camera than the value of far or closer than near won't be rendered. 
3. render: use WebGL 
4. then we need to set the size of the render, and add the renderer to the dom element to display on the webpage 


### CREATE OBJECTS INSIDE THE SCENE

Now we have the scene setup we need to add geomentries inside the scene 

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;


1. to create the object we ned a boxGeomentry, This is an object that containes all the points and fill faces of the cube. 
2. a Geometry need a material,
3. then we need a mesh, this is an obaject that takes a geometry and aplies the material to it.
4. with scene.add we can add this mesh to the scene, with default it will be add to the (0,0,0) position 
5. we need to move the camera back a little , so the camera is not inside the shape. 


### RENDER THE SCENE 

        renderer.render( scene, camera );


### or render with ANIMATION  

        function animate(){
            requestAnimationFrame( animate )
            renderer.render( scene, camera );
        }

        animate(); 

with a callback function, we create a loop that cause the renderer to draw the scene every time the screen is refreshed. 

        cube.rotation.x += 0.01 
        cube.rotation.y += 0.01
        cube.rotation.z += 0.03;


Finally we need to animate the cube, with modifying the positions this should be placed after requestAnimationFrame and before the render function.






