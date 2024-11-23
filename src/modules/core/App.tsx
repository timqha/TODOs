import { StatusBar } from 'expo-status-bar';
import TodoList from '../todolist/TodoList';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@/ui/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <TodoList />
        <StatusBar style="dark" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
