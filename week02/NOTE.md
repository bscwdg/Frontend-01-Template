# week2总结

现代语言分为 词法和语法

## 按语法分类

- 非形式语言
  - 中文 英文
- 形式语言
  - 0型: 无限制文法
    - 等号左边不止一个 <a><b> ::= "c"
  - 1型: 上下文相关文法
    - "a"<b>"c"::="a""x""c"
  - 2型: 上下文无关文法
    - js, 大部分情况是上下文无关
  - 3型: 正则文法
    - 限制表达能力

#### 产生式(BNF) 

- 用尖括号括起来的名称来表示语法的结构名

- 语法结构分为基础结构和需要其他语法结构定义的复合结构 基础结构称终结符 比如：* 复合结构成为非终结符 比如： 1 + 1

- 引号和中间的字符表示终结符

- 可以有括号

- *表示重复多次

- |表示或

- +表示至少一次

  练习：

  ​	

  ```
  "a"
  "b"
  <Program>: = ("a"+ | <Program> "b"+)+
  
  
  整数连加
  "+"
  <Number>: "0" | "1" ... "9"
  <Deciamal>: "0" | (("1" ~ "9") <Number>+)
  <Expression>: <Deciamal> ("+" <Deciamal>)+
  <Expression>: Deciamal | (<Expression> "+" <Deciamal>)
  
  四则运算
  <PrimaryExpression> = <DecimalNumber> |
  "(" <LogicalExpression> ")"
  
  
  <MultiplicativeExpression> = <PrimaryExpression> |
  <MultiplicativeExpression> "*" <PrimaryExpression>|
  <MultiplicativeExpression> "/" <PrimaryExpression>
  
  
  <AdditiveExpression> = <MultiplicativeExpression> |
  <AdditiveExpression> "+" <MultiplicativeExpression>|
  <AdditiveExpression> "-" <MultiplicativeExpression>
  
  逻辑判断
  <LogicalExpression> = <AdditiveExpression> |
  <LogicalExpression> "||" <AdditiveExpression> |
  <LogicalExpression> "&&" <AdditiveExpression>
  ```

## 图灵完备性

- 命令式 -- 图灵机

  - goto
  - if while

- 声明式 -- lambda

  - 递归

  - 分治

    

## 类型系统

- 动态静态
- 强类型弱类型
- 复合类型
- 子类型
  - 逆变/协变

## atom

[Unicode](https://www.fileformat.info/info/unicode/) [中文字符](https://www.fileformat.info/info/unicode/block/cjk_unified_ideographs/index.htm)

可用 `String.fromCharCode(num)` `'\t'.codePointAt()` 进行打印

- javascript 如何处理 emoji 字符
- 为什么不要用中文做变量名, 如何更安全使用中文作为变量名
- "厉".codePointAt(0).toString(16)
- inputElement
  - WhiteSpace: `\v`, `\t`, `nbsp` 无分词效果空格(`/u00A0`), zwnbsp-零宽nbsp
  - LineTerminator
  - Comment
  - Token: 一切有效的东西
    - Punctuator: 符号, 用于构成代码结构
    - IdentifierName: 标识符
      - 变量名: 不可与关键字重合, 特例: `get`, `undefined` 全局不可改变量名
      - 属性名: 可与关键字重合
    - Literal: 直接量
      - NumericLiteral
      - StringLiteral
    - Template
- Type
  - Number: IEEE 754 Double Float
    - 浮点数比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
    - `97 .toString(2)`
  - String
    - USC: U+0000 ~ U+FFFF, unicode 的 BMP 范围
    - GB: 国标
    - 存储方式: UTF8/UTF16
      - UTF8 使用 8 位存储
      - UTF16 使用 18 位存储
    - 引号内的特殊字符 `\'"bfnrtv`
  - Boolean
  - Null
  - Undifined
  - Symbol(代表唯一值)