export default class MainCanvas {
  constructor(canvas) {
    this.animate = this.animate.bind(this);
    this.resizeRendererToDisplaySize = this.resizeRendererToDisplaySize.bind(this);
    
    this.createScene(canvas);
    this.addCube();
    this.animate();
  }

  createScene(canvas) {
    this.scene = new THREE.Scene();
    const fov = 75; //degrees vertical
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 10;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    this.renderer = new THREE.WebGLRenderer({canvas});
    // this.renderer.setSize(
    //   window.innerWidth, window.innerHeight
    // );
    document.body.appendChild(this.renderer.domElement);
    
  }

  addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;
  }

  animate(time) {
    time *= 0.001;
    
    if (this.resizeRendererToDisplaySize()) {
      const canvas = this.renderer.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }

    this.cube.rotation.x = time;
    this.cube.rotation.y = time;

    this.renderer.render(this.scene, this.camera);
    
    requestAnimationFrame(this.animate.bind(this));
  }

  resizeRendererToDisplaySize() {
    const canvas = this.renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = canvas.clientWidth * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      this.renderer.setSize(width, height, false);
    }
    return needResize;
  }
}