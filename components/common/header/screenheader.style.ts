import { StyleProp, StyleSheet, ViewStyle, ImageStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = (dimension: any) =>
  StyleSheet.create({
    btnContainer: {
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small / 1.25,
      justifyContent: "center",
      alignItems: "center",
    },
    btnImg: {
      width: dimension,
      height: dimension,
      borderRadius: SIZES.small / 1.25,
    },
  });

export default styles;
