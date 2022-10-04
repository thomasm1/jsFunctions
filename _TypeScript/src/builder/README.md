```
The Builder Pattern is a creational pattern whose intent is to separate the construction of a complex object from its representation so that you can use the same construction process to create different representations.
 
How can a class create different representations of a complex object?
How can a class that includes creating a complex object be simplified?

The Builder and Factory patterns are very similar in the fact they both instantiate new objects at runtime. 
The difference is when the process of creating the object is more complex, so rather than the Factory returning a new instance of ObjectA, it calls the builders' director constructor method ObjectA.construct() that goes through a more complex construction process involving several steps. Both return an Object/Product.

Terminology
Product: The Product being built.
Builder Interface: The Interface that the Concrete builder should implement.
Builder: Provides methods to build and retrieve the concrete product. Implements the Builder Interface.
Director: Has a construct() method that when called creates a customized product using the methods of the Builder.
Builder UML Diagram
Builder Pattern Overview

Source Code
Client creates the Director.
The Client calls the Directors construct() method that manages each step of the build process.
The Director returns the product to the client or alternatively could also provide a method for the client to retrieve it later.
```