import * as THREE from 'three';
import WEBGL from './webGL';

export default class MainCanvas {
  constructor(canvas) {
    this.animate = this.animate.bind(this);
    this.resizeRendererToDisplaySize = this.resizeRendererToDisplaySize.bind(this);

    if (WEBGL.isWebGLAvailable()) {
      this.createScene(canvas);
      this.addCube();
      this.addLine();
      this.animate();
    } else {
      const warning = WEBGL.getWebGLErrorMessage();
      document.getElementById('error-container').appendChild(warning);
    }
    
  }

  createScene(canvas) {
    this.scene = new THREE.Scene();
    const fov = 75; //degrees vertical
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 100;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    this.renderer = new THREE.WebGLRenderer({canvas});
    document.body.appendChild(this.renderer.domElement);
    
    this.camera.position.set(0, 0, 15);
    this.camera.lookAt(0, 0, 0);
  }

  addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    this.cube = new THREE.Mesh(geometry, material);

    this.scene.add(this.cube);
  }

  addLine() {
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 10, 0));
    geometry.vertices.push(new THREE.Vector3(10, 0, 0));

    const line = new THREE.Line(geometry, material);

    this.scene.add(line);
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