gsap.registerPlugin(Draggable,EaselPlugin,Flip,InertiaPlugin,MotionPathPlugin,MorphSVGPlugin,Observer,ScrambleTextPlugin,SplitText);

    Draggable.create("#pull-out", {
      type: "x",
      bounds: "#pull-bound",
      inertia: true
    });
    

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

        // grab state
    const state = Flip.getState("#bento-screen");
      
    // Make DOM or styling changes
    switchItUp();
      
    // Animate from the initial state to the end state
    Flip.from(state, {duration: 2, ease: "power1.inOut"});

    Observer.create({
      target: "#bento-screen",
      onHover: () => {
        gsap.to("#bento-screen", {
        })
      }
    });

    Draggable.create("#bento-slider-key", {
      type: "x",
      bounds: "#bento-bounds",
      inertia: true,
      liveSnap: {
        points: [
          { x: 0, y: 0 },
          { x: 80, y: 0 },
          { x: 160, y: 0 },
          { x: 240, y: 0 },
          { x: 320, y: 0 },
        ],
      }
    });


    Draggable.create("#cover", {
      type: "x",
      bounds: "#slider-bounds",
      inertia: true
    });

    Draggable.create("#door01", {
      type: "x"
    })

    // MorphSVGPlugin.convertToPath("#door1", "#door2", "#door3", "#door4", "#door5", "#door6");

    // Observer.create({
    //   target: "#door",
    //   onDrag: () => {
    //     gsap.to("#door1", {
    //       duration: 1,
    //       morphSVG: "#door2"
    //     })
    //   }
    // });


    Draggable.create("#rotate-cover", {
      type: "rotation",
      inertia: true
    });

    
    Draggable.create("#shift-knob", {
      bounds: "#shift-bounds",
      lockAxis: true,
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

    Observer.create({target: "#key-1", onClick: () => {$("#key-1-off").toggleClass("show-key"), $("#key-1-on").toggleClass("show-key")}});
    Observer.create({target: "#key-1", onHoverEnd: () => {$("#key-1-off").removeClass("show-key"), $("#key-1-on").addClass("show-key")}});
    
    Observer.create({target: "#key-2", onClick: () => {$("#key-2-off").toggleClass("show-key"), $("#key-2-on").toggleClass("show-key")}});
    Observer.create({target: "#key-2", onHoverEnd: () => {$("#key-2-off").removeClass("show-key"), $("#key-2-on").addClass("show-key")}});
    
    Observer.create({target: "#key-3", onClick: () => {$("#key-3-off").toggleClass("show-key"), $("#key-3-on").toggleClass("show-key")}});
    Observer.create({target: "#key-3", onHoverEnd: () => {$("#key-3-off").removeClass("show-key"), $("#key-3-on").addClass("show-key")}});
    
    Observer.create({target: "#key-4", onClick: () => {$("#key-4-off").toggleClass("show-key"), $("#key-4-on").toggleClass("show-key")}});
    Observer.create({target: "#key-4", onHoverEnd: () => {$("#key-4-off").removeClass("show-key"), $("#key-4-on").addClass("show-key")}});
    
    Observer.create({target: "#key-5", onClick: () => {$("#key-5-off").toggleClass("show-key"), $("#key-5-on").toggleClass("show-key")}});
    Observer.create({target: "#key-5", onHoverEnd: () => {$("#key-5-off").removeClass("show-key"), $("#key-5-on").addClass("show-key")}});
    
    Observer.create({target: "#key-6", onClick: () => {$("#key-6-off").toggleClass("show-key"), $("#key-6-on").toggleClass("show-key")}});
    Observer.create({target: "#key-6", onHoverEnd: () => {$("#key-6-off").removeClass("show-key"), $("#key-6-on").addClass("show-key")}});
    
    Observer.create({target: "#key-7", onClick: () => {$("#key-7-off").toggleClass("show-key"), $("#key-7-on").toggleClass("show-key")}});
    Observer.create({target: "#key-7", onHoverEnd: () => {$("#key-7-off").removeClass("show-key"), $("#key-7-on").addClass("show-key")}});
    
    Observer.create({target: "#key-8", onClick: () => {$("#key-8-off").toggleClass("show-key"), $("#key-8-on").toggleClass("show-key")}});
    Observer.create({target: "#key-8", onHoverEnd: () => {$("#key-8-off").removeClass("show-key"), $("#key-8-on").addClass("show-key")}});
    
    Observer.create({target: "#key-9", onClick: () => {$("#key-9-off").toggleClass("show-key"), $("#key-9-on").toggleClass("show-key")}});
    Observer.create({target: "#key-9", onHoverEnd: () => {$("#key-9-off").removeClass("show-key"), $("#key-9-on").addClass("show-key")}});
    
    Observer.create({target: "#key-0", onClick: () => {$("#key-0-off").toggleClass("show-key"), $("#key-0-on").toggleClass("show-key")}});
    Observer.create({target: "#key-0", onHoverEnd: () => {$("#key-0-off").removeClass("show-key"), $("#key-0-on").addClass("show-key")}});


    // Observer.create({
    //   target: "#blinkers",
    //   onClick: () => {
    //     gsap.to("#blinker-red", {
    //     })
    //   }
    // })  

    // const tl = gsap.timeline({
    //   id: "text-scramble",
    //   defaults: { ease: "none" }
    // });

    // tl.to("#text-dialog-1", {
    //   duration: 1.5, 
    //   scrambleText: "Welcome to the Toy Box!"
    // }).to("#text-dialog-2", {
    //   duration: 2,
    //   scrambleText: "Find an Interaction to Begin."
    // });