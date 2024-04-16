import { View, Text, StyleSheet } from "react-native";

const ChatBubble = ({item} : any) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#6c757d",
          padding: 10,
          marginTop: 5,
          maxWidth: "50%",
          borderRadius: 20,
        }}
      >
        <Text className="text-base text-white">{item.eng}</Text>

        <View style={styles.leftArrow}></View>

        <View style={styles.leftArrowOverlap}></View>
      </View>
      <View className="flex flex-row justify-end">
        <View className="flex-1 max-w-[50%] rounded-full mt-1 p-3 bg-[#0078fe]">
          <Text className="text-base text-white">{item.tr}</Text>

          <View
            style={styles.rightArrow}
            className="absolute bg-[#0078fe] w-5 h-6 bottom-0 right-[-10]"
          ></View>

          <View
            style={styles.rightArrowOverlap}
            className="absolute bg-[#eeeeee] w-5 h-9 bottom-[-6] right-[-10]"
          ></View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rightArrow: {
    borderBottomLeftRadius: 25,
    right: -10,
  },

  rightArrowOverlap: {
    borderBottomLeftRadius: 18,
    right: -20,
  },

  leftArrow: {
    position: "absolute",
    backgroundColor: "#6c757d",
    width: 10,
    height: 18,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: 0,
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eeeeee",
    width: 10,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -10,
  },
});
export default ChatBubble;
