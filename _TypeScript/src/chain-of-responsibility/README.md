```sh
Chain of Responsibility pattern is a behavioral pattern used to achieve loose coupling in software design.

In this pattern, an object is passed to a Successor, and depending on some kind of logic, will or won't be passed onto another successor and processed. There can be any number of different successors and successors can be re-processed recursively.

This process of passing objects through multiple successors is called a chain.

The object that is passed between each successor does not know about which successor will handle it. It is an independent object that may or may not be processed by a particular successor before being passed onto the next.

The chain that the object will pass through is normally dynamic at runtime, although you can hard code the order or start of the chain, so each successor will need to comply with a common interface that allows the object to be received and passed onto the next successor.

Terminology
Handler Interface: A common interface for handling and passing objects through each successor.
Concrete Handler: The class acting as the Successor handling the requests and passing onto the next.
Client: The application or class that initiates the call to the first concrete handler (successor) in the chain.
Chain of Responsibility UML Diagram
Chain of Responsibility Design Pattern

Source Code
In this concept code, a chain is created with a default first successor. A number is passed to a successor, that then does a random test, and depending on the result will modify the number and then pass it onto the next successor. The process is randomized and will end at some point when there are no more successors designated.
```