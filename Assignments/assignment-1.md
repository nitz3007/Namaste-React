## Day 1 Assignments:

### [Q]: What is Emmmet?
Emmet is a plugin which provides shortcut abbreviations for writing HTML, CSS, XML, etc boilerplate code. It comes as a built-in support in VS code. General way to write emmet abbriviation: tagName(series of expression).
- Generating HTML boilerplate code: Simply type '!' and you'll find a popup for emmet. Click on the 'Emmet Abbriviation' option and the html skeleton code will appear on the text editor.
- Elements with text content inside them: To write a div with some text inside it- `div{This is a div}` - will give 
```
<div>This is a div</div>
```
- Nested Elements: To generate nested elements, use '>' operator. Eg, `div>div>h1` produces: 
```
<div>
     <div>
          <h1></h1>
     </div>
</div>
```
- Classes and Id: we can specify Id by using ‘#’ and classes by using ‘.’. Eg, `div#main.container.responsive` gives: 
```
<div id='main' class='container responsive'></div>
```
- Custom attributes: If you want a div with custom data property, try `div[data-name=logo]` will give: 
```
<div data-name="logo"></div>
```
- Generating Siblings: To generate siblings ie, elements at the same level use '+' operator. Eg, `header+div+footer` gives: 
```
<header></header>
<div></div>
<footer></footer>
```
Refer [Emmet Article](https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c/) for more info on Emmet abbriviations.
- - - -    
### Difference between a Library and Framework?
A library and framework both are codes written by someone else which helps us in solving a common problem. The key difference between library and framework is **Inversion of Control**. 
We call library in our code, whenever and wherever we want. Thus, we have the control on the flow of the code.
Whereas, frameworks gives us spaces where we can enter the code and it has the control on the flow of excution of our code. This is inversion of control.
- - - - -
### CDN:
CDN is a group of geographically distributed and interconnected servers. It helps in faster delivery of web content to the user.

It works on the principle of caching where the internet content is temporarily cached and stored on a bunch of servers around the globe. When a user requests for an internet content, eg., video, software, image, etc, the CDN enables faster delivery of the content to user from the server physically nearest to the user.

It is similar to an ATM machine. Imagine, if we have to withdraw/deposit money only by going to the branch of bank where you opened the account. Sounds inconvenient right?  The ATM makes it easy. You can now withdraw money from any city or locality. Same way CDN helps in 

#### How does CDN Works?

CDN relies on 3 types of servers:
- **Origin Server**
  Origin server is the main server where original version of the content gets uploaded. It is the source of truth. It can be owner and managed by the content provider or maybe hosted on the infrastructure of a 3rd party cloud provider.
- **Edge Servers**
  These are the servers distributed across the globe and are called PoPs(Points of Presence). These servers hold cached copies of the content from the origin server and delivers it to the users physically near to this server.
- **DNS Server**
  The DNS server sends the IP address of the nearest edge server to the user(browser) when the request is made. 

Imagine I want to watch a video on youtube whose origin server is in San Francisco, USA. The request goes to the DNS server and it sends back the IP address of the nearest CDN load balancer. The load balancer will calculate and sends the request to the edge server. This edge server either already have the cached version of content and will send it to the user or if the edge server does not have that content, it'll request to the origin server and then the origin server will send back the content to edge server will in turn will deliver it to the user.

#### Major Function of CDN

- **Reduce Latency**
  Latency is the delay in the loading of a page or content. CDN reduces the latency by shortening the distance the content has to travel to reach the user.
  
- **Load Balancing**
  Imagine there is a shortest route from point A to B. If everyone starts taking the same route, there can be traffic congestion at that route. In this case, it is better to take a slightly longer route with lesser traffic. CDN does the same by requesting the content from the edge server with least distance and traffic. This helps the content providers to deliver high demand & large traffic spikes while still avoiding downtime.
- - - - - -

### Why is React known as React?
React is named 'React' because this ibrary was created to be fast & responsive or 'reactive'. So whenever there is a change ith the data, the library should react and make necessary changes in the UI.
- - - - - -

### What is crossorigin in script tag?
A crossorigin attribute sets the mode of request to HTTP CORS request.It handles how to fetch resources(script/data/images/videos) from an
server with different domain.
CORS stands for Cross Origin Resource Sharing. It allows web pages to request resouces from another domain outside their own domain.
```
<script crossorigin="anonymous | use-credentials" src="http://xyz"></script>
```
- - - - - -
### What is diference between React and ReactDOM?

React, at its core, is a library for building User Interface. It introduces the concept of components which  allows user to craft reusable and self-contained UI elements. React operates with a virtual representation of DOM, an abstraction of the actual browser DOM. This virtual DOM helps React to update the DOM effectively when the data changes, making it fast and performant. 

ReactDOM acts as a glue between the Virtual DOM and the actul DOM. It provides methods to render React Component into the DOM. Basically, React returns a UI element/component as an object. ReactDOM renders that object into the DOM by making it understandable for the browser. It offers ReactDOM.render() method which takes a React Component and renders it into the specified DOM Node. 
React DOM is specific to web browsers. 

This separation is made to make React platform-agnostic. We use other libraries like ReactNative(for mobile app) and ReactVR(for VR) along with the React library. 
- - - - - -
### What is difference between react.development.js and react.production.js files via CDN?

**Development Link**
The development link is supposed to be used during the development phase.
It includes additional debugging tools, and helpful warning & error messages.
The file is larger in size and impacts the performance of the application.
It is not ideal for production use.

**Production Link**
The production link is meant to be used during deployment in the production environment.
It does not includes development specific debugging tools, and messages.
The file size is smaller and improves the performance of the application.
Ideal for production use.
- -  - -
### What is async and defer?
Earlier we used to call the script inside the head tag. In this case, the html parsing was stopped in between to download the script and execute it. Once script execution is done. The browser resumed html parsing.

To solve this issue, the outdated solution was to place the script at the end of the body tag so that the html parsing is done first and then the downloading and execution of script takes place.

Nowadays, browser supports async and defer attributes which makes the whole process faster.

**Async** : Async lets browser download the scripts asynchronously while parsing html. Once the script is downloaded, its execution starts without waiting for the html parsing to be done. If there are multiple scripts, they start executing as soon as they are downloaded and thus the scripts are executed irrespective of their order in the document.

**Defer** : Defer lets browser download the script asynchronously along with html parsing but the execution of the script is deferred until the html parsing is finished. Here the scripts are executed in the order they appear in the document.
