/**
 * 绘制管子
 */
(function (fb) {
    function Pipe(option) {
        this.ctx = option.ctx;
        this.topImg = option.topImg;
        this.bottomImg = option.bottomImg;
        this.x = option.x;
        this.topY = 0;
        this.bottomY = 0;
        this.speed = option.speed;
        this.spaceHeight = option.spaceHeight;
        this.initHeight();
    }
    Pipe.prototype.draw = function () {
        this.x -= this.speed;
        if(this.x<= -this.topImg.width){
            this.x += this.topImg.width*3*6;
        }
        this.ctx.drawImage(this.topImg,this.x,this.topY);
        this.ctx.drawImage(this.bottomImg,this.x,this.bottomY);
        this.initPath();
        // this.ctx.fill();
    }
    Pipe.prototype.initHeight = function () {
        this.topY = -(parseInt(Math.random()*100)+200);
        this.bottomY = this.topY+this.topImg.height+150;
    };
    Pipe.prototype.initPath = function () {
        this.ctx.rect(this.x,this.topY,this.topImg.width,this.topImg.height);
        this.ctx.rect(this.x,this.bottomY,this.bottomImg.width,this.bottomImg.height);
    };

    fb.Pipe = Pipe;
})(FB);