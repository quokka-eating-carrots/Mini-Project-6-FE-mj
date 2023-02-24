import { useMemo } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/index.css';

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

function Slick({
  children,
  autoplay = true,
  speed = 500,
  loop = true,
}: sliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      fade: true,
      arrows: false,
      infinite: loop,
      speed: speed,
      draggable: true,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
    }),
    [autoplay, loop, speed],
  );
  return (
    <div>
      <Slider
        {...settings}
        dotsClass='test-css'
        className='mx-auto shadow-default w-[320px] h-[200px] rounded-[20px]'
      >
        {children}
      </Slider>
    </div>
  );
}

export default Slick;
