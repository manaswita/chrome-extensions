document.addEventListener('DOMContentLoaded', documentEvents  , false);

function myAction(input) {
    console.log("input value is : " + input.value);
    // do processing with data
    // you need to right click the extension icon and choose "inspect popup"
    // to view the messages appearing on the console.

    var urlList = [];
    chrome.tabs.getAllInWindow(null, function(tabs){
        for (var i = 0; i < tabs.length; i++) {

        if(tab[i].title.contains(input.value)){
            console.log(tabs[i]);
        }
         var singleObj = {};
         singleObj['title'] = tabs[i].title;
         singleObj['value'] = tabs[i].index;

         urlList.push(singleObj);
        }
        console.log(urlList);
    });
}

function documentEvents() {
  document.getElementById('userInput').addEventListener('change',
    function() { myAction(document.getElementById('userInput'));
  });

  // you can add listeners for other objects ( like other buttons ) here
}
