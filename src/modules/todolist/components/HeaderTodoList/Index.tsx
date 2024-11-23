import { StyleSheet } from 'react-native';
import { View, Text } from '@/elements';
import { COLORS } from '@/ui/colors';
import { size } from '@/ui/size';

/* TYPES */
type Props = {
  todosLength: number;
};

const HeaderTodoList: React.FC<Props> = ({ todosLength }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo</Text>
      <Text style={styles.subtitle}>{todosLength} tasks</Text>
    </View>
  );
};

export default HeaderTodoList;

const styles = StyleSheet.create({
  header: {
    paddingTop: size(10),
    paddingBottom: size(5),
  },
  title: {
    fontSize: size(18),
    fontWeight: '700',
    color: COLORS.codGray,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: size(8),
    color: COLORS.doveGray,
    fontWeight: '500',
  },
});
