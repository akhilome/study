## Week 1: Web Programming Basics

* WWW is != internet. Think of internet as the hardware, and WWW as the software which runs on the internet.

* URL (Uniform resource locator - specifies the location __and protocol__ for accessing a file on the WWW) is a type of URI (Uniform resource identifier - a unique address of a document on the WWW)

* Content on the web: Static/Dynamic content.

* Broswers are used to access data on the web 

* Browser: 
  * Rendering Engine
  * Dynamic engine
  
* The browser uses HTTP (HyperText Transfer Protocol) to transfer documents.

* Anatomy of an HTTP Request:

  * The request "Verb": which could either be:
    * GET (retrieve resource)  
    * HEAD (retrive only headers)  
    * POST (create resource e.g. form submission).
  * Argument parsed into the "verb"
  * Protocol
  
* Here's an example of an HTTP request: 

```http

GET /example/file-name.ext HTTP/1.1

```

* Up there, `GET` is the _verb_, `/example/file-name.ext` is the _argument_, `HTTP/1.1` is the _protocol_.

* HTTP Status codes:

  * 1XX - information only
  * 2XX - success
  * 3XX - client redirect
  * 4XX - client error
  * 5XX - server error  
  
* For a HTTP Response there's a:

  * Protocol and Status code.
  * Header info
  * Blank line
  * Response body
  
* HTTP reponse example:

```http

HTTP/1.1 200 OK
<!--header info goes here-->

<!--response body goes here-->

```  

* The next couple of videos and lessons in this course this week goes over stuff I've learnt in a previous course -- HTML and CSS. New concepts, if encountered, would be outline here though.

* To create a responsive webpage, a framework such as bootstrap should be used.

* Bootstrap operates on what is known as a _grid_ system.

* Including bootstrap in your project simply involves adding a link to the bootstrap CSS file in the `<head>` section of your HTML page.

* Additionally, a 'mobile-first' framework can be specified in your document using:

```html

<meta name="viewport" content="width=device-width, initial-scale=1">

```
