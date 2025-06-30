import * as React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, styles.monoText]} />;
}

const styles = StyleSheet.create({
  monoText: {
    fontFamily: "monospace",
    fontSize: 16,
  },
});
