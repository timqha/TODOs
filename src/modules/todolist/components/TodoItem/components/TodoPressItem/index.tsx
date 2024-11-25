/* REACT */
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Pressable } from '@/elements/Pressable';
import { COLORS } from '@/ui/colors';
import { size } from '@/ui/size';
import { Todo } from '../../../../types';
import { TodoItemProps } from '../../index';

type Props = Pick<TodoItemProps, 'toggleTodo'> & Todo;

const TodoPressItem: React.FC<Props> = ({
  toggleTodo,
  id,
  completed,
  text,
}) => {
  return (
    <Pressable style={styles.todoItem} onPress={() => toggleTodo(id)}>
      <View style={styles.todoContent}>
        <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
          {!!completed && <View style={styles.checkmark} />}
        </View>
        <Text
          style={[styles.todoText, completed && styles.todoTextCompleted]}
          numberOfLines={2}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default TodoPressItem;

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.white,
    borderRadius: size(6),
    paddingVertical: size(8),
    paddingHorizontal: size(8),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size(6),
  },
  checkbox: {
    width: size(8),
    height: size(8),
    borderRadius: size(4),
    borderWidth: 2,
    borderColor: COLORS.codGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: COLORS.white,
  },
  checkmark: {
    width: size(3),
    height: size(3),
    backgroundColor: COLORS.azureRadiance,
    borderRadius: size(2),
  },
  todoText: {
    flex: 1,
    fontSize: size(8),
    color: COLORS.codGray,
    fontWeight: '500',
  },
  todoTextCompleted: {
    color: COLORS.placeholder,
    textDecorationLine: 'line-through',
  },
});
