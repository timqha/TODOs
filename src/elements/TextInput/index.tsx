import { TextInput as DefaultTextInput } from 'react-native';

export type TextInputProps =  DefaultTextInput['props'];

export function TextInput(props: TextInputProps) {
  const { style,  ...otherProps } = props;

  return <DefaultTextInput style={style} {...otherProps} />;
}
