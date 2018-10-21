#!/usr/bin/env node

var read = require('node-readability'),
    sanitizer = require('sanitizer'),
    keyword = require('gramophone'),
    program = require('commander'),
    urlvalue = "",
    ngramsvalue;

program
    .option('--url, [url]', 'The url')
    .option('--n, [ngrams]', 'Words')
    .parse(process.argv);

if (program.url) urlvalue = program.url;
else process.exit(console.log('Please add --url parameter. Something like this: $ keywordsextract --url https://en.wikipedia.org/wiki/Search_engine_optimization'));

if (program.ngrams) ngramsvalue = program.ngrams
else ngramsvalue = 2, 3;


read(urlvalue, function(err, article, title, meta) {

    var title1 = article.title;
    var total = stripHTML(article.title + " " + article.content);

    var extraction_result = keyword.extract(total, {
        stem: true,
        ngrams: [2, 3]
    });

    console.log(extraction_result);

    var fs = require('fs');
    fs.writeFile(title1 + ".txt", extraction_result, function(err) {
        if (err) {
            return console.log(err);
        }

        console.log(title1 + ".txt file was saved!");
    });

});



function stripHTML(html) {
    var clean = sanitizer.sanitize(html, function(str) {
        return str;
    });

    clean = clean.replace(/<(?:.|\n)*?>/gm, "");
    clean = clean.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/ig, "\n");
    return clean.trim();
}
