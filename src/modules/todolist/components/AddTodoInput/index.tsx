/* REACT */
import React, { Dispatch, SetStateAction, useMemo } from "react";
import {
  StyleSheet,
} from "react-native";
import { COLORS } from "@/ui/colors";
import { TextInput, View, Text } from "@/elements";
import { Pressable } from "@/elements/Pressable";
import { size } from "@/ui/size";

/* TYPES */
type Props = {
  newTodo: string;
  setNewTodo: Dispatch<SetStateAction<string>>;
  addTodo: () => void;
};

const ComponentName: React.FC<Props> = ({newTodo, setNewTodo, addTodo}) => {
  const isDisabled = useMemo(() => {
    return !newTodo.trim()
  }, [newTodo]);

  return (
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Add a new task"
          returnKeyType="done"
          onSubmitEditing={addTodo}
          
        />
        <Pressable
          style={[styles.addButton, isDisabled && styles.addButtonDisabled]}
          onPress={addTodo}
          disabled={isDisabled}
        >
          <Text style={[styles.addButtonText, isDisabled && styles.addButtonTextDisabled]}>
            Add
          </Text>
        </Pressable>
      </View>
  );
};

export default ComponentName;

const heightInputBlock = 50;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: size(12),
    paddingVertical: size(8),
    gap: size(6),
  },
  input: {
    flex: 1,
    height: heightInputBlock,
    backgroundColor: COLORS.white,
    borderRadius: size(6),
    paddingHorizontal: size(8),

    fontSize: size(8),
    color: COLORS.codGray,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  addButton: {
    height: heightInputBlock,
    paddingHorizontal: size(12),
    backgroundColor: COLORS.azureRadiance,
    borderRadius: size(6),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.azureRadiance,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  addButtonDisabled: {
    backgroundColor: COLORS.mercury,
    shadowOpacity: 0,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: size(8),
    fontWeight: '600',
  },
  addButtonTextDisabled: {
    color: COLORS.disabledButton,
  },
})