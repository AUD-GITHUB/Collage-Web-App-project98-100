var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie ...");
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function () {
        imgId = "selfie1";
        take_snapshot();
        save();
        speak_data = "Taking your Selfie in 2 to 3 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 2500);
    setTimeout(function () {
        imgId = "selfie2";
        take_snapshot();
        save();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);
    setTimeout(function () {
        imgId = "selfie3";
        take_snapshot();
        save();
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
}

function take_snapshot() {
    console.log(imgId);

    Webcam.snap(function (data_uri) {
        if (imgId == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id= "selfie1" src = "' + data_uri + '"/>';
        }
        if (imgId == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id= "selfie2" src = "' + data_uri + '"/>';
        }
        if (imgId == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id= "selfie3" src = "' + data_uri + '"/>';
        }
    })
}
function take() {
    html2canvas(document.getElementById("resultRow")).then(function (canvas) {
        document.body.appendChild(canvas);
    });
}