// AccordionContext.ts
import { createContext, useContext } from "react";

interface AccordionContextType {
  activeItem: string[];
  multiple: boolean;
  setActiveItem: (value: string[]) => void;
}

interface AccordionItemContextType {
  value: string;
}

export const AccordionContext = createContext<AccordionContextType | null>(
  null,
);
export const AccordionItemContext =
  createContext<AccordionItemContextType | null>(null);

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("useAccordion must be used within <Accordion>");
  return context;
}

export function useAccordionItem() {
  const context = useContext(AccordionItemContext);
  if (!context)
    throw new Error("useAccordionItem must be used within <Accordion.Item>");
  return context;
}
