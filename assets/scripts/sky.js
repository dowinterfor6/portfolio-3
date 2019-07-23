export default class Sky {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };

    this.currTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = hours + minutes / 60;

    if (this.currTime == time) { requestAnimationFrame(this.animate.bind(this)); return; };
    // Time from 0 - 23 (24 hours)
    // 0 is darkest, 23 and 1 second darkest
    // y\ =\ 255\sin\left(\frac{\pi}{24}x\right)
    // y = 255 * sin( (pi/24) x )
    let tempColor = 255 * Math.sin((Math.PI / 24) * time);
    console.log(tempColor);
    this.ctx.fillStyle = `rgba(${tempColor}, ${tempColor}, ${tempColor}, 1)`;
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

    this.currTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}