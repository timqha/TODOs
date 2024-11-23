import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '@/elements';
import { COLORS } from '@/ui/colors';
import { size } from '@/ui/size';

const EmptyComponent = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No tasks yet</Text>
      <Text style={styles.emptySubtext}>Add a new task to get started</Text>
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    paddingTop: size(25),
  },
  emptyText: {
    fontSize: size(9),
    fontWeight: '600',
    color: COLORS.doveGray,
    marginBottom: size(4),
  },
  emptySubtext: {
    fontSize: size(7),
    color: COLORS.silverChalice,
  },
});
