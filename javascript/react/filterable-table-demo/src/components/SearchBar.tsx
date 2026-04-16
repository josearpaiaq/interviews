// import { memo } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  console.log("render: SearchBar");
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

// export default memo(SearchBar);