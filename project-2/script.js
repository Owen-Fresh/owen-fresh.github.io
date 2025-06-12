gsap.registerPlugin(Draggable,EaselPlugin,Flip,InertiaPlugin,MotionPathPlugin,MorphSVGPlugin,Observer,ScrambleTextPlugin,SplitText);


    //PULL OUT BOX -->

    Draggable.create("#pull-out", {
      type: "x",
      bounds: "#pull-bound",
      inertia: true
    });


    // DROP BOX -->

    Observer.create({
      target: "#drop-box",
      onClick: () => {
        gsap.to("#drop-box", {
          y: +15,
          duration: .75,
          ease: "back.in"
        })
        Draggable.create("#drop-box", {
        type: "y",
        bounds: "#drop-bounds",
        inertia: true
      })
      }
    });


    // BENTO SCREEN -->

    Observer.create({
      target: "#bento-slider-1",
      onClick: () => {
        gsap.to("#bento-screen-tl", {scaleX: 1, scaleY: 1, x: 0, y: 0}),
        gsap.to("#bento-screen-tr", {scaleX: 1, scaleY: 1, x: 0, y: 0}),
        gsap.to("#bento-screen-bl", {scaleX: 1, scaleY: 1, x: 0, y: 0}),
        gsap.to("#bento-screen-br", {scaleY: 1, scaleX: 1, x: 0, y: 0}),
        gsap.to("#bento-slider-key", {x: 0})
      }});
    
    Observer.create({
      target: "#bento-slider-2",
      onClick: () => {
        gsap.to("#bento-screen-bl", {scaleY: 0.5, y: +55}),
        gsap.to("#bento-screen-br", {scaleY: 0.5, y: +55}),
        gsap.to("#bento-screen-tr", {scaleX: .5, scaleY: 1.5, x: +85}),
        gsap.to("#bento-screen-tl", {scaleY: 1.5, scaleX: 1.5}),
        gsap.to("#bento-slider-key", {x: 80})
      },
      onHover: () => {
        $("#bento-slider-2").addClass(".active")
      }});

      Observer.create({
        target: "#bento-slider-3",
        onClick: () => {
          gsap.to("#bento-screen-bl", {scaleY: 0.5, y: +55}),
          gsap.to("#bento-screen-br", {scaleY: 0.5, y: +55}),
          gsap.to("#bento-screen-tl", {scaleX: .5, scaleY: 1.5}),
          gsap.to("#bento-screen-tr", {scaleY: 1.5, scaleX: 1.5, x: -85}),
          gsap.to("#bento-slider-key", {x: 160})
        }});

        Observer.create({
          target: "#bento-slider-4",
          onClick: () => {
            gsap.to("#bento-screen-tl", {scaleY: 0.5}),
            gsap.to("#bento-screen-tr", {scaleY: 0.5}),
            gsap.to("#bento-screen-br", {scaleX: .5, scaleY: 1.5, x: +85, y: -55}),
            gsap.to("#bento-screen-bl", {scaleY: 1.5, scaleX: 1.5, y: -55}),
            gsap.to("#bento-slider-key", {x: 240})
          }});

          Observer.create({
            target: "#bento-slider-5",
            onClick: () => {
              gsap.to("#bento-screen-tl", {scaleY: 0.5}),
              gsap.to("#bento-screen-tr", {scaleY: 0.5}),
              gsap.to("#bento-screen-bl", {scaleX: .5, scaleY: 1.5, y: -55}),
              gsap.to("#bento-screen-br", {scaleY: 1.5, scaleX: 1.5, x: -85, y: -55}),
              gsap.to("#bento-slider-key", {x: 320})
            }});


    // SLIDER -->

    Draggable.create("#cover", {
      type: "x",
      bounds: "#slider-bounds",
      inertia: true
    });


    // DOOR -->

    let tl = gsap.timeline()

    Observer.create({
      target: "#door01",
      onClick: () => {
        tl.to("#door01", {
          scaleX: 1, scaleY: 1, x: 0, y: 0,
          duration: .25, ease: "power3.in"
        })
        .to("#door01", {
          scaleX: 0.1, scaleY: 1.25, x: 0, y: -12,
          duration: 1, ease: "power3.in"
        })
        .to("#door01", {
          scaleX: 1, scaleY: 1, x: -88.89, y: 0,
          duration: .75, ease: "power3.out"
        })
        Draggable.create("#door01", {
          type: "x",
          inertia: true,
          bounds: "#door-bounds",
          liveSnap: {
            points: [
              { x: 0, y: 0 },
              { x: -88.89, y: 0}
            ]
          }
        })
      }
    });


    // ROTATE -->

    Draggable.create("#rotate-cover", {
      type: "rotation",
      inertia: true
    });

    
    // SHIFT -->
    
    Draggable.create("#shift-knob", {
      bounds: "#shift-bounds",
      // lockAxis: true,
      inertia: true,
      liveSnap: {
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 29 },
          { x: 0, y: 58 },
          { x: 47.5, y: 29 },
          { x: 47.5, y: 0 },
          { x: 47.5, y: 58 },
          { x: 95, y: 29 },
          { x: 95, y: 0 },
          { x: 95, y: 58 },
        ],
      }
    });


    // KEYPAD -->

    Observer.create({target: "#key-1", onPress: () => {$("#key-1-off").toggleClass("show-key"), $("#key-1-on").toggleClass("show-key")}});
    Observer.create({target: "#key-1", onRelease: () => {$("#key-1-off").removeClass("show-key"), $("#key-1-on").addClass("show-key")}});
    
    Observer.create({target: "#key-2", onPress: () => {$("#key-2-off").toggleClass("show-key"), $("#key-2-on").toggleClass("show-key")}});
    Observer.create({target: "#key-2", onRelease: () => {$("#key-2-off").removeClass("show-key"), $("#key-2-on").addClass("show-key")}});
    
    Observer.create({target: "#key-3", onPress: () => {$("#key-3-off").toggleClass("show-key"), $("#key-3-on").toggleClass("show-key")}});
    Observer.create({target: "#key-3", onRelease: () => {$("#key-3-off").removeClass("show-key"), $("#key-3-on").addClass("show-key")}});
    
    Observer.create({target: "#key-4", onPress: () => {$("#key-4-off").toggleClass("show-key"), $("#key-4-on").toggleClass("show-key")}});
    Observer.create({target: "#key-4", onRelease: () => {$("#key-4-off").removeClass("show-key"), $("#key-4-on").addClass("show-key")}});
    
    Observer.create({target: "#key-5", onPress: () => {$("#key-5-off").toggleClass("show-key"), $("#key-5-on").toggleClass("show-key")}});
    Observer.create({target: "#key-5", onRelease: () => {$("#key-5-off").removeClass("show-key"), $("#key-5-on").addClass("show-key")}});
    
    Observer.create({target: "#key-6", onPress: () => {$("#key-6-off").toggleClass("show-key"), $("#key-6-on").toggleClass("show-key")}});
    Observer.create({target: "#key-6", onRelease: () => {$("#key-6-off").removeClass("show-key"), $("#key-6-on").addClass("show-key")}});
    
    Observer.create({target: "#key-7", onPress: () => {$("#key-7-off").toggleClass("show-key"), $("#key-7-on").toggleClass("show-key")}});
    Observer.create({target: "#key-7", onRelease: () => {$("#key-7-off").removeClass("show-key"), $("#key-7-on").addClass("show-key")}});
    
    Observer.create({target: "#key-8", onPress: () => {$("#key-8-off").toggleClass("show-key"), $("#key-8-on").toggleClass("show-key")}});
    Observer.create({target: "#key-8", onRelease: () => {$("#key-8-off").removeClass("show-key"), $("#key-8-on").addClass("show-key")}});
    
    Observer.create({target: "#key-9", onPress: () => {$("#key-9-off").toggleClass("show-key"), $("#key-9-on").toggleClass("show-key")}});
    Observer.create({target: "#key-9", onRelease: () => {$("#key-9-off").removeClass("show-key"), $("#key-9-on").addClass("show-key")}});
    
    Observer.create({target: "#key-0", onPress: () => {$("#key-0-off").toggleClass("show-key"), $("#key-0-on").toggleClass("show-key")}});
    Observer.create({target: "#key-0", onRelease: () => {$("#key-0-off").removeClass("show-key"), $("#key-0-on").addClass("show-key")}});


    // BLINKER -->

    Observer.create({target: "#highlight-99", onPress: () => {$("#blinker-red").addClass("red-light")}});
    Observer.create({target: "#highlight-99", onRelease: () => {$("#blinker-red").removeClass("red-light")}});

    Observer.create({target: "#highlight-100", onPress: () => {$("#blinker-green").addClass("green-light")}});
    Observer.create({target: "#highlight-100", onRelease: () => {$("#blinker-green").removeClass("green-light")}});

    Observer.create({target: "#highlight-102", onPress: () => {$("#blinker-blue").addClass("blue-light")}});
    Observer.create({target: "#highlight-102", onRelease: () => {$("#blinker-blue").removeClass("blue-light")}});

    Observer.create({target: "#highlight-101", onPress: () => {$("#blinker-yellow").addClass("yellow-light")}});
    Observer.create({target: "#highlight-101", onRelease: () => {$("#blinker-yellow").removeClass("yellow-light")}});
  

    // TEXT SCRAMBLE -->

    gsap.to("#text-dialog-1", {
      duration: 1.5, 
      scrambleText: "Welcome to the Toy Box!"
    })
    gsap.to("#text-dialog-2", {
      duration: 2,
      delay: 1.75,
      scrambleText: "Find an Interaction to Begin."
    });