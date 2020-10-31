

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

