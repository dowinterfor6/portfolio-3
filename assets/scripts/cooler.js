export default class Cooler {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };

    this.ctx.fillStyle = '#00F0F0';
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}