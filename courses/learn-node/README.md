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