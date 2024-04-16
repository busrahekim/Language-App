import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInput,
} from "react-native";

interface IProps {
  onChange: (text: string) => void;
}

const SearchBar = ({ onChange }: IProps) => {
  return (
    <TextInput
      onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
        onChange(e.nativeEvent.text)
      }
      placeholder="Search"
      className="px-4 py-4 bg-gray-300 "
    />
    
  );
};

export default SearchBar;
