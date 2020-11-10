function Timer() {
    var xTime = Math.floor((Math.random() * 400) + 1);
    document.getElementById("mesg").innerHTML = xTime;
}

// set interfal


//Checking if the user have a web cam and agree that this application can use it
navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

navigator.getMedia({ video: true }, function() {
        var video = document.getElementById('video'), //where the video will be streaming
            canvas = document.getElementById('canvas'), //where the capture picture will be shown ,saved temp
            context = canvas.getContext('2d'), //drawing a 2 dementional picture
            vendorURL = window.URL || window.webkitURL; //specifying diff browsers

        navigator.getMedia = navigator.getUserMedia || //connecting to the cam on all types of browsers
            navigator.webkitGetUserMedia || //connecting to the cam on all types of browsers
            navigator.mozGetUserMedia || //connecting to the cam on all types of browsers
            navigator.msGetUserMedia; //connecting to the cam on all types of browsers


        navigator.getMedia({ //getting the stream to be display
            video: true, //streaming video true
            audio: false //streaming audio false
        }, function(stream) {
            video.srcObject = stream; // the stream object
            video.play(); //playing the stream automatically
        }, function(error) { // if an error would occured it will be saved here
            // an error occured
            // error.code


        });

        var myVar = setInterval(myTimer, 10000);

        function myTimer() {


            context.drawImage(video, 0, 0, 200, 150);

            /* document.getElementById('capture').addEventListener('click', function() { //the event listener that will capture the picture need to be change with a timer
                context.drawImage(video, 0, 0, 200, 150); //drawing the picture */
        };





    },
    function() {
        alert("Please allow or enable a web cam in order to proceed with this test");
        location.href = "https://www.mysheq.com/"; //user does not have web-cam enabled redirect him to mySheq.com and cancel test
    });






function test() {
    window.open("test.html");
};

//starting the test timer it is 5min and 5 sec for testing perposes
document.getElementById('timer').innerHTML =
    01 + ":" + 05;
startTimer();

function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) { //if time is finish stop the timer and disable all the questions preventing the users from proceeding
        document.getElementById('timer').innerHTML = "Your time is up";

        document.getElementById("Question_1").disabled = true;
        document.getElementById("Question_2").disabled = true;
        document.getElementById("Question_3").disabled = true;
        document.getElementById("Question_4").disabled = true;
        document.getElementById("Question_5").disabled = true;
        document.getElementById("Question_6").disabled = true;
        document.getElementById("Question_7").disabled = true;
        document.getElementById("Question_8").disabled = true;
        document.getElementById("Question_9").disabled = true;
        document.getElementById("Question_10").disabled = true;
        document.getElementById("Question_11").disabled = true;
        document.getElementById("Question_12").disabled = true;
        document.getElementById("Question_13").disabled = true;
        document.getElementById("Question_14").disabled = true;
        document.getElementById("Question_15").disabled = true;
        document.getElementById("Question_16").disabled = true;
        document.getElementById("Question_17").disabled = true;
        document.getElementById("Question_18").disabled = true;
        document.getElementById("Question_19").disabled = true;
        document.getElementById("Question_20").disabled = true;
        document.getElementById("Question_21").disabled = true;
        document.getElementById("Question_22").disabled = true;
        document.getElementById("Question_23").disabled = true;
        document.getElementById("Question_24").disabled = true;
        document.getElementById("Question_25").disabled = true;
        setTimeout(stopTimer, 0000);


    };

    document.getElementById('timer').innerHTML =
        m + ":" + s;
    console.log(m)
    setTimeout(startTimer, 1000);
}

function checkSecond(sec) { //refreshing the timer so that it is counting down and displying it correctly
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}