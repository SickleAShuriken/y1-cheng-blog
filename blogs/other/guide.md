---
title: Markdown的使用
date: 2023-02-01
tags:
  - markdown
categories:
  - notes
---

::: tip 摘要
记录 typore 中 markdown 基本用法
:::

# 一级标题 (ctrl + 1)

## 二级标题 (ctrl + 2)

### 标题升级 (ctrl + +)

## 字体

### 加粗 (ctrl + B)

### *倾斜* (ctrl + i)

### <u>下划线</u> (ctrl + u)

### ~~删除线~~

### `内联代码`

## **高亮**

==在内容左右两边输入\=\===

## **代码块**

输入```（在键盘的左上角，1 的旁边）再加上编程语言或者 shell 命令

````java
代码块
    输入```（在键盘的左上角，1的旁边）再加上编程语言或者shell命令，例如：
    ```java(表示要输入Java的代码块)
````

## **列表**
* 无序列表 （输入*和一个空格）
- 无序列表（输入-和一个空格）

## **脚注**
这里有个脚注[^脚注]
==输入[^]在里面加上内容== 

## **分割线**
---
***
1、输入---再按回车就出现分割线

2、输入***再按下回车就出现分割线

## 图片
![TEST](./images/happy.jpg)

## 链接
[JS -- 2023](../JS/2023/23201.md)

## GitHub风格表格
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


<table>
    <thead>
        <tr>
            <th>名称</th>
            <th>值</th>
            <th>备注</th>
        </tr>
    </thead>
    <tbody>
       <!-- 省略 tbody 内容 -->
    </tbody>
</table>

## emoji
:tada: :100:

## 目录
输入[[toc]]