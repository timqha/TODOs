import { useCallback, useState } from 'react';
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

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');

  const todos: Todo[] = [
    { completed: false, text: 'Wash the car', id: '1' },
    { completed: true, text: 'Mow the lawn', id: '2' },
    { completed: false, text: 'Do the washing-up', id: '3' },
  ];

  const addTodo = () => {};

  const toggleTodo = (itemID: string) => {};

  const deleteTodo = (itemID: string) => {};

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
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <HeaderTodoList todosLength={todos.length} />
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
