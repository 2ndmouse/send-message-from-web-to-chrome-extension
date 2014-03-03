send-message-from-web-to-chrome-extension
=========================================

Send message from webpage to chrome extension

### Problem
if you call "window.parent.document" in javascript, and result in "SecurityError: Blocked a frame with origin "http://127.0.0.1:1234" from accessing a cross-origin frame.", then you can use this solution.


### Description
This extension intends to demonstrate how to send message from a web page to a content script of chrome extension.

At first, the content script of the extension will inject an iframe sidebar into my homepage(you can change the manifest.json to support other urls), by the default, the sider is hide on the left. When you click the yellow button, it will expand to show the full sidebar. This happens by sending a message to the content script from the iframe content, and the content script changes the iframe css to make it slide left or right.

### Try the code

Instructions:

    Install and test the app
    1) Settings -> Extensions,
       a) enable developer mode
       b) load unpacked extension
       c) select plugin/
       You should see an extension "Send Msg testing 1.0" added after you load the extension

    2) Setup an simple http server to hose the index.html
       a) go to the directory of index.html
       b) python -m SimpleHTTPServer 1234

    2) Visit my homepage, http://tobiaslei.com/
    You should see a red background sidebar hiding on the left. Click on the yellow toggler, if you expand/close.