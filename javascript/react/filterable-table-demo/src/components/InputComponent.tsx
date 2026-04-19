import type { ChangeEvent } from "react";

interface Props {
  placeholder: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputComponent({ placeholder, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
}
