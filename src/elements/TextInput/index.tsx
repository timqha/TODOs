import { TextInput as DefaultTextInput } from 'react-native';
import { COLORS } from '@/ui/colors';

export type TextInputProps =  DefaultTextInput['props'];

export function TextInput(props: TextInputProps) {
  const { style,  ...otherProps } = props;

  return <DefaultTextInput style={style} placeholderTextColor={COLORS.placeholder}
  blurOnSubmit={false} {...otherProps} />;
}
