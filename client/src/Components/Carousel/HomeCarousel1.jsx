import React from "react";
import Carousel from "nuka-carousel";
import { Box, Button, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const HomeCarousel1 = () => {
  return (
    <Carousel
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <Button
          borderRadius="none"
          onClick={previousSlide}
          disabled={previousDisabled}
        >
          <ChevronLeftIcon />
        </Button>
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <Button borderRadius="none" onClick={nextSlide} disabled={nextDisabled}>
          <ChevronRightIcon />
        </Button>
      )}
    >
      <Box>
        <Image
          w="100%"
          src="https://images.ctfassets.net/5de70he6op10/sElVOkh1LlYRV8lFchscj/3fa66885dac24294a26ad182591b8639/ALiving_HPG_LS_01-1.jpg?w=2640&q=80&fm=webp"
        />
      </Box>
      <Box>
        <Image
          w="100%"
          src="https://images.ctfassets.net/5de70he6op10/4oTq1foXQNa8hecONKjGA6/a091e50197f15deccb8f606f78358de6/ALiving_HPG_LS_01-2_2x.jpg?w=2640&q=80&fm=webp"
        />
      </Box>
      <Box>
        <Image
          w="100%"
          src="https://images.ctfassets.net/5de70he6op10/3no3vcSJTVoCfU0Xmz31Vn/e2f584c43ba1ab614e3376db991de762/ALiving_HPG_LS_01-3_2x.jpg?w=2640&q=80&fm=webp"
        />
      </Box>
    </Carousel>
  );
};

export default HomeCarousel1;
