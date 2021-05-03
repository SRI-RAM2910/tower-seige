class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
   
    var pos=this.body.position
   fill("green")
    rectMode(CENTRE)
    rect(pos.x,pos.y,this.width,this,height)
    pop()
    }
   
}