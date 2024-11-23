import { memo, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';
import { Swipeable } from 'react-native-gesture-handler';

import { Todo } from '../../types';
import { Pressable } from '@/elements/Pressable';
import { COLORS } from '@/ui/colors';
import { size } from '@/ui/size';

/* TYPES */
type Props = {
  item: Todo;
  fadeAnim: any;
  toggleTodo: (itemID: string) => void;
  deleteTodo: (itemID: string) => void;
};

const TodoItem: React.FC<Props> = ({
  item,
  fadeAnim,
  toggleTodo,
  deleteTodo,
}) => {
  const renderRightActions = useCallback(
    (id: string) => {
      return (
        <Pressable style={styles.deleteAction} onPress={() => deleteTodo(id)}>
          <Text style={styles.deleteActionText}>Delete</Text>
        </Pressable>
      );
    },
    [deleteTodo],
  );

  return (
    <Animated.View
      style={[
        styles.todoItemContainer,
        {
          opacity: fadeAnim.value,
          transform: [
            {
              translateY: interpolate(fadeAnim.value, [0, 1], [50, 0]),
            },
          ],
        },
      ]}
    >
      <Swipeable
        renderRightActions={() => renderRightActions(item.id)}
        overshootRight={false}
      >
        <Pressable style={styles.todoItem} onPress={() => toggleTodo(item.id)}>
          <View style={styles.todoContent}>
            <View
              style={[
                styles.checkbox,
                item.completed && styles.checkboxChecked,
              ]}
            >
              {!!item.completed && <View style={styles.checkmark} />}
            </View>
            <Text
              style={[
                styles.todoText,
                item.completed && styles.todoTextCompleted,
              ]}
              numberOfLines={2}
            >
              {item.text}
            </Text>
          </View>
        </Pressable>
      </Swipeable>
    </Animated.View>
  );
};

export default memo(TodoItem);

const styles = StyleSheet.create({
  todoItemContainer: {
    marginBottom: size(6),
  },
  todoItem: {
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
  deleteAction: {
    backgroundColor: COLORS.redOrange,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderTopRightRadius: size(6),
    borderBottomRightRadius: size(6),
  },
  deleteActionText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: size(8),
  },
});
