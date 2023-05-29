import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

type WelcomeProps = {
  searchTerm: string;
  setSearchTerm: (text: any) => void;
  handleClick: () => void;
};

type SetSerach = {
  text: string;
};

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: WelcomeProps) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View>
      <View style={styles(undefined, undefined).container}>
        <Text style={styles(undefined, undefined).userName}>Hello Carlos</Text>
        <Text style={styles(undefined, undefined).welcomeMessage}>
          Find your perfect job
        </Text>
      </View>
      <View style={styles(undefined, undefined).searchContainer}>
        <View style={styles(undefined, undefined).searchWrapper}>
          <TextInput
            style={styles(undefined, undefined).searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for..'
          />
        </View>
        <TouchableOpacity
          style={styles(undefined, undefined).searchBtn}
          onPress={handleClick}
        >
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles(undefined, undefined).searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles(undefined, undefined).tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles(activeJobType, item).tab}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles(activeJobType, item).tabText}>{item} </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
