$(document).ready(function(){

const about =  $(".about").offset().top;

// change nav

$(window).scroll(() => {

    const wScroll = $(window).scrollTop();
    console.log(wScroll)
    if ((wScroll > about - 500) | (wScroll > about - 200))
    {
        $("nav").addClass("shadow-sm").css("height" , "55px");
        $("#btnUp").fadeIn(500);
    }
    else
    {
        $("nav").removeClass("shadow-sm").css("height" , "55px");
        $("#btnUp").fadeOut(500);
        

    }

});

//change nav

//btn scroll top

$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:'0'} , 1000)

});

//btn scroll top








//when click item in nav-bar move on section 

$("a[class=nav-link]").click(function(){
    let aHref= $(this).attr("href");
    $("html,body").animate({scrollTop:$(aHref).offset().top} , 400)
});

//when click item in nav-bar move on section 

// img slider

const panels = Array.from( document.querySelectorAll(".panel"));

panels.forEach((panel) => {
    panel.addEventListener('click' , () =>{
        removeActiveClasses()
        panel.classList.add("active");
    })
});

// img slider

// remove active class from panel

function removeActiveClasses()
{
    panels.forEach(panel =>{
        panel.classList.remove("active");
    }) 
} ;

$(".designs").click(function(){
    
    $(".design").show(100 , function(){
        $(".design").siblings().css("display" , "none");
    }).css("display" , "flex");
});

$(".develops").click(function(){
   
    
    $(".development").show(100 , function(){
        $(".development").siblings().css("display" , "none");
    }).css("display" , "flex");
    
});

$(".markets").click(function(){

    $(".marketing").show(100 , function(){
        $(".marketing").siblings().css("display" , "none");
    }).css("display" , "flex");
});


$(".alls").click(function(){
    
    $(".all").show(100 , function(){
        $(".all").siblings().css("display" , "none");
    }).css("display" , "flex");
});


// show body

$("#loading").fadeOut(4000 , function(){
    $("body").css("overflow" , "auto");
});

// show body



// typing animation

var typed = new Typed('.animate', 
  {
      strings: [
          "Integrator",
          "complete"
      ],
      typeSpeed: 100,
      backSpeed: 150,
      loop: true,  

  });


// animation scroll
  new WOW().init();

});