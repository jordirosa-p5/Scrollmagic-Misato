let controller = new ScrollMagic.Controller();

let animacio1 = new TimelineMax();

animacio1.fromTo("#cosaQueEsMou1", 1, {
        top: "40vh",
        left: "25%",
        scale: 0
    },{
        top: 1500,
        left: "130%",
        scale: 2.2
    })
    .fromTo("#cosaQueEsMou2", 1, {
        top: "40vh",
        left: "28%",
        scale: 0
    },{
        top: 2000,
        left: "230%",
        scale: 2.5
    }, 0)
    .fromTo("#cosaQueEsMou3", 1, {
        top: "40vh",
        left: "26%",
        scale: 0
    },{
        top: 2500,
        left: "100%",
        scale: 1.78
    }, 0)
    .fromTo("#cosaQueEsMou4", 1, {
        top: "40vh",
        left: "18%",
        scale: 0
    },{
        top: 2500,
        left: "-98%",
        scale: 2
    }, 0)
    .fromTo("#cosaQueEsMou5", 1, {
        top: "40vh",
        left: "20%",
        scale: 0
    },{
        top: 3214,
        left: "-110%",
        scale: 2
    }, 0)
    .fromTo("#cosaQueEsMou6", 1, {
        top: "40vh",
        left: "18%",
        scale: 0
    },{
        top: 1105,
        left: "-50%",
        scale: 2
    }, 0)
    .fromTo("#cosaQueEsMou7", 1, {
        top: "40vh",
        left: "25%",
        scale: 0
    },{
        top: 2500,
        left: "-260%",
        scale: 3
    }, 0);

new ScrollMagic.Scene({
        triggerElement: "#contingut",
        triggerHook: 0,
        duration: 3000
    })
    .setTween(animacio1)
    //.setPin("#contingut")
    .addIndicators()
    .addTo(controller);
