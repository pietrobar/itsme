const home = document.querySelector("#home-text");
const homeObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting){
        $("#h").css("color", "rgb(204, 109, 109)");
    }else{
        $("#h").css("color", "white");
    }
  });
});
homeObserver.observe(home);


const about = document.querySelector("#am");
const aboutObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting){
        $(".highlight").addClass("afterHigh");
        $("#a").css("color", "rgb(204, 109, 109)");
    }else{
        $(".highlight").removeClass("afterHigh");
        $("#a").css("color", "white");
    }
  });
});
aboutObserver.observe(about);


const skills = document.querySelector("#sk");
const skillsObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting){
        $("#s").css("color", "rgb(204, 109, 109)");
    }else{
        $("#s").css("color", "white");
    }
  });
});
skillsObserver.observe(skills);

const contact = document.querySelector("#contact-title");
const contactObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting){
        $("#c").css("color", "rgb(204, 109, 109)");
    }else{
        $("#c").css("color", "white");
    }
  });
});
contactObserver.observe(contact);