canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "racing.jpg";
rover_image = "car1.png";
car_image = "download.png";


rover_x = 10;
rover_y = 10;

car_x = 10;
car_y = 100;

rover_height = 70;
rover_width = 120;

car_height = 70;
car_width = 120;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadCar;
    car_imgTag.src = car_image;


}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadCar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38')
    {
        up();
        console.log("up")
    }
    if (keyPressed == '40')
    {
        down();
        console.log("down")
    }
    if (keyPressed == '37')
    {
        left();
        console.log("left")
    }
    if (keyPressed == '39')
    {
        right();
        console.log("right")
    }
}

function  up()
{ if (rover_y >=0) {
    rover_y = rover_y - 10;
    uploadBackground();
    uploadRover();
    uploadCar();
}

}

function  down()
{ if (rover_y <=500) {
    rover_y = rover_y + 10;
    uploadBackground();
    uploadRover();
    uploadCar();
}

}

function  left()
{ if (rover_x >=0) {
    rover_x = rover_x - 10;
    uploadBackground();
    uploadRover();
    uploadCar();
}

}

function  right()
{ if (rover_x <=700) {
    rover_x = rover_x + 10;
    uploadBackground();
    uploadRover();
    uploadCar();
}

}