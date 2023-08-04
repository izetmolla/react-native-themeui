export function mergeRefs<T = any>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

export function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}

export function get(
  obj: { [key: string]: any },
  path: string,
  _: any = {}
): any {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    result = result ? result[key] : undefined;
  }
  return result;
}
export function omit(obj: any, ...props: any) {
  const result = { ...obj };
  props.forEach(function (prop: any) {
    delete result[prop];
  });
  return result;
}

export function randomString(length: number) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function omitKeys(obj: any, keys: string[] = []) {
  var target: any = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;

    target[i] = obj[i];
  }

  return target;
}

export function pick(obj: any, ...props: any) {
  return props.reduce(function (result: any, prop: any) {
    if (obj[prop] !== undefined) {
      result[prop] = obj[prop];
    }
    return result;
  }, {});
}

export function flattenObject(obj: any, prefix = ''): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'object' && value !== null) {
        const nestedObj = flattenObject(value, newKey);
        Object.assign(result, nestedObj);
      } else {
        result[newKey] = value;
      }
    }
  }

  return result;
}
