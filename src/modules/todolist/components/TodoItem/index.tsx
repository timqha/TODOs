import { memo, useCallback } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { Swipeable } from 'react-native-gesture-handler';

import { Todo } from '../../types';
import { size } from '@/ui/size';
import DeleteButton from './components/DeleteButton';
import TodoPressItem from './components/TodoPressItem';

/* TYPES */
export type TodoItemProps = {
  item: Todo;
  fadeAnim: any;
  toggleTodo: (itemID: string) => void;
  deleteTodo: (itemID: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  fadeAnim,
  toggleTodo,
  deleteTodo,
}) => {
  const renderRightActions = useCallback(
    (id: string) => {
      return <DeleteButton onPress={() => deleteTodo(id)} />;
    },
    [deleteTodo],
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
      transform: [
        {
          translateY: withTiming(fadeAnim.value === 1 ? 0 : 50, {
            duration: 300,
          }),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.todoItemContainer, animatedStyle]}>
      {Platform.OS === 'web' ? (
        <View style={styles.row}>
          {/* <View style={{ alignItems: 'stretch' }}> */}
          <TodoPressItem toggleTodo={toggleTodo} {...item} />
          {/* </View> */}
          <DeleteButton onPress={() => deleteTodo(item.id)} />
        </View>
      ) : (
        <Swipeable
          renderRightActions={() => renderRightActions(item.id)}
          overshootRight={false}
        >
          <TodoPressItem toggleTodo={toggleTodo} {...item} />
        </Swipeable>
      )}
    </Animated.View>
  );
};

export default memo(TodoItem);

const styles = StyleSheet.create({
  todoItemContainer: {
    marginBottom: size(6),
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: size(4),
  },
});
