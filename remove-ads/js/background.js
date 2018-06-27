console.log("Background running");


chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let message ={
        "text": "remove ads"
    }
    chrome.tabs.sendMessage(tab.id, message);
}