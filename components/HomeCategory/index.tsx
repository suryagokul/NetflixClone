import { Text, FlatList,Image, Pressable } from "react-native";
import styles from "./styles";
import * as React from 'react';
import  { useNavigation} from '@react-navigation/native';
import movies from "../../assets/data/movies";
import {HomeParamList} from '../../types';
import { StackNavigationProp } from "@react-navigation/stack";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[ ]
  }
}

// type homeScreenProp = StackNavigationProp<HomeParamList, 'MovieDetailsScreen'>;


const HomeCategory = (props: HomeCategoryProps) => {

    const { category } = props;
    const navigation = useNavigation();

const onMoviepress = (movie) => {
  navigation.navigate('MovieDetailsScreen', {id: movie.id});
}
 
  return(
  <>
     <Text style={styles.title}>{category.title}</Text>
    <FlatList
      data={category.movies}
      renderItem={({ item }) => (
        <Pressable onPress={() => onMoviepress(item)}>
        <Image style={styles.image} source={{ uri: item.poster }} />
        </Pressable>
      )}
      horizontal
      showsHorizontalScrollIndicator= {false}
    />
  </>
  );
};

export default HomeCategory;
