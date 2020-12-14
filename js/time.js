function clasicDate() {
  var time = new Date();
  var hr = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var ampm = "";

  ampm = (hr < 12) ? "AM" : "PM";

  hr = (hr > 12) ? hr - 12 : hr;
  hr = (hr == 0) ? 12 : hr;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  var dTime = hr + ":" + min + ":" + sec + " " + ampm;
  var timeDiv = document.getElementById("time");

  timeDiv.innerHTML = dTime;
}

setInterval(clasicDate, 1000);


/**
<div style="position:relative">
	            <a href="#">Class teacher profile <i class="fas fa-user-tie"></i></a>
                <span id="time" style="float:right; font-size:2em; color:silver; position:absolute; bottom:5px; right:20px"></span>
**/