console.log("Manaswita!!!");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.text);
        if(message.text === "remove ads"){
        var i, frames;
        frames = document.getElementsByTagName("iframe");
        for (i = 0; i < frames.length; ++i)
        {
              // The iFrame
            frames[i].style.display = "none";

        }
        //let paragraphs = document.getElementsByTagName('p');
        //for(elt of paragraphs){
        //elt.style["background-color"] = "#FF00FF";
        //}
    }
}