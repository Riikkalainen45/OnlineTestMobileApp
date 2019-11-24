
var url = "http://iceberg-cycle.codio.io/5:";
        var jsonObj;

        function myFunction() {

    

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true);
            xmlhttp.send();
            xmlhttp.onreadystatechange = function () {

                var xmlDoc = xmlhttp.responseXML;

//Adding element to html page and to get it from this address 
              
                var quotes = xmlDoc.getElementsByTagName("quote");

                var authors = xmlDoc.getElementsByTagName("author");
                var quoteNum = Math.floor(Math.random() * quotes.length);

                var txt = "<table>";

                txt += "<tr><td>" + quotes[quoteNum].childNodes[0].nodeValue + "</td><br>" +
                    "<td>" + authors[quoteNum].childNodes[0].nodeValue + "</td></tr>";
                console.log(txt);

                txt += "</table>";

                document.getElementById("quote1").innerHTML = txt;
            }
        }
        
    