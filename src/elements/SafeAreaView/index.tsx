import React from "react";
import {
  SafeAreaView as DefaultSafeAreaView,
} from "react-native";

export type SafeAreaViewProps = DefaultSafeAreaView['props'];

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style,  ...otherProps } = props;
  return <DefaultSafeAreaView style={style} {...otherProps} />;
}
