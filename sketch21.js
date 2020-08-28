var bullet, wall, thickness;
var speed, weight;
var damage;
var rating;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,50);
  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  speed = random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;
  
}

function draw() {
  background("pink");
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if (damage > 10){
        wall.shapeColor = rgb(255,0,0);
    } else {
        wall.shapeColor = rgb(0,255,0);
    } 
  }
  drawSprites();
}

function hasCollided( bullet, wall ){
    bullet_right_edge = bullet.x + bullet.width/2;
    wall_left_edge = wall.x - wall.width/2;
    if (bullet_right_edge >= wall_left_edge){
        return true;
    } else {
        return false;
    }
}