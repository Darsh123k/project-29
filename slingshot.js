class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }  
         this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
     if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8)
            line(pointA.x-25,pointA.y,pointB.x+30,pointB.y-3)
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
            image(this.polygon,pointA.x-30,pointA.y-10,15,30)
            pop(); 
        }
    }
    
}