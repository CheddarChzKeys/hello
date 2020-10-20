function hello(name) {
  //default name is 'world'
  name = name || 'world';
  console.log('Hello, my name is ' + name + '!');
}

hello();
