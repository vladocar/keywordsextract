

keywordsextract - extract keywords from any website
=======================================

Extract keywords with Node.js in the console

* * *

Command line tool for keyword extraction. This Node.js project works mainly with two node modules "node-readability" that filters only the main text clearing the noise from the main text and "gramophone" module that filters the keywords from the texts.


### Install & Use

```shell
$ npm i -g keywordsextract
```

```shell
$ keywordsextract --url https://en.wikipedia.org/wiki/Search_engine_optimization --n 3,4
```
You can use two parameters

--url the url address

--n number of words example:(--n 1,4) means from 1 word to max 4 words;


All the keywords will be displayed in the console and title.txt file will be created with the keywords.

### License

This project is licensed under the MIT License
