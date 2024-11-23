import React from "react";
import {
  FlatList as DefaultFlatList,
} from "react-native";

export type FlatListProps = DefaultFlatList['props'];

export function FlatList(props: FlatListProps) {
  const { style,  ...otherProps } = props;
  return <DefaultFlatList style={style} {...otherProps} />;
}
