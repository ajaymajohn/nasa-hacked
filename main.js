canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

nasaarray=["mars.jpg","mars image 2.jpg","mars image 3.jpg","mars image 4.jpg","mars image 5.jpg","mars image 6.jpg","mars image 7.jpg","mars image 8.jpg","mars image 9.jpg","mars image 10.jpg","mars image 11.jpg","mars image 12.jpg","mars image 13.jpg","mars image 14.jpg","mars image 15.jpg"];
random_number=Math.floor(Math.random()*15);
background_image=nasaarray[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add(){
    background_ingtag=new Image();
    background_ingtag.onload=upload_background;
    background_ingtag.src=background_image;
    rover_ingtag=new Image();
    rover_ingtag.onload=upload_rover;
    rover_ingtag.src=rover_image;
}

function upload_background(){
    ctx.drawImage(background_ingtag,0,0,canvas.width,canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_ingtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='40'){
        down();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='39'){
        right();
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        upload_background();
        upload_rover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        upload_background();
        upload_rover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        upload_background();
        upload_rover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        upload_background();
        upload_rover();
    }
}