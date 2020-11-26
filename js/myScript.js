
var x = document.getElementsByClassName("children");
var x1 = document.getElementsByClassName("children1");
var x2 = document.getElementsByClassName("children2");
var x3 = document.getElementsByClassName("children3");
var x4 = document.getElementsByClassName("children4");


	function removeElement() {
    	for (let index = 0; index < x.length; index++) {
	 		$(x[index]).css({"display":"inline-block"});
	 		$(x1[index]).css({"display":"none"});
	 		$(x2[index]).css({"display":"none"});
	 		$(x3[index]).css({"display":"none"});
	 		$(x4[index]).css({"display":"none"});
    	}
	}
	
	function removeElement1() {
   		 for (let index = 0; index < x.length; index++) {
	       $(x[index]).css({"display":"none"});
	       $(x1[index]).css({"display":"inline-block"});
		   $(x2[index]).css({"display":"none"});
		   $(x3[index]).css({"display":"none"});
	       $(x4[index]).css({"display":"none"});
    	 }
	}
	
    function removeElement2() {
       for (let index = 0; index < x.length; index++) {
	       $(x[index]).css({"display":"none"});
	       $(x1[index]).css({"display":"none"});
		   $(x2[index]).css({"display":"inline-block"});
		   $(x3[index]).css({"display":"none"});
	       $(x4[index]).css({"display":"none"});
       }
	}

	function removeElement3() {
       for (let index = 0; index < x.length; index++) {
	       $(x[index]).css({"display":"none"});
	       $(x1[index]).css({"display":"none"});
		   $(x2[index]).css({"display":"none"});
		   $(x3[index]).css({"display":"inline-block"});
	       $(x4[index]).css({"display":"none"});
       }
	}

	function removeElement4() {
       for (let index = 0; index < x.length; index++) {
	       $(x[index]).css({"display":"none"});
	       $(x1[index]).css({"display":"none"});
		   $(x2[index]).css({"display":"none"});
		   $(x3[index]).css({"display":"none"});
	       $(x4[index]).css({"display":"inline-block"});
	   }
	}
	
	
	function resetElement() {
		for (let index = 0; index < x.length; index++) {
	        $(x[index]).css({"display":"inline-block"});
	        $(x1[index]).css({"display":"inline-block"});
			$(x2[index]).css({"display":"inline-block"});
			$(x3[index]).css({"display":"inline-block"});
	        $(x4[index]).css({"display":"inline-block"});
		}
	
	}

 

$(document).ready(function(){
/* Title*/
for (let index = 0; index < 100; index++) {
  $('.intro__title').fadeOut(6000).fadeIn(1000);
}


/*Changement de texte */
$(".header__logo").click(function(){ 
$('.header__logo').replaceWith("<h1>\"Au bout de chaque rue, une montagne...\" <br> -Stendhal</h1>");
});

/*Les effets sur les blocks */
$(".children, .children1, .children2, .children3, .children4").on({
  click: function (){  
    $(this).animate({
      opacity: '0.8',
      height: '400px',
      width: '400px',
    
    });
    },  
  mouseleave: function (){  
    $(this).animate({
      opacity: '0.8',
      height: '300px',
      width: '300px',
    
    });
  },   
});


/*-----TypeIt de contact------*/

/*Input Nom */
new TypeIt("#input_Nom", {
  strings: "Example: Doupont",
  speed: 100,
  waitUntilVisible: true
}).go();

/*Input Prenom */
new TypeIt("#input_Prenom", {
  strings: "Example: Pierre",
  speed: 200,
  waitUntilVisible: true
}).go();

/*Input Email */
new TypeIt("#input_Email", {
  strings: "Example: doupont.pierre@gmail.com",
  speed: 200,
  waitUntilVisible: true
}).go();


/*---TextArea---- */
new TypeIt("#textArea", {
  waitUntilVisible: true
})
  .type("Example: Je trouve que votre site")
  .exec(async () => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, 3000);
    });
  })
  .type(" est agreable!")
  .move(-6)
  .delete(9)
  .type("tres agreable!")
  .go();











  
/*function removeElement() {
  document.getElementById("imgbox1").style.display = "none";
}
function changeVisibility() {
  document.getElementById("imgbox2").style.visibility = "hidden";
}
function resetElement() {
  document.getElementById("imgbox1").style.display = "block";
  document.getElementById("imgbox2").style.visibility = "visible";
}*/




//----------------------

  });