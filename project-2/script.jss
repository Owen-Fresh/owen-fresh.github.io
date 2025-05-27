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

    Observer.create({
      target: "#door",
      onDrag: () => {
        gsap.to("#door01", {
          duration: 1,
          morphSVG: "#door02"
        })
      }
    });

    Draggable.create("#rotate-cover", {
      type: "rotation",
      inertia: true
    });

    Draggable.create("#shift-knob", {
      bounds: "#shift-bounds",
      lockAxis: true,
      inertia: true
    });