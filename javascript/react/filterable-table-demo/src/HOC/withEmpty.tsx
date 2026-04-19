import type { ComponentType } from "react";

interface withEmptyOptions {
  emptyMessage?: string;
}

export default function withEmpty<
  P extends { items: unknown[]; message?: string },
>(Component: ComponentType<P>, options: withEmptyOptions = {}) {
  return function WithEmptyWrapper({
    items,
    message = "No items found",
    ...props
  }: P & {
    items: unknown[];
    message?: string;
  }) {
    const { emptyMessage } = options;

    if (items.length === 0) return <div>{emptyMessage || message}</div>;
    return <Component {...(props as P)} items={items} />;
  };
}
