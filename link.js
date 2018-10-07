 var sites = [
        
        "/site-direct.html?to-blog=3&title=EXPLORING%20LINKS%20BETWEEN%20DAIRY%20FOODS&to-get='+ encodedString+'",
        "/site-direct.html?to-blog=2&title=Mesothelioma&to-get='+ encodedString+'"
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }
