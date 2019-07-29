import * as THREE from 'three';
import WEBGL from './webGL';

// https://www.pericror.com/software/creating-3d-objects-with-click-handlers-using-three-js/
// Click handler using raycasting

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_lights_hemisphere.html
// Reference example

export default class MainCanvas {
  constructor(canvas) {
    this.animate = this.animate.bind(this);
    this.resizeRendererToDisplaySize = this.resizeRendererToDisplaySize.bind(this);

    if (WEBGL.isWebGLAvailable()) {
      this.createScene(canvas);
      this.addCube();
      this.addLine();
      this.addLight();
      this.addPlane();
      this.addAxes();

      this.animate();
    } else {
      const warning = WEBGL.getWebGLErrorMessage();
      document.getElementById('error-container').appendChild(warning);
    }
    
  }

  createScene(canvas) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color().setHSL(0.6, 0, 1);
    this.scene.fog = new THREE.Fog(this.scene.background, 1, 5000);

    const fov = 30; //degrees vertical
    const aspect = window.innerWidth / window.innerHeight;
    const near = 1;
    const far = 5000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    this.renderer = new THREE.WebGLRenderer({canvas});
    document.body.appendChild(this.renderer.domElement);
    
    this.camera.position.set(0, 0, 250);
    this.camera.lookAt(0, 0, 0);
  }

  addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshToonMaterial({ color: 0x00ff00 });

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

  addLight() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-1, 1.75, 1);
    directionalLight.position.multiplyScalar(30);
    this.scene.add(directionalLight);
  }

  addPlane() {
    // const material = new THREE.MeshToonMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
    // const geometry = new THREE.PlaneGeometry(this.renderer.domElement.clientWidth, 4);
    // this.plane = new THREE.Mesh(geometry, material);

    // this.plane.position.set(0, -8, 0);
    // this.plane.rotation.x = Math.PI / 2;

    // this.scene.add(this.plane);

    const geometry = new THREE.PlaneBufferGeometry(10000, 10000);
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    material.color.setHSL(0.095, 1, 0.75);

    const ground = new THREE.Mesh(geometry, material);
    ground.position.y = -33;
    ground.rotation.x = - Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  addAxes() {
    const axesHelper = new THREE.AxesHelper(5);

    this.scene.add(axesHelper);
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

    // this.plane.rotation.y = time;
    // this.plane.rotation.x = time;

    // this.camera.position.set(0, -time, 15);

    // this.sphere1.rotation.y = time;
    // this.sphere1.rotation.x = time;

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