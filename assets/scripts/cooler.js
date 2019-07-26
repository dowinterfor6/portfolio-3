import Beer from "./beer";

export default class Cooler {
  constructor(coolerElement) {
    this.coolerElement = coolerElement;
    this.coolerWidth = 400;
    this.coolerHeight = 200;

    // this.file = projects (TODO: Project information json)
    this.createCoolerCanvas();
    this.animate = this.animate.bind(this);
  }

  createBeer(file) {
    Object.keys(file).forEach((projectName) => {
      let beer = new Beer(projectName, file[projectName]);

      beer.createNode(this.coolerElement);
    })
  }

  createCoolerCanvas() {    
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.coolerWidth / this.coolerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.coolerWidth, this.coolerHeight);

    this.coolerElement.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;

    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube.rotation.x += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}