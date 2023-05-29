import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

type PopularJobCardProps = {
  item: any;
  selectedJob: any;
  handlePress: any;
};

const PopularJobCard = ({
  item,
  selectedJob,
  handlePress,
}: PopularJobCardProps) => {
  return (
    <TouchableOpacity
      style={styles(selectedJob, item).container}
      onPress={handlePress}
    >
      <TouchableOpacity style={styles(selectedJob, item).logoContainer}>
        <Image
          source={{
            uri: item.item.employer_logo
              ? item.item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles(selectedJob, item).logoImage}
        />
      </TouchableOpacity>
      <Text style={styles(selectedJob, item).companyName} numberOfLines={1}>
        {item.item.employer_name}
      </Text>
      <View style={styles(selectedJob, item).infoContainer}>
        <Text style={styles(selectedJob, item).jobName} numberOfLines={1}>
          {item.item.job_title}
        </Text>
        <Text style={styles(selectedJob, item).location} numberOfLines={1}>
          {item.item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
