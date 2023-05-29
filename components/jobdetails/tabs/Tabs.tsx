import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import { SIZES } from "../../../constants";

import styles from "./tabs.style";

type JobTabsProps = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (item: string) => void;
};

type TabButtonProps = {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
};

const TabButton = ({ name, activeTab, onHandleSearchType }: TabButtonProps) => (
  <TouchableOpacity
    style={styles(name, activeTab).btn}
    onPress={onHandleSearchType}
  >
    <Text style={styles(name, activeTab).btnText}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }: JobTabsProps) => {
  return (
    <View style={styles("", activeTab).container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
