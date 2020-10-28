# DFS

https://atcoder.jp/contests/arc106/tasks/arc106_b

連結部分を求めるアルゴリズムを学びました。（解説動画でもスルーされていたので基礎中の基礎なのでしょう...）

```python
n, m = 17, 8
inputs = """-905371741 -999219903 969314057 -989982132 -87720225 -175700172 -993990465 929461728 895449935 -999016241 782467448 -906404298 578539175 9684413 -619191091 -952046546 125053320
-440503430 -997661446 -912471383 -995879434 932992245 -928388880 -616761933 929461728 210953513 -994677396 648190629 -530944122 578539175 9684413 595786809 -952046546 125053320
2 10
6 12
9 11
11 5
7 6
3 15
2 9
10 4"""

import numpy as np

# 隣接リスト
G = { i :[] for i in range(1, n+1)}

# 隣接リスト書き込み

for i in range(m):
    c, d = list(map(int , inputs.split("\n")[i+2].split()))
    G[c].append(d)
    G[d].append(c)

# 深さ優先探索
def dfs(r, c):
    stack = [ ]
    stack.append(r)
    color[r] = c
    while len(stack)>0:
        u = stack.pop()
        for i in range(len(G[u])):
            v = G[u][i]
            if color[v] == NIL:
                color[v] = c
                stack.append(v)
        print(r, "\n",color)

NIL = -1

# assignColor
# 連結しているもの同士は同じ色を塗っていく
id_ = 1
color = np.repeat(-1, repeats=n)

color = {i+1 : -1 for i in range(n)}

for u in range(1, n+1):
    if color[u] == NIL:
        dfs(u, id_)
        id_ += 1
```
