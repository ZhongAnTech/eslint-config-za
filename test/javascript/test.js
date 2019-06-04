class Class {
  instanceProperty = 1;

  instancePropertyMethod = () => {
    // ...
  };

  instanceMethod() {
    // ... shold use `this`
    console.info(this);
  }
}

export default Class;
