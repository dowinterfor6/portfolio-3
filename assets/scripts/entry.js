import Sky from './sky';
import createBeer from './cooler';
import test from './threeTest';

const projects = require('../data/projects.json');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  const skyCanvas = document.getElementById('skyCanvas');
  skyCanvas.style.height = "100vh";
  skyCanvas.style.width = "100%";
  new Sky(skyCanvas);

  const coolerElement = document.getElementById('cooler');
  createBeer(coolerElement, projects);

  test();
})