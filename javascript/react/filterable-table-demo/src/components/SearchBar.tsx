import { memo, useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

interface Props {
  onChange: (value: string) => void;
}

function SearchBar({ onChange }: Props) {
  console.log("render: SearchBar");
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={handleChange}
    />
  );
}

export default memo(SearchBar);