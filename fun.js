const navbar = document.querySelector(".navbar");
const home = document.querySelector("#home");

const homeOptions = {
  rootMargin: "-2px 0px 0px 0px"
};

const homeObserver = new IntersectionObserver(function(
  entries,
  homeObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
        $(".highlight").addClass("afterHigh");
    }else{
        $(".highlight").removeClass("afterHigh");
    }
  });
},
homeOptions);

homeObserver.observe(home);


