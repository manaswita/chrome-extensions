document.addEventListener('DOMContentLoaded', documentEvents  , false);

function myAction(input) {
    console.log("input value is : " + input.value);
    // do processing with data
    // you need to right click the extension icon and choose "inspect popup"
    // to view the messages appearing on the console.

    var urlList = [];
    var table = document.getElementById("table");
    chrome.tabs.getAllInWindow(null, function(tabs){
        for (var i = 0; i < tabs.length; i++) {
        if(tabs[i].title.toLowerCase().includes(input.value.toLowerCase())){
                /*tabs[i].active = true;
                chrome.tabs.query({url: tabs[i].url}, function(tab) {
                    chrome.tabs.highlight({'tabs': tab[0].index}, function() {});
               });*/

          var singleObj = {};
          singleObj['title'] = tabs[i].title;
          singleObj['url'] = tabs[i].url;
          singleObj['index'] = tabs[i].index;
          urlList.push(singleObj);
        }
        }

        var body = document.getElementsByTagName("body")[0];

          // creates a <table> element and a <tbody> element
          var tbl = document.createElement("table");
          var tblBody = document.createElement("tbody");
          var url, index;

          for (var i = 0; i < urlList.length; i++) {
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            url = urlList[i].url;
            index = urlList[i].index;
            console.log(index);
            console.log(url);
            cell.onclick = function(){
                chrome.tabs.query({index: index}, function(tab) {
                    console.log(tab);
                    chrome.tabs.highlight({'tabs': index}, function() {});
                });

            };
            var cellText = document.createTextNode(urlList[i].title);
            cell.appendChild(cellText);
            row.appendChild(cell);
            tblBody.appendChild(row);
          }

          tbl.appendChild(tblBody);
          body.appendChild(tbl);
          tbl.setAttribute("border", "2");
    });
}

function documentEvents() {
  document.getElementById('userInput').addEventListener('change',
    function() { myAction(document.getElementById('userInput'));
  });

  // you can add listeners for other objects ( like other buttons ) here
}
