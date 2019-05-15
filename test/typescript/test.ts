export default interface Interface {
  member: string;
}

export class Class {
  instanceProperty = 1;

  instancePropertyMethod = () => {
    // ...
  };

  instanceMethod() {
    // ... shold use `this`
    console.info(this);
  }
}

// // eslint rule: arrow-parens
// // typescript-eslint <= 1.9.0，目前对 arrow-parens 支持不足，待修复
// const bar1 = <T>(t: T) => {
//   console.info(t);
// };

// // eslint rule: space-before-function-paren
// // typescript-eslint <= 1.9.0，目前对 space-before-function-paren 支持不足，待修复
// const bar2 = function <T>(t: T) {
//   console.info(t);
// };
