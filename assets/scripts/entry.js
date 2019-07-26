import Sky from './sky';
import Cooler from './cooler';

const projects = require('../data/projects.json');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  const skyCanvas = document.getElementById('skyCanvas');
  skyCanvas.style.height = "100vh";
  skyCanvas.style.width = "100%";
  new Sky(skyCanvas);

  const coolerElement = document.getElementById('cooler');
  coolerElement.style.height = "200px";
  coolerElement.style.width = "400px";
  const coolerCanvas = new Cooler(coolerElement);
})