# What is Scope?

In the first few paragraphs of this chapter, the author is trying to assert the fact that Javascript, although popularly thought of as a dynamic or an interpreted language, is infact mostly a compiled one.  

He goes on to make the case that the Javascript engine, on the fly, compiles the JS code right before it is executed -- usually in microseconds.

This "compilation", he further states, is a 3-step process which comprises:

* Tokenizing/Lexing: involve chunking a string of characters into tokens.

* Parsing: turning a stream of tokens into a tree of nested elements, a tree known as _Abstract Syntax Tree_, or AST for short.

* Code Generation: The process of turning the AST into executable code.

He further asserts other important points which are bulleted below:

* "Behind the scenes", the following components do all the heavylifting of running our code:  
  
  * **Engine**: handles start to finish compilation and code execution.  
  * **Compiler**: responsible for parsing and code generation.  
  * **Scope**: manage a set of rules that determines where and how a variable can be looked up.  

* There are generally two kinds of variable "lookups":  
  
  * **LHS** lookup: for assigning to a variable - *"Who's the target of the assignment?"*.  
  * **RHS** lookup: for retriving the value of a variable - *"Who's the source of the assignment?"*.  

* For traversing a nested scope, the engine begins the lookup at the currently executing scope. If not found, the engine moves one level up and continues the lookup. If still not found, the engine keeps moving one level up the scope until it reaches the global scope. Finally, if the lookup still fails at the global level, the engine throws up an error.

* When the engine is running in 'relaxed'/'non-strict' mode and an LHS lookup done within a nested scope fails - even after searching all scopes accessible to it (including the global scope) - a new variable would be *implicitly* created at the global level and the assignment would be done there.  

* For 'strict' mode, however, both RHS & LHS lookups return a "Reference Error" if the lookup fails after checking all accessible scopes. I.e. No implicit creation of variables in the global scope.  

* `ReferenceError` is scope resolution-failure related, whereas `TypeError` implies that scope resolution was successfull but that there was an illegal/impossible action attempted.  