$(document).ready(function () {

	let name;	

	document.onLoad = newGif();

	$(".button--menu-page").click(function(){
        removesSpaces($(this))
        console.log(name);
        clearPage();
        createButtons();
	    newGif(name);
    });

    $("body").click(function(){
    	console.log(name)
    	newGif(name);
    });


    //Action functions that are called on click events
    function removesSpaces(word){
    	name = word.text();
        name = name.replace(/\s+/g, '');
    }

    function clearPage(){
    	$(".button--menu-page").attr("class", "hidden")
    	$(".page-header").attr("class", "hidden");
    	$("#gif").attr("class", "shown");
    }

    function createButtons(){
    	let buttonText = "Moaaar " + name;
    	$("header").append("<a class=\"button button--moar-animals\" href=\"./menu-page.html\">Moaaaar animals</a>");
    	$(".gif-container").after("<button class=\"button button--moar-gifs\">Moaaarr " + name + "</button>");
    }

	function newGif(){
		var xhr = $.get("https://api.giphy.com/v1/gifs/random?tag=" + name + "&api_key=Kr1RJr1e3gMYEl6wKKCcQfDr3K4iIT1l&limit=100");
		xhr.done(function(data) { 
			$("#gif").attr("src", data.data.image_url)
		});

	}
})
