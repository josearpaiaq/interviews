import { useAccordion, useAccordionItem } from "./AccordionContext";
import styles from "./accordion.module.css";

interface Props {
  children: React.ReactNode;
}

export function AccordionTrigger({ children }: Props) {
  const { activeItem, multiple, setActiveItem } = useAccordion();
  const { value } = useAccordionItem();

  const isOpen = activeItem.includes(value);

  const handleClick = () => {
    if (isOpen) {
      setActiveItem(activeItem.filter((item) => item !== value));
    } else {
      setActiveItem(multiple ? [...activeItem, value] : [value]);
    }
  };

  return (
    <button onClick={handleClick} className={styles.trigger}>
      {children}
      <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
        ▼
      </span>
    </button>
  );
}
