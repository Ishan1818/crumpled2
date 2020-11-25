
class paper
{
    constructer(x, y, width, height){
        var options {
            isStatic:false,
            restitution:0.1,
            friction:0.5,
            density:1.2;
        
            this.image = loadImage("sprites/dustbingreen.png");
            
        }
        this.x=x;
        this.y=y;
        this.width=width;
        
        this.body = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

        World.add(world, this.body)
    }
    display(){
        var duspos=this.body.position;

        PushManager()
        translate(duspos.x, duspos.y);
        rectMode(CENTER);
        strokeWeight(3);
        Fill(255, 0, 255)
        ellipse(0, 0, this.r, this.r)
        Pop()

    }
}












rec1 = createSprite(330, 630, 10, 60 , {isStatic:true} );

rec2 = createSprite(380, 655, 90, 10 , {isStatic:false} );


rec3 = createSprite (420, 630, 10, 60 , {isStatic:true} );