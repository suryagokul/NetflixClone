import * as React from "react";
import { Image, FlatList } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import styles from "./styles";
import categories from "../../assets/data/categories";
import HomeCategory from '../../components/HomeCategory';

// const firstCategory = categories.items[0];
// const secondCategory = categories.items[1];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList 
              data={categories.items}
              renderItem = {({ item }) => (
                <HomeCategory category={item} />
              )}
      />
                    
     </View>
  )}

export default HomeScreen;
