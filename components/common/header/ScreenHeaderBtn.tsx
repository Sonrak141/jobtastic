import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./screenheader.style";

type ScreenHeaderBtnProps = {
  iconUrl: any;
  dimension: string;
  handlePress: () => void;
};

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity
      style={styles(dimension).btnContainer}
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles(dimension).btnImg}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
