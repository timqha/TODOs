import { StatusBar } from 'expo-status-bar';
import TodoList from '../todolist/TodoList';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@/ui/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
