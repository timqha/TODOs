import { Pressable as DefaultPressable, PressableProps  } from 'react-native';

export function Pressable(props: PressableProps) {
  const { style,  ...otherProps } = props;

  return <DefaultPressable style={style} {...otherProps} />;
}
