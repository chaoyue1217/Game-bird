/**
 * Created by YUE on 2017/3/11.
 */
/*
 *绘制小鸟
 */
(function (fb) {
    function Bird(option) {
        this.ctx = option.ctx;
        this.cas = option.ctx.canvas;
        this.x = option.x;
        this.y = option.y;
        this.acc = 0.0005;
        this.speed = 0;
        this.img = option.img;
        this.perWidth = option.img.width/3;
        this.perHeight = option.img.height;
        this.index = 0;
        this.maxSpeed = 1;
        this.maxAngle = Math.PI/4;
    }
    Bird.prototype.draw = function (deltaTime) {
        //画鸟
        this.ctx.save();
        this.speed += this.acc*deltaTime;
        var deltaY = this.speed*deltaTime + this.acc*this.acc*deltaTime;
        this.ctx.translate(this.x+this.perWidth/2,this.y+this.perHeight/2);
        var currentAngle = this.speed/this.maxSpeed*this.maxAngle;
        currentAngle = currentAngle>=this.maxAngle?this.maxAngle:currentAngle;
        this.ctx.rotate(currentAngle);
        this.y += deltaY;
        this.ctx.drawImage(this.img,this.perWidth*this.index,0,this.perWidth,this.perHeight,-this.perWidth/2,-this.perHeight/2,this.perWidth,this.perHeight);
        this.index++;
        this.index %= 3;
        this.ctx.restore();
    };
    fb.Bird = Bird;
})(FB);