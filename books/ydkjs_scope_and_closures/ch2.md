# Lexical Scope

* There are generally two scope models:  

  * Lexical Scope,  
  * Dynamic Scope.  

  Javascript employs the lexical scope model.  

* Lexical scope implies that the scope is defined by author time decisions of where functions are declared.  

* Scope lookups for identifiers/variables begin at the inner-most scope and works its way outward the scope until finds the first match.  

* Some mechanisms like `eval (...)` and `with` can be used to 'cheat' lexical scope in such a way that lexical scope can be modified (or even created) at code runtime instead of the 'ideal' author-time.  

* `eval(...)` modifies an existing lexical scope at runtime while `with` can create a whole new lexical scope at runtime.  

* Using any of the aforementioned mechanisms to 'cheat' lexical scope generally impairs the Javascript engine's ability to perform complile-time optimizations hence reducing the code's performance.  

* Both of the 'cheating' mechanisms donot 'cheat' in Javascript's "strict mode" and due to the perfomance issues presented, they should **not** be used when crafting code.  
