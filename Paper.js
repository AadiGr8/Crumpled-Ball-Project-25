class Paper	{
	constructor(x,y,r) {
		var options={
            restitution : 0.3,
            friction : 0,
            density : 1.2		
			}

		this.x=x;
		this.y=y;
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(x, y,70/3, options);
 		World.add(world, this.body);

	}
	display(){
			
			var paperPos=this.body.position;		
            
			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER);
			image(this.image,0,0,70,70);
			pop();			
	}

}