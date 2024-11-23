import { useCallback } from "react";
import { StyleSheet } from "react-native";

import { SafeAreaView, Text, FlatList, View } from "@/elements";
import { COLORS } from "@/ui/colors";
import EmptyComponent from "./components/EmptyComponent";
import { size } from "@/ui/size";

import { Todo } from './types'
import TodoItem from "./components/TodoItem";
import HeaderTodoList from "./components/HeaderTodoList/Index";

const TodoList = () => {
  const todos: Todo[] = [
    {completed: false, text: 'Wash the car', id: '1'},
    {completed: false, text: 'Mow the lawn', id: '2'},
    {completed: false, text: 'Do the washing-up', id: '3'}
  ];

  const renderTodoItem = useCallback(({ item, index }: { item: Todo; index: number }) => {
    return (<TodoItem item={item} index={index} />)
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTodoList todosLength={todos.length} />
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyComponent ></EmptyComponent>
        }
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