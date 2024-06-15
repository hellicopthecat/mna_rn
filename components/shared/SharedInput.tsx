import {dark, light} from "@/constants/Colors";
import {Noop} from "react-hook-form";
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
  useColorScheme,
} from "react-native";
import styled from "styled-components/native";
interface ISharedInput {
  onBlur: Noop;
  onChangeText: () => void;
  value: any;
  placeholder: string;
  returnkey?: ReturnKeyTypeOptions;
  onSubmit?: () => void;
  refName?: React.MutableRefObject<null>;
  secure?: boolean;
  keyboardType?: KeyboardTypeOptions;
}
const Input = styled(TextInput)`
  width: 100%;
  color: ${(props) => props.theme.txtColor};
  padding: 5px 10px;
  font-size: 18px;
`;

export default function SharedInput({
  onBlur,
  onChangeText,
  value,
  placeholder,
  returnkey = "default",
  onSubmit,
  refName,
  secure = false,
  keyboardType = "default",
}: ISharedInput) {
  const theme = useColorScheme() === "dark";
  return (
    <Input
      ref={refName}
      onBlur={onBlur}
      onChangeText={onChangeText}
      defaultValue={value}
      autoCapitalize="none"
      autoComplete="off"
      secureTextEntry={secure}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={theme ? "white" : "black"}
      style={{
        borderBottomColor: theme ? dark.secondary : light.secondary,
        borderBottomWidth: 0.2,
      }}
      returnKeyType={returnkey}
      onSubmitEditing={onSubmit}
    />
  );
}
