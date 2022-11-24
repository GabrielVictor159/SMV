import React from "react";
import { View, TextInput, Image } from "react-native";

export default function Inputs(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: props.width,
        height: props.height,
        borderBottomWidth: props.borderBottomWidth,
        borderColor: props.borderColor,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
        <TextInput
          style={{ width: "75%", height: "100%", textAlign: "center" }}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          secureTextEntry={props.secureText}
          onChangeText={(value) => {
            props.onChangeText(value)
          }}
        />
      </View>

      <View
        style={{
          width: "18%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <Image
          style={{ width: "50%", height: "50%" }}
          source={props.image}
        />
      </View>
    </View>
  );
}
