const projects = require('../data/projects.json');
import MainCanvas from './mainCanvas';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');

  const canvas = document.getElementById('main-canvas');
  new MainCanvas(canvas);
})