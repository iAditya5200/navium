import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Video from "./Video";
import vdo from '/src/assets/Ship3.mp4'

function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const slides = [1, 2, 3, 4, 5, 6];

  return (
    <div className="slider-container text-center text-zinc-900  overflow-hidden text-xs">
     
      <Slider asNavFor={nav2} ref={sliderRef1}>
        {slides.map((num) => (
          <div className="h-[80vh] p-3" key={num}>
           <Video className="w-[100%] h-[100%]  object-cover" url={vdo} title="Thumb" />
           </div>
        ))}
      </Slider>

      <Slider 
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={3}
        swipeToSlide
        focusOnSelect
      >
        {slides.map((num) => (
          <div className=' w-full overflow-hidden px-2' key={num}>
            <Video className='w-[100%]' title="Title will be here" url={vdo} />
            
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AsNavFor;
