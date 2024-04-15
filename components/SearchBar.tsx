interface IProps {
  onChange: (value: string) => void;
}
const SearchBar = ({ onChange }: IProps) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search"
    />
  );
};

export default SearchBar;
