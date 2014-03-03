var div = document.createElement("div");
div.setAttribute("style", "position: fixed; top: 0px; z-index: 100000;height: "+screen.height+"px;");
var iframe = document.createElement("iframe");
var url = "http://127.0.0.1:1234/";
console.log(url);
iframe.setAttribute("src", url);
iframe.setAttribute("style", "-webkit-transition: all 0.3s ease;border: none; overflow: hidden; height: 100%; position: absolute; top: 0; left: -300px; background: white; z-index: 1000000;width:312px");
iframe.setAttribute("scrolling", "no");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("allowTransparency", "true");
iframe.style.backgroundColor = 'transparent';
div.appendChild(iframe);
document.body.appendChild(div);


// function SendMessage()
// {
//     var win = document.getElementById("ifrmChild").contentWindow;

//     // http://robertnyman.com/2010/03/18/postmessage-in-html5-to-send-messages-between-windows-and-iframes/


//     // http://stackoverflow.com/questions/16072902/dom-exception-12-for-window-postmessage
//     // Specify origin. Should be a domain or a wildcard "*"

//     if (win == null || !window['postMessage'])
//         alert("oh crap");
//     else
//         win.postMessage("hello", "*");
//     //alert("lol");
// }

function ReceiveMessage(evt) {
    var message;
    // if (evt.origin !== "http://tobiaslei.com") {
    if(false){
        console.log('invalid host');
    }else {
        // alert(evt.data);
        if(evt.data == 'expand'){
            iframe.style.left = "0px";
        }else{
            iframe.style.left = "-300px";
        }
    }
}


if (!window['postMessage']){
    console.log('postMessage does not support!');
}
else {
    if (window.addEventListener) {
        window.addEventListener("message", ReceiveMessage, false);
    }
    else {
        window.attachEvent("onmessage", ReceiveMessage);
    }
}