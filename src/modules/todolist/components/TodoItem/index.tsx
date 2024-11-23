import { memo } from "react";
import {
  View,
  Text,
} from "react-native";
import { Todo } from '../../types';

/* TYPES */
type Props = { item: Todo; index: number };

const TodoItem: React.FC<Props> = ({ item, index }) => {
  return (
    <View><Text>{item.text} {item.completed} {index}</Text></View>
  );
};

export default memo(TodoItem);
