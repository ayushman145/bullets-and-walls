var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(800,400);
thickness=random(22,83)
speed+random(223,321)
weight=random(30,52)


wall.createSprite(1200,200, thickness, height/2)
wall.shapeColor(80,80,80 )
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge=bullet.x+Lbullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
      return true 
  }
      return false;
}

if(hasCollided(bullet, wall))
{
  bullet.velocity=0;
  var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

  if(damage>10)
  {
        wall.shapeColor=color(255,0,0);

  }



  if(damage<10)
  {
      wall.shapeColor=color(255,0,0);

  }
}