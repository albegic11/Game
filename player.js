export default class Player {
  constructor(x, y, width = 32, height = 32) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = 'Imported piskel.gif';  
    this.loaded = false;
    this.image.onload = () => {
      this.loaded = true;
    };
  }

  draw(ctx) {
    if (this.loaded) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
}
