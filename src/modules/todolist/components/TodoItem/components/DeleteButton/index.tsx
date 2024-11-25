/* REACT */
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Pressable } from '@/elements/Pressable';
import { COLORS } from '@/ui/colors';
import { size } from '@/ui/size';

type Props = {
  onPress: () => void;
};

const DeleteButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Pressable style={styles.deleteAction} onPress={onPress}>
      <Text style={styles.deleteActionText}>Delete</Text>
    </Pressable>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  deleteAction: {
    backgroundColor: COLORS.redOrange,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderTopRightRadius: size(6),
    borderBottomRightRadius: size(6),
    borderTopLeftRadius: Platform.OS === 'web' ? size(6) : size(0),
    borderBottomLeftRadius: Platform.OS === 'web' ? size(6) : size(0),
  },
  deleteActionText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: size(8),
  },
});
