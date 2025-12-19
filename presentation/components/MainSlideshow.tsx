import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { forwardRef, useRef } from "react";
import { Text, useWindowDimensions, View } from "react-native";

import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface Props {
  movies: Movie[];
}

const MainSlideshow = forwardRef(({ movies }: Props, ref) => {
  const refInternal = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={refInternal}
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        width={200} //margenes 50
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={0}
      />
    </View>
  );
});

MainSlideshow.displayName = "MainSlideshow";
export default MainSlideshow;
