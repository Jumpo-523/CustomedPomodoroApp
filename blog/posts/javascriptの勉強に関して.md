

## 対象
- 体系的に学んだことは無いけど、なんとなくjsを使ったことがある人向け。


## まずはこちらをみた方がいい。
<ムーザル チャンネルのリンクを貼る>

ここで、ECMASCRIPTの変遷と、どう言う開発の歴史があるのか、モダンな書き方を知るのがまず最初

- varはもう古いよ。
  - `const` `let`はonly block scopeだけど、varはfunction scope.
  ```js
    function foo(){
      if(true){
          var fruit1 = 'apple';        //exist in function scope
          const fruit2 = 'banana';     //exist in block scope
          let fruit3 = 'strawberry';   //exist in block scope

      }
      console.log(fruit1);
      console.log(fruit2);
      console.log(fruit3);
  }

  foo();
  //result:
  //apple
  //error: fruit2 is not defined
  //error: fruit3 is not defined
  ```
- dictにおける{nameの省力}
- optional chaining
- falsy と undefinedな者の分類分離


## それが終わったら、以下の教材でわからないところを虱潰し。

https://ja.javascript.info/js

【初めて知ったこと。】

- NULL合体演算子(Nullish coalescing operator)
- 二重構文コンストラクタ: new.target : 関数の中では、new.target プロパティを使うことで、それが new で呼ばれたかそうでないかを確認することができます。

- リストは可変長。3つ要素を入れて、101番目に要素を追加することもできる。その場合、４-99のindexには`undefined`が入る。
```js
>>> var a = ['dog', 'cat', 'hen'];
>>> a[100] = 'fox';
>>> a.length; // 101
>>> a
(101) ['dog', 'cat', 'hen', empty × 97, 'fox']
>>> a[11]
undefined
>>> a[1:11]  // pythonみたいにはできない。
>>> a.slice(1, 11)
(11) [2, 34, empty × 9]
>>> a.splice(0,2,9,9,9) // 0番目から2番目までを削除して、９、９、９を代入
[9, 9, 9, empty × 97, 'fox']

```

- LOOPでは、ECMA2015から、
  `for xx of list`の形式が取れる

```
You could also iterate over an array using a for...in loop, however this does not iterate over the array elements, but the array indices. Furthermore, if someone added new properties to Array.prototype, they would also be iterated over by such a loop. Therefore this loop type is not recommended for arrays.```
```
  - ECMAScript 5から
  ```js
  ['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
  });
  ```
  

- いろんな言語のdict形式
```
Dictionaries in Python.
Hashes in Perl and Ruby.
Hash tables in C and C++.
HashMaps in Java.
Associative arrays in PHP.
```
あと、DOMAPIを体系的に知らなかった。これもちゃんと勉強できる教材を日本語で用意してくれているのは本当にありがたい。


参考文献

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

