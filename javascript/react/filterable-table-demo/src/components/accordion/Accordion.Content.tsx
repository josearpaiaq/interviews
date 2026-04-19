import { useAccordion, useAccordionItem } from "./AccordionContext";

interface Props {
  children: React.ReactNode;
}

export function AccordionContent({ children }: Props) {
  const { activeItem } = useAccordion();
  const { value } = useAccordionItem();

  // Solo se renderiza si este item es el activo
  if (!activeItem?.includes(value)) return null;

  return <div>{children}</div>;
}
