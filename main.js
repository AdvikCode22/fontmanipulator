noseX = ""
noseY = ""
lWristX = ""
rWristX = ""
diff = ""

function setup(){
    camera = createCapture(VIDEO)
    camera.position(40,215)

    canvas = createCanvas(800,500)
    canvas.position(700,120);
    background("lightcoral");

    model = ml5.poseNet(camera , modelLoaded)
    model.on('pose' , gotPoses)
}

function modelLoaded(){
    console.log("Model Has Loaded.")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)

        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x = " + noseX + " , nose y = " + noseY)

        lWristX = results[0].pose.leftWrist.x
        rWristX = results[0].pose.rightWrist.x
        console.log("left wrist x = " + lWristX + " , right wrist x = " + rWristX)

        diff = Math.floor(lWristX - rWristX)
        document.getElementById("side").innerHTML = "Font Size of Text: " + diff + "px"
    }
}

function draw(){
    background("lightcoral")
    fill("blue")
    stroke("blue")
    textSize(diff)
    text("Advik", noseX, noseY)
}