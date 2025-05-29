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
      // onClick: (if == Draggable) => {}
    });


    Draggable.create("#bento-slider-key", {
      type: "x",
      bounds: "#bento-bounds",
      inertia: true
    });


    Draggable.create("#cover", {
      type: "x",
      bounds: "#slider-bounds",
      inertia: true
    });


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
      inertia: true
    });


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