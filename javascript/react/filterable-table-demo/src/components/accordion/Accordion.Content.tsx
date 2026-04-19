// Accordion.Content.tsx
import { useRef, useEffect } from "react";
import { useAccordion, useAccordionItem } from "./AccordionContext";
import styles from "./accordion.module.css";

interface Props {
  children: React.ReactNode;
}

export function AccordionContent({ children }: Props) {
  const { activeItem } = useAccordion();
  const { value } = useAccordionItem();
  const isOpen = activeItem.includes(value);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      // Expande hasta su altura natural
      el.style.height = `${el.scrollHeight}px`;
    } else {
      // Colapsa a 0
      el.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      style={{
        height: "0px",
        overflow: "hidden",
        transition: "height 300ms ease",
      }}
      className={styles.content}
    >
      <div className={styles.contentInner}>{children}</div>
    </div>
  );
}
