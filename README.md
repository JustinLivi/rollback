# What the funk is a prunk?

A Prunk is defined as the intersection of the following:

- a Result
- a function which accepts Props and returns a Result
- a function which accepts Props and returns a Promise which resolves with a Result
- a Promise which resolves with a Result
- a Map of keys and Prunks

In typescript that looks like the following:

```typescript
export type PrunkFunc<Props, Result> = (
  props: Props
) => Result | Promise<Result>;

export interface PrunkMap<Props, MapType, Key extends keyof MapType>
  extends Map<Key, Prunk<Props, MapType[Key]>> {}

// the main Prunk type
export type Prunk<Props, Result> =
  | PrunkFunc<Props, Result>
  | Promise<Result>
  | PrunkMap<Props, Result, keyof Result>
  | Result;
```

# Why would I want to use a prunk?

Prunks are mostly useful when accepting configuration for a component or library that may externalize a large portion of business logic based on values not known at the time of configuration.
They're a sort of opt-in callback, where you can either provide a known static value, or provide a callback to defer configuration or add more complex logic.

TODO: add some examples here demonstrating use cases

# Installation

`npm i -s unprunk`

Both typescript and javascript support come out of the box.

# Usage

```javascript
import unprunkWithProps from 'unprunk';

const test = async () => {
  try {
    // props our functional prunks should expect
    const props = { value2: 'value2', value3: 'value3' };
    // unprunk is a function which will do the actual unprunking
    // unprunk will always return a Promise which will resolve with result
    const unprunk = unprunkWithProps(props);
    /**
     * config will equal:
     * {
     *   prop1: 'value1',
     *   prop2: [false, true, 'value2'],
     *   prop3: {
     *     nested: 'value3'
     *   }
     * }
     */
    const config = await unprunk({
      prop1: Promise.resolve('value1'),
      prop2: Promise.resolve([
        false,
        Promise.resolve(true),
        ({ value2 }) => Promise.resolve(value2)
      ]),
      prop3: Promise.resolve({
        nested: ({ value3 }) => value3
      })
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
```

# Why Prunk?

props/promise + func/thunk = prunk

# License

Licensed under [MIT](https://github.com/JustinLivi/prunk/blob/master/LICENSE)
