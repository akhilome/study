# What is Scope?

In the first few paragraphs of this chapter, the author is trying to assert the fact that Javascript, although popularly thought of as a dynamic or an interpreted language, is infact mostly a compiled one.  

He goes on to make the case that the Javascript engine, on the fly, compiles the JS code right before it is executed -- usually in microseconds.

This "compilation", he further states, is a 3-step process which comprises:

* Tokenizing/Lexing: involve chunking a string of characters into tokens.

* Parsing: turning a stream of tokens into a tree of nested elements, a tree known as _Abstract Syntax Tree_, or AST for short.

* Code Generation: The process of turning the AST into executable code.