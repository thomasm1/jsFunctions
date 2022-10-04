```
The Observer pattern is a software design pattern in which an object, called the Subject (Observable), manages a list of dependents, called Observers, and notifies them automatically of any internal state changes by calling one of their methods.

The Observer pattern follows the publisher/subscribe concept. A subscriber, subscribes to a publisher. The publisher then notifies the subscribers when necessary.

The observer stores state that should be consistent with the subject. The observer only needs to store what is necessary for its own purposes.

A typical place to use the observer pattern is between your application and presentation layers. Your application is the manager of the data and is the single source of truth, and when the data changes, it can update all the subscribers, that could be part of multiple presentation layers. For example, the score was changed in a televised cricket game, so all the web browser clients, mobile phone applications, leaderboard display on the ground and television graphics overlay, can all now have the updated information synchronized.

The Observer pattern allows you to vary subjects and observers independently. You can reuse subjects without reusing their observers, and vice versa. It lets you add observers without modifying the subject or any of the other observers.

The observer pattern is commonly described as a push model, where the subject pushes the update to all observers. But observers can pull for updates and also only if it decides it is necessary.

Whether you decide to use a push or pull concept to move data, then there are pros and cons to each. You may decide to use a combination of both to manage reliability.

E.g., When sending messages across a network, the receiving client, can be slow to receive the full message that was sent, or even timeout. This pushing from the sender's side can increase the amount of network hooks or threads if there are many messages still waiting to be fully delivered. The subject is taking responsibility for the delivery.

On the other hand, if the observer requests for an update from the subscriber, then the subject (observable) can return the information as part of the requests' response. The observer could also indicate as part of the request, to only return data applicable to X, that would then make the response message smaller to transfer at the expense of making the observable more coupled to the observer.

Use a push mechanism from the subject when updates are absolutely required in as close to real time from the perspective of the observer, noting that you may need to manage the potential of extra unresolved resources queuing up at the sender.

If updates on the observer end are allowed to suffer from some delay, then a pull mechanism is most reliable and easiest to manage since it is then the observers responsibly to synchronize its own state.

Terminology
Subject Interface: (Observable Interface) The interface that the subject should implement.
Concrete Subject: (Observable) The object that is the subject.
Observer Interface: The interface that the observer should implement.
Concrete Observer: The object that is the observer. There can be a variable number of observers that can subscribe/unsubscribe during runtime.
Observer UML Diagram
Observer Pattern Overview

Source Code
A Subject (Observable) is created.

Two Observers are created. They could be across a network, but for demonstration purposes are within the same client.

The Subject notifies the Observers.

One of the Observers unsubscribes,

The Subject notifies the remaining Observer again.```