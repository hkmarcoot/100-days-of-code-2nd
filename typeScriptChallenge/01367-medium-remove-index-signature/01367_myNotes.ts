/*
  1367 - Remove Index Signature
  -------
  by hiroya iizuka (@hiroyaiizuka) #medium #object-keys

  ### Question

  Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

  For example:

  ```ts
  type Foo = {
    [key: string]: any
    foo(): void
  }

  type A = RemoveIndexSignature<Foo> // expected { foo(): void }
  ```

  > View on GitHub: https://tsch.js.org/1367
*/

/* _____________ Your Code Here _____________ */

// type RemoveIndexSignature<T> = {
//   [K in keyof T as
//     /* filters out all 'string' keys */
//     string extends K
//       ? never
//       /* filters out all 'number' keys */
//       : number extends K
//         ? never
//         /* filers out all 'symbol' keys */
//         : symbol extends K
//           ? never
//           : K /* all that's left are literal type keys */
//   ]: T[K]
// }

type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
  0: string;
};

const foobar = Symbol("foobar");
type FooBar = {
  [key: symbol]: any;
  [foobar](): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
];

/* _____________ Further Steps _____________ */
/*
    > Share your solutions: https://tsch.js.org/1367/answer
    > View solutions: https://tsch.js.org/1367/solutions
    > More Challenges: https://tsch.js.org
  */
