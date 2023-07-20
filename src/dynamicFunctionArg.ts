export type Event =
  | {
      type: "LOG_IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "LOG_OUT";
    };

const sendEvent = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends {
    payload: infer TPayload;
  }
    ? [Type, TPayload]
    : [Type]
) => {};

sendEvent("LOG_OUT", {
  is: "2121",
});

sendEvent("LOG_IN", {
  userId: "123",
});

const sendEvent2 = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends {
    payload: infer TPayload;
  }
    ? [Type, TPayload]
    : [Type]
): void => {};

const sendEvent3 = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends {
    payload: infer TPayload;
  }
    ? [Type, TPayload]
    : [Type]
) => {};

sendEvent3("LOG_IN", {});

/**
 *
 *
 *
 * <Type extends Event["type"]>: Это обобщение (generic), которое позволяет нам использовать тип Type, ограниченный только значениями, которые являются типами свойства "type" объектов Event. Это означает, что Type может быть только одним из возможных значений для свойства "type" в объекте Event.
 *
 * ...args: ...: Это используется для объявления аргументов функции. Здесь args - это остаточные параметры, которые позволяют передавать произвольное количество аргументов в функцию.
 *
 * Extract<Event, { type: Type }>: Это условие типа, которое фильтрует тип Event на основе значений свойства "type". Оно выбирает только те типы Event, которые имеют свойство "type" с типом, равным Type.
 *
 * extends { payload: infer TPayload; }: Это также условие типа. Здесь мы проверяем, что выбранный тип Event содержит свойство "payload" с неизвестным типом TPayload.
 *
 * ? [Type, TPayload] : [Type]: Это тернарный оператор, который определяет, какой тип данных будет возвращен функцией. Если условие типа в пункте 5 выполняется (т.е. у типа Event есть свойство "payload"), то функция возвращает кортеж [Type, TPayload], в противном случае возвращается кортеж [Type].
 *
 * Итак, суть функции sendEvent заключается в том, что она принимает тип события Type и его дополнительные данные TPayload (если есть), а затем обрабатывает их. Если Type представляет собой допустимый тип события, и у события есть поле "payload", то функция ожидает передачи двух аргументов: Type и TPayload. Если у события нет поля "payload", то она ожидает передачи только одного аргумента Type.
 */

/**
 Extract<Event, { type: Type }>: Это условие типа, которое выбирает все типы из Event, которые имеют свойство "type" с типом, равным текущему значению Type. Другими словами, оно создает новый тип, который представляет собой подмножество типа Event, где свойство "type" имеет значение Type.
 *
 * extends { payload: infer TPayload; }: Это условие типа, которое проверяет, что выбранный тип (в данном случае, ExtractedType) содержит свойство "payload" с неизвестным типом, который будет представлен типом TPayload. Здесь infer используется для вывода типа (type inference) из свойства "payload". Он позволяет TypeScript автоматически определить тип TPayload на основе переданного типа объекта.
 * Таким образом, выражение Extract<Event, { type: Type }> extends { payload: infer TPayload; } говорит о том, что мы хотим выбрать только те типы событий Event, у которых свойство "type" равно текущему значению Type, и у этих типов есть свойство "payload" с неизвестным типом TPayload.
 *
 *
 */
