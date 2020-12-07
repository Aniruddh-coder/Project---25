class Ball{
    constructor(x,y,r){
                var options={
                    isStaic:false,
                    restitution: 0.3,
                    friction:0.5,
                    density:1.2
                }
                this.body = Bodies.circle(x,y,r/2,options);
                this.radius = r;
                this.image = loadImage("paper.png");
                World.add(world,this.body);
            }
            display(){
                push()
                translate(this.body.position.x,this.body.position.y);
                rotate(this.body.angle);
                ellipseMode(RADIUS);
                imageMode(CENTER);
                image(this.image,0,0,this.radius,this.radius);
                pop()
            }
        }
