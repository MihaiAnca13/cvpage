---
title: "Induction3"
date: "2019-04-19"
summary: "This text will explain what's inside"
---
##Lists

To define a list of items, just put a `*`, a `-`, or a `+` at the start of the line of each item of the list followed by at least a space, to end the list, leave a blank line

* red
* green
* blue

- white
- grey
- black
+ yellow
+ pink
+ orange

You can also define numbered list, putting a number followed by a `.` or a `)` and a space at the start of the line (you may use any number, the first one is taken to start counting, then it will increment by one):
 
3.
2. you may leave blank items
1) or start
1) again

You can insert any block inside a list, you have to respect the indentation of the text of the list item

- A *paragraph* of text
  (spanning multiple lines),
  
  ```
  fenced code,
  ```
   
  > quotes,
   
  - another 
    * list
      + (and so on...),
      
  - ### or 
  
  If you have to insert code in your document you have tree choiches:
  
   1. inline code like this: `*Hello* **world!**"`
   2. fenced code blocks (you may use ` ``` ` or `~~~` 
     as delimiters): 
  ``` markdown
  *Hello* **world!**
  ```
   3. indented code blocks
  
  
      *Hello* 
      
      **world!**
  