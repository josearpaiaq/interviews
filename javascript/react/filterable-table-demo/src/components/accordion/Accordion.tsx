import { useState } from "react";
import { AccordionContext } from "./AccordionContext";
import { AccordionItem } from "./Accordion.Item";
import { AccordionTrigger } from "./Accordion.Trigger";
import { AccordionContent } from "./Accordion.Content";

interface Props {
  multiple?: boolean; // Si se permiten varios items abiertos a la vez
  children: React.ReactNode;
}

function Accordion({ multiple = false, children }: Props) {
  const [activeItem, setActiveItem] = useState<string[]>([]);

  // Provee el estado a todos los descendientes
  return (
    <AccordionContext.Provider value={{ activeItem, multiple, setActiveItem }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { Accordion };
