import { useCallback, useReducer, useState } from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView, Text, FlatList, View } from '@/elements';
import { COLORS } from '@/ui/colors';
import EmptyComponent from './components/EmptyComponent';
import { size } from '@/ui/size';

import { Todo } from './types';
import TodoItem from './components/TodoItem';
import HeaderTodoList from './components/HeaderTodoList';
import AddTodoInput from './components/AddTodoInput';
import { useSharedValue } from 'react-native-reanimated';
import { initialStore, reducerTodo, ACTIONS } from './store/todo';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [state, dispatch] = useReducer(reducerTodo, initialStore);

  const addTodo = () => {
    const trimNewTodo = newTodo.trim();
    if (trimNewTodo) {
      dispatch({ type: ACTIONS.ADD_TASK, payload: trimNewTodo });
      setNewTodo('');
    }
  };

  const toggleTodo = (itemID: string) => {
    dispatch({ type: ACTIONS.CHECKED_TASK, taskID: itemID });
  };

  const deleteTodo = (itemID: string) => {
    dispatch({ type: ACTIONS.REMOVE_TASK, taskID: itemID });
  };

  const fadeAnim = useSharedValue(1);

  const renderTodoItem = useCallback(
    ({ item, index }: { item: Todo; index: number }) => {
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state.tasks}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <HeaderTodoList todosLength={state.tasks.length} />
            <AddTodoInput
              addTodo={addTodo}
              newTodo={newTodo}
              setNewTodo={setNewTodo}
            />
          </>
        }
        ListEmptyComponent={<EmptyComponent></EmptyComponent>}
      />
    </SafeAreaView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.alabaster,
  },
  listContainer: {
    paddingHorizontal: size(12),
    paddingTop: size(4),
    paddingBottom: size(12),
  },
});
