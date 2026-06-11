import { orderByProps } from "../app";

test("Сортировка с частичным порядком", () => {
  const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
  expect(orderByProps(obj, ["name", "level"])).toEqual([
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 }
  ]);
});

test("Порядок содержит несуществующие ключи", () => {
  const obj = { a: 1, b: 2 };
  expect(orderByProps(obj, ["c", "b", "a"])).toEqual([
    { key: "b", value: 2 },
    { key: "a", value: 1 }
  ]);
});

test("Пустой объект", () => {
  expect(orderByProps({}, ["any"])).toEqual([]);
});
