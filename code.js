createCanvas("id", 320, 450);
setActiveCanvas("id");
var ts = 100;

var grid = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
var modes = [0,1,2,3,4,5,6]
var mode = 0
var cell = 10;
var ps = 1;
/*for (var i = 0; i < 450; i+=10) {
line(0, i, 320, i);
line(i, 0, i, 450);
        
}*/


onEvent("screen1", "mousemove", function(event) {
if(event.shiftKey){
 var nx = Math.floor(event.x/cell);
 var ny = Math.floor(event.y/cell);
  if(mode!=0){

    grid[ny][nx] = {id:mode,xpos:nx,ypos:ny,u:0,l:0};


  }else{

    grid[ny][nx] = 0;
}}
});
onEvent("screen1", "mousedown", function(event) {

 var nx = Math.floor(event.x/cell);
 var ny = Math.floor(event.y/cell);
  if(mode!=0){

    grid[ny][nx] = {id:mode,xpos:nx,ypos:ny,u:0,l:0};


  }else{

    grid[ny][nx] = 0;
}
});
onEvent("screen1", "keypress", function(event) {
//console.log(event.key);
for (var i = 0; i < modes.length; i++) {
 if(event.key == modes[i]){
 mode = modes[i];  
 } 
}


});
timedLoop(ts, function() {
  update();
});
function update(){
clearCanvas();
for (var i = 44; i >= 0; i--) {
for (var j = 0; j < 32; j++) {
//console.log(i,j)
/*
air:0
stone:1
sand:2
water:3
dirt:4
lava:5
steam:6
oil:7



*/
    
    if(grid[i][j]!=0&&grid[i][j]!=1){
  
if(grid[i][j].id==2&&grid[i][j].u===0){
  grid[i][j].u = 1;
    grid[i][j].l += ts;
  sand(grid[i][j],j,i);
 
}else if(grid[i][j].id==3&&grid[i][j].u===0){
  grid[i][j].u = 1;
        grid[i][j].l += ts;
  water(grid[i][j],j,i);
 
}else if(grid[i][j].id==4&&grid[i][j].u===0){
  grid[i][j].u = 1;
        grid[i][j].l += ts;
  dirt(grid[i][j],j,i);

}else if(grid[i][j].id==1&&grid[i][j].u===0){
  grid[i][j].u = 1;
        grid[i][j].l += ts;
  stone(grid[i][j],j,i);
 
}else if(grid[i][j].id==5&&grid[i][j].u===0){
  grid[i][j].u = 1;
        grid[i][j].l += ts;
  lava(grid[i][j],j,i);
 
}else if(grid[i][j].id==6&&grid[i][j].u===0){
  grid[i][j].u = 1;
    grid[i][j].l += ts;
  steam(grid[i][j],j,i);
 
}
  
}

}
}

 
 for (var i = 44; i >= 0; i--) {
for (var j = 0; j < 31; j++) {
//console.log(i,j)
if(grid[i][j]!=0&&grid[i][j]!=1){
  

  
  grid[i][j].u = 0;

  
}

}
}   
}
function sand(mol,x,y){
var xp= x;
var yp = y;
 setFillColor(rgb(237, 201, 175));
 setStrokeColor(rgb(237, 201, 175));
//console.log(grid[yp+1][xp]);
if(grid[yp+1][xp] === 0){
grid[yp+1][xp] = mol;
grid[yp][xp] = 0;
rect((xp)*cell, (yp+1)*cell, cell, cell);
 return ;
}else if(grid[yp+1][xp].id === 3){
grid[yp+1][xp] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0};
rect((xp)*cell, (yp+1)*cell, cell, cell);  
    
 }else if(grid[yp+1][xp].id === 5){
grid[yp+1][xp] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp)*cell, (yp+1)*cell, cell, cell);  
    
 }else if(grid[yp+1][xp-1]===0&&grid[yp+1][xp+1]===0){
if(Math.random()<=0.5){
 grid[yp+1][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return; 
}else{
 grid[yp+1][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return; 
}
}else if(grid[yp+1][xp-1].id===3&&grid[yp+1][xp+1].id===3){
if(Math.random()<=0.5){
 grid[yp+1][xp-1] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0};
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return; 
}else{
 grid[yp+1][xp+1] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0};
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return; 
}
}else if(grid[yp+1][xp-1].id===3){
grid[yp+1][xp-1] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0};
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp+1][xp+1].id===3){
grid[yp+1][xp+1] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0};
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return;
} else if(grid[yp+1][xp-1].id===5&&grid[yp+1][xp+1].id===5){
if(Math.random()<=0.5){
 grid[yp+1][xp-1] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return; 
}else{
 grid[yp+1][xp+1] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return; 
}
}else if(grid[yp+1][xp-1].id===5){
grid[yp+1][xp-1] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp+1][xp+1].id===5){
grid[yp+1][xp+1] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return;
}   
    
    else if(grid[yp+1][xp-1]===0){
grid[yp+1][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp+1][xp+1]===0){
grid[yp+1][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return;
}else{
  grid[yp][xp] = mol
  rect((xp)*cell, (yp)*cell, cell, cell);
}
  
}
function dirt(mol,x,y){
var xp= x;
var yp = y;
 setFillColor(rgb(175, 100, 25));
 setStrokeColor(rgb(175, 100, 25));
//console.log(grid[yp+1][xp]);
if(grid[yp+1][xp] === 0){
grid[yp+1][xp] = mol;
grid[yp][xp] = 0;
rect((xp)*cell, (yp+1)*cell, cell, cell);
 return ;
}else if(grid[yp+1][xp].id === 3){
grid[yp+1][xp] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0,};
rect((xp)*cell, (yp+1)*cell, cell, cell);  
    
 }else if(grid[yp+1][xp].id === 5){
grid[yp+1][xp] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp)*cell, (yp+1)*cell, cell, cell);  
    
 }else if(grid[yp+1][xp-1]===0&&grid[yp+1][xp+1]===0){
if(Math.random()<=0.5){
 grid[yp+1][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return; 
}else{
 grid[yp+1][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return; 
}
}else if(grid[yp+1][xp-1].id===3&&grid[yp+1][xp+1].id===3){
if(Math.random()<=0.5){
 grid[yp+1][xp-1] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0,};
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return; 
}else{
 grid[yp+1][xp+1] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0,};
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return; 
}
}else if(grid[yp+1][xp-1].id===3){
grid[yp+1][xp-1] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0,};
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp+1][xp+1].id===3){
grid[yp+1][xp+1] = mol;
grid[yp][xp] = {id:3,xpos:yp,ypos:xp,u:1,l:0,};
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return;
}
 else if(grid[yp+1][xp-1].id===5&&grid[yp+1][xp+1].id===5){
if(Math.random()<=0.5){
 grid[yp+1][xp-1] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return; 
}else{
 grid[yp+1][xp+1] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return; 
}
}else if(grid[yp+1][xp-1].id===5){
grid[yp+1][xp-1] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp+1][xp+1].id===5){
grid[yp+1][xp+1] = mol;
grid[yp][xp] = {id:5,xpos:yp,ypos:xp,u:1,l:0};
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return;
}   
    
    
    
    
    
    
    else if(grid[yp+1][xp-1]===0&&Math.random()<.30){
grid[yp+1][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp+1][xp+1]===0&&Math.random()<.30){
grid[yp+1][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return;
}else{
  grid[yp][xp] = mol
 rect((xp)*cell, (yp)*cell, cell, cell);
    if(mol.l>5000&&grid[yp-1][xp]===0){
        setFillColor(rgb(25, 255, 25));
 setStrokeColor(rgb(25, 255, 25));
       
        line((xp)*cell, (yp)*cell,((xp)*cell)+cell, (yp)*cell)
         
 /*        for (var hb = 0; hb < cell; hb++){
         if(Math.random()<.30){
             rect(((xp)*cell)+hb, ((yp)*cell)+1,1,1)
       23  }
       
       }*/
    }
}
  
}

function water(mol,x,y){
var xp = x;
var yp = y;
 setFillColor(rgb(66, 135, 245));
 setStrokeColor(rgb(66, 135, 245));
//console.log(grid[yp+1][xp]);
if(grid[yp+1][xp] === 0){
grid[yp+1][xp] = mol;
grid[yp][xp] = 0;
rect((xp)*cell, (yp+1)*cell, cell, cell);
 return ;
}else if(grid[yp+1][xp-1]===0){
grid[yp+1][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp+1][xp+1]===0){
grid[yp+1][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp][xp-1]===0){
grid[yp][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp)*cell, cell, cell);
return;
}else if(grid[yp][xp+1]===0){
grid[yp][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp)*cell, cell, cell);
return;
}else{
  grid[yp][xp] = mol
  rect((xp)*cell, (yp)*cell, cell, cell);
}

}
function stone(mol,x,y){
var xp = x;
var yp = y;
 setFillColor(rgb(120, 120, 120));
 setStrokeColor(rgb(120, 120, 120))
   rect((xp)*cell, (yp)*cell, cell, cell);
}


function lava(mol,x,y){
var xp = x;
var yp = y;
 if(Math.random>=.50){
 var v = randomNumber(1,10);
     setFillColor(rgb(245+v, 57+v, 0+v));
 setStrokeColor(rgb(245+v, 57+v, 0+v));
 }else{
   var v = randomNumber(1,106);
     setFillColor(rgb(255, 149+v, 0+v));
 setStrokeColor(rgb(255, 149+v, 0+v));
 
 }
//console.log(grid[yp+1][xp]);
var xoff=-1
var yoff = -1
var rock = true
for (var i = 0; i < 3; i++) {
 for (var j = 0; j < 3; j++) {
  //if(yoff!=0&&xoff!=0){
     if(grid[yp+yoff][xp+xoff].id == 3){
   grid[yp][xp] = {id:1,xpos:yp,ypos:xp,u:1,l:0};
   stone({id:1,xpos:yp,ypos:xp,u:0,l:0},xp,yp)
  grid[yp+yoff][xp+xoff] ={id:6,xpos:yp+yoff,ypos:xp+xoff,u:1,l:0};
  steam(grid[yp+yoff][xp+xoff],xp+xoff,yp+yoff)
   rock = false
       
//  }
 }
     
     
xoff++;
    } 
yoff++;
 xoff=-1; 
}

    
if(rock){
 if(grid[yp+1][xp] === 0){
grid[yp+1][xp] = mol;
grid[yp][xp] = 0;
rect((xp)*cell, (yp+1)*cell, cell, cell);
 return ;
}else if(grid[yp+1][xp-1]===0){
grid[yp+1][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp+1][xp+1]===0){
grid[yp+1][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp+1)*cell, cell, cell);
return;
}else if(grid[yp][xp-1]===0){
grid[yp][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp)*cell, cell, cell);
return;
}else if(grid[yp][xp+1]===0){
grid[yp][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp)*cell, cell, cell);
return;
}else{
  grid[yp][xp] = mol
  rect((xp)*cell, (yp)*cell, cell, cell);
}}}




function steam(mol,x,y){
var xp = x;
var yp = y;
  var col = (mol.l/10)+200
    if(col<255){
     
    setFillColor(rgb(col,col,col));
 setStrokeColor(rgb(col,col,col));
//console.log(grid[yp+1][xp]);

if(grid[yp-1][xp] === 0&&(yp-1)>0){
grid[yp-1][xp] = mol;
grid[yp][xp] = 0;
rect((xp)*cell, (yp-1)*cell, cell, cell);
 return ;
}else if(grid[yp-1][xp-1]===0&&(yp-1)>0){
grid[yp-1][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp-1)*cell, cell, cell);
return;
}else if(grid[yp-1][xp+1]===0&&(yp-1)>0){
grid[yp-1][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp-1)*cell, cell, cell);
return;
}else if(grid[yp][xp-1]===0){
grid[yp][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp)*cell, cell, cell);
return;
}else if(grid[yp][xp+1]=== 0){
grid[yp][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp)*cell, cell, cell);
return;
}else{
  grid[yp][xp] = mol
  rect((xp)*cell, (yp)*cell, cell, cell);
}

}else{
 grid[yp][xp] = 0    
}  
}

function smoke(mol,x,y){
var xp = x;
var yp = y;
 var col = (mol.l/10)+20
   if(col<255){
 setFillColor(rgb(col,col,col));
   setStrokeColor(rgb(col,col,col));
//console.log(grid[yp+1][xp]);

if(grid[yp-1][xp] === 0&&(yp-1)>0){
grid[yp-1][xp] = mol;
grid[yp][xp] = 0;
rect((xp)*cell, (yp-1)*cell, cell, cell);
 return ;
}else if(grid[yp-1][xp-1]===0&&(yp-1)>0){
grid[yp-1][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp-1)*cell, cell, cell);
return;
}else if(grid[yp-1][xp+1]===0&&(yp-1)>0){
grid[yp-1][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp-1)*cell, cell, cell);
return;
}else if(grid[yp][xp-1]===0){
grid[yp][xp-1] = mol;
grid[yp][xp] = 0;
rect((xp-1)*cell, (yp)*cell, cell, cell);
return;
}else if(grid[yp][xp+1]=== 0){
grid[yp][xp+1] = mol;
grid[yp][xp] = 0;
rect((xp+1)*cell, (yp)*cell, cell, cell);
return;
}else{
  grid[yp][xp] = mol
  rect((xp)*cell, (yp)*cell, cell, cell);
}

   }else{
    grid[yp][xp] = 0;
   
   
   }
}

