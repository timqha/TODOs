import React from 'react';
import { SafeAreaView as DefaultSafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '@/ui/colors';

export type SafeAreaViewProps = DefaultSafeAreaView['props'];

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style, ...otherProps } = props;
  return (
    <DefaultSafeAreaView style={[styles.container, style]} {...otherProps} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.alabaster,
  },
});
