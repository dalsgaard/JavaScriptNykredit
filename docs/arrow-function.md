# Arrow Function

### Short Syntax

```js
{
  let foo = (a, b) => a + b;
  console.log(foo(2, 4));
}
```

```js
{
  let foo = (a, b) => { a + b; };
  console.log(foo(2, 4));
}
```

```js
{
  let foo = a => a * 2;
  console.log(foo(8));
}
```

### Lexical `this`

```js
{
  var foo = {
    baz: 8,
    bar: function (a) {
      setTimeout(() => {
        console.log(a * this.baz);
      }, 0);
    }
  };
  foo.bar(4);
}
```
