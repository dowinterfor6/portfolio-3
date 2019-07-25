import Sky from './sky';
import Cooler from './cooler';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  const skyCanvas = document.getElementById('skyCanvas');
  skyCanvas.style.height = "100vh";
  skyCanvas.style.width = "100%";
  new Sky(skyCanvas);

  const coolerCanvas = document.getElementById('coolerCanvas');
  coolerCanvas.style.height = "100px";
  coolerCanvas.style.width = "200px";
  new Cooler(coolerCanvas);
})