import {
  useAccordion,
  useAccordionItem,
} from "./AccordionContext";

interface Props {
  children: React.ReactNode;
}

export function AccordionTrigger({ children }: Props) {
  const { activeItem, multiple, setActiveItem } = useAccordion();
  const { value } = useAccordionItem();

  const isOpen = activeItem.includes(value);

  const handleClick = () => {
    if (multiple) {
      setActiveItem(
        isOpen
          ? activeItem.filter((item) => item !== value)
          : [...activeItem, value],
      );
    } else {
      setActiveItem(isOpen ? [] : [value]);
    }
  };

  return (
    <button onClick={handleClick}>
      {children}
      <span>{isOpen ? "▲" : "▼"}</span>
    </button>
  );
}
