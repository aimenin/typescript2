// eslint-disable-next-line @typescript-eslint/no-explicit-any
const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): OrderState[] =>
  orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  );