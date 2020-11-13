






### Slot 不能为函数

在 wolfram 中可以定义以 Slot 为 Caller 的函数

```wl
#[a + 1]&
```

但是在 sm 的语法下会产生歧义, 因此无法实现

```sm
% 这个写法可以是乘法也可以是调用
% 如果解释为调用, 万一 # 是整数, 整数不能作为 Caller, 于是就会引发一个错误
% 因此默认行为被解释为乘法
#(a + 1)&

% 如果有需求的话可以手动将他们区分开来
#*(a + 1)&
#@(a + 1)&
```

wolfram 中的 caller 可以是任意的


wolfram 中合法但是 simple math 中非法的例子

```wl
1[2]
True[2]
"2"[2]
```

但 sm 中 caller 必须是 symbol

### 复杂导函数

```wl
f'[x]'[y]
Derivative[1][Derivative[1][f][x]][y]
```

我想不明白要多想不开才会写这样的东西出来

支持这个东西很麻烦而且没有巨大的好处

sm 中的 derivative 是特设模式, 无法扩展


### 多重复合函数

```sm
sin^2(x)

sin^-1(x)
```


```wl
f^2[x]
```




