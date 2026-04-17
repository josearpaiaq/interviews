import { memo } from "react";
import { useDebouncedCallback } from "../hooks/useDebouncedCallback";
// import { useDebounce } from "../hooks/useDebounce";

interface Props {
  onChange: (value: string) => void;
}

function SearchBar({ onChange }: Props) {
  console.log("render: SearchBar");

  const debouncedCallback = useDebouncedCallback(onChange, 300);

  // const [value, setValue] = useState("");

  // const debouncedValue = useDebounce(value, 300);

  // useEffect(() => {
  //   onChange(debouncedValue);
  // }, [debouncedValue, onChange]);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => debouncedCallback(e.target.value)}
    />
  );
}

export default memo(SearchBar);