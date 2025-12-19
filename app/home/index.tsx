import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList2 from "@/presentation/components/movies/MovieHorizontalList2";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MovieApp</Text>

        {/** carrusel de imagenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        {/**Popular */}
        {/* <MovieHorizontalList movies={popularQuery.data ?? []} /> */}
        <MovieHorizontalList2
          movies={popularQuery.data ?? []}
          title="Populares"
          className="mb-5"
        />

        <MovieHorizontalList2
          movies={topRatedQuery.data ?? []}
          title="Mejor-calificadas"
          className="mb-5"
        />

        <MovieHorizontalList2
          movies={upcomingQuery.data ?? []}
          title="Proximamente"
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
