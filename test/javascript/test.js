function test() {
  console.log('....');
}

class Class {
  instanceProperty = 1;

  instancePropertyMethod = () => {
    // ...
  };

  @test
  instanceMethod() {
    // ... shold use `this`
    console.info(this);
  }
}

export default Class;
