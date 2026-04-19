import { AccordionItemContext } from "./AccordionContext";
interface Props {
  value: string;
  children: React.ReactNode;
}

export function AccordionItem({ value, children }: Props) {
  // Provee su propio value a Trigger y Content
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
}
