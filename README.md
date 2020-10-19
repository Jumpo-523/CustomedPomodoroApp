# Self introduction


- 自己紹介ブログを作成
    - js, vue.jsの勉強をかねてブログを作成してみる。

    - CREATEしてデータを遅れたらよりブログっぽくなるけど、認証キーとかをGitHub側に置いておくわけには行かないし却下かな。
        先駆者がいた。https://uzimihsr.github.io/post/2019-08-07-create-blog-1/

    - CALLBACK関数を理解した！
        https://qiita.com/htanjo/items/360144cab96943050ab2
    - componentごとにmethod, data, el, template,...etcを持たせて個別に開発できる。

    - VueRouterの各key
        - path 
        - component
        - beforeEnter
            - `query: {redirect: to.fullPath}`の解釈
    - そう言えばRouter-linkつけてなくても遷移したのは何で何だろう。
    - Vue component
        ```HTML tag```
            - v-model: HTMl上で変更があった場合即時Vue.componentと同期？
            - v-if
            - v-for
- 遭遇したエラー

    - ```javascript
        this.$route.push("/users")```　is not a function
        【解決】
        - ```javascript
        this.$router.push("/users")```のtypoだった。
        - this.$routeとthis.$routerを混同しているためにおきたミス？
        - どこで宣言されたプロパティ？
        - そもそも'$'に何の意味があるのか？

-  関係ないメモ
    - 草生えない理由
        - https://qiita.com/endo_hizumi/items/49edf021b8b9189b4f88