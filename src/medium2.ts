// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME <T> = T extends (infer U)[] ? U : any;

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): FIXME<typeof component.defaultProps> => {
  return component.defaultProps;
};