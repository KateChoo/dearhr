let scene, camera, renderer, cube, geometry;

    init();
    Go();
    window.addEventListener('resize', onWindowResize)

    function init(){
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      camera.position.z = 8;
      camera.position.y = -1;
      controls = new THREE.OrbitControls(camera, renderer.domElement)
 
      createTexture(geometry, 0x44aa88, 0)
      createWire(geometry, 0x44aa88, 0)
    };

    function createWire(geometry, color, x){
      geometry = new THREE.BoxGeometry(3,5,3)            
      const texture = new THREE.TextureLoader().load('https://stat.ameba.jp/user_images/95/fb/10053825201.jpg');
      const material2 = new THREE.MeshBasicMaterial({ map: texture, wireframe: true });
      cube2 = new THREE.Mesh(geometry, material2);                            
      scene.add(cube2);                                                       
      camera.position.x = x;
    };

    function createTexture(geometry, color, x){  
      geometry = new THREE.BoxGeometry(1, 1, 1);
      var cubeMaterials = [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/4.png'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/2.png'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/5.png'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/6.png'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/1.png'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/3.png'), side: THREE.DoubleSide }),
      ]
      var material = new THREE.MeshFaceMaterial(cubeMaterials);
      cube = new THREE.Mesh( geometry, material);
      scene.add(cube);

      cube.position.x = x;
    }

    function animate(){
      //cube.rotation.x += 0.001;
      //cube.rotation.y += 0.005;
    };
 
    function render(){
      renderer.render(scene, camera);
    }
    function Go(){
      requestAnimationFrame( Go );
      animate()
      render();
    };
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }; 