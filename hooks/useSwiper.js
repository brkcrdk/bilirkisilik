import { useState, useEffect, useCallback } from 'react';

const useSwiper = (slider) => {
  const [active, setActive] = useState(0);

  const slideNext = () => slider.slideNext();
  const slidePrev = () => slider.slidePrev();

  const stopAutoPlay = () => {
    const { autoplay } = slider.params;
    if (autoplay.enabled) return slider.autoplay.stop();
  };

  const startAutoPlay = useCallback(() => {
    const { autoplay } = slider.params;
    if (autoplay.enabled) return slider.autoplay.start();
  }, [slider]);

  const slideTo = (index) => {
    const { loop } = slider.params;

    if (loop) return slider.slideTo(index + 1);
    return slider.slideTo(index);
  };

  const slideChange = useCallback(
    (method) => {
      if (slider && method) {
        slider.on('slideChange', method);
        return startAutoPlay();
      }
      if (slider) {
        return slider.on('slideChange', () => {
          setActive(slider.realIndex);
          startAutoPlay();
        });
      }
    },
    [slider, startAutoPlay]
  );

  useEffect(() => {
    slideChange();
  }, [slideChange, slider]);

  return {
    active,
    slideNext,
    slidePrev,
    startAutoPlay,
    stopAutoPlay,
    slideTo,
    slideChange,
  };
};

export default useSwiper;
