import { useCallback, useReducer, useState } from 'react';
import { StyleSheet, Keyboard } from 'react-native';

import { SafeAreaView, FlatList } from '@/elements';
import EmptyComponent from './components/EmptyComponent';
import { size } from '@/ui/size';

import TodoItem from './components/TodoItem';
import HeaderTodoList from './components/HeaderTodoList';
import AddTodoInput from './components/AddTodoInput';
import {
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { initialStore, reducerTodo, ACTIONS } from './store/todo';

import { Todo } from './types';

const TodoList = () => {
  const [state, dispatch] = useReducer(reducerTodo, initialStore);
  const fadeAnim = useSharedValue(1);

  const addTodo = (newTodo: string) => {
    const trimNewTodo = newTodo.trim();
    if (trimNewTodo) {
      dispatch({ type: ACTIONS.ADD_TASK, payload: trimNewTodo });

      Keyboard.dismiss();

      fadeAnim.value = withSequence(
        withTiming(0, { duration: 0 }),
        withTiming(1, { duration: 300 }),
      );
    }
  };

  const toggleTodo = (itemID: string) => {
    dispatch({ type: ACTIONS.CHECKED_TASK, taskID: itemID });
  };

  const deleteTodo = (itemID: string) => {
    dispatch({ type: ACTIONS.REMOVE_TASK, taskID: itemID });
  };

  const renderTodoItem = useCallback(
    ({ item }: { item: Todo }) => {
      return (
        <TodoItem
          deleteTodo={deleteTodo}
          item={item}
          fadeAnim={fadeAnim}
          toggleTodo={toggleTodo}
        />
      );
    },
    [fadeAnim],
  );

  return (
    <SafeAreaView>
      <FlatList
        data={state.tasks}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <HeaderTodoList todosLength={state.tasks.length} />
            <AddTodoInput addTodo={addTodo} />
          </>
        }
        ListEmptyComponent={<EmptyComponent></EmptyComponent>}
      />
    </SafeAreaView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: size(12),
    paddingTop: size(4),
    paddingBottom: size(12),
  },
});
