/*
 * Helper Methods
 * */

function callAjax(url, callback) {
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function getTimeStamp() {
    var date = new Date();
    return date.toDateString() + " | " + date.getHours() + ":" + date.getMinutes() + " " + date.toLocaleTimeString().split(" ")[1];
}




