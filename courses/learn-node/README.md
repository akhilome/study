# Learn Node 

These are my quick notes from Wes Bos' [Learn Node](https://learnnode.com/) course arranged by modules.

**Quick Links:**
* [My Follow Along Repo](https://github.com/akhilome/learn-node/)

## Module 1: Intro & Set Up

* Remember to `npm install` when working with a cloned repo for the first time
* mLab for Mongo DB hosting, MongoDB Compass for querying database
* Environmental variables (typically `xxx.env` files in repo root) - where you store sensitive information like API secrets, tokens and passcodes.
* `.env` files should not be tracked by git, add it to `.gitignore`
* Be sure to install the `dotenv` package from npm, require/import it and configure the appropriate path. Typically: 
```js
import dotenv from 'dotenv';

dotenv.config(); // if the environmental variable file is simply '.env'
// or 
dotenv.config({path: 'variables.env'}); // if the environmental variable file is 'variables.env'

```

## Module 2 => Module 15

Starting from module 4 I started following a self-documenting git-based learning format which I mentioned (here)[https://medium.com/@akhilome/week-5-1acc4a7883c7] and _kind of_ explained (here)[https://github.com/akhilome/learn-node#my-commit-message-template]. Bar those, the headings and bullets which follow contain most of my handwritten notes while traversing the course

### On Routing 

* The request object: `req.query`, `req.params`, `req.body`
* The response object: `res.send()`, `res.json()`, `res.render()`, `res.redirect()`

### On Templating 

* Pug (formerlly known as Jade) was the templating engine used. -- It is indentation based. I.e:

```pug
  div.wrapper
    div.inner
      h2#title A Snippet
      img(src="fine-boy.png" alt="A fine boy")
      p This is a snippet
      button Click Me!
```

translates to:

```html
<div class="wrapper">
  <div class="inner">
    <h2 id="title">A Snippet</h2>
    <img src="fine-boy.png" alt="A fine boy">
    <p>This is a snippet</p>
    <button>Click Me!</button>
  </div>
</div>
```

in 'normal' HTML.

* Javascript code can be written in pug by prefixing the lines with a hypen (-)

### On the MVC Pattern

* M => **Model** - Code written which is stored or accesses the DB. **OR** _Stuff that interacts with fetching data from the database_.
* V => **View** - UI Templates
* C => **Controller** - Code which gets data and puts it into a template. **OR** _Traffic cop sitting in the middle saying "Hey Model, give me some data"_.
* Each controller should be handling a specific function

### On Middlewares

* Middleware functions run after the request, but before the response.
* Again, remember => 
  * req: data comes in
  * res: data goes out
* A middleware can be something like: 

```js
const uselessMiddleware = (req, res, next) => {
  req.remark = "Attach this to request object";
  next(); // passes execution to the next middleware if available.
}
```
* Global middlewares are attached on `app.use()`. They run before the execution even gets to the routes
* Some global middlewares used during this course => 
  * express-validator
  * body-parser
  * passport
  * connect-flash
  * session
  * cookie-parser

### On the rest

See my follow-along repo's [commit history](https://github.com/akhilome/learn-node/commits/master)

# Live Demo

A live version of the app built can be accessed here:

* [now.sh](https://akhilome-learn-node-bdmgdylklo.now.sh/)
* [heroku deployment](https://akhilome-learn-node.herokuapp.com/)
* [digital ocean deployment](http://178.128.184.151) -- wiil most certainly be going down soon; $5/mo is not cheap for me right now for a demo site.
