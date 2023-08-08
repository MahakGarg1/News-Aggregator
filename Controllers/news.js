const express = require('express');
//const getnews = require('express').Router();
const bodyParser = require('body-parser');
const news = express.Router();
const axios = require('axios');
const URLSearchparams = require('url-search-params');
//const {newsArticlesPromise} = require('../Controllers/newshelp');
    
news.use(bodyParser.json());

let url = 'https://newsapi.org/v2/everything';

news.get('/:preference', (req, res) => {
    if(req.user) {
        res.status(200).send({
            preferences: req.user.preferences
        });
    } else {
        if(req.message) {
            res.status(401).send(res.message)
        } else {
            res.status(500).send({
                message: "invalid token"
            })
        }
    }
}
        )

/*newsArticles.get('/:preferences/promise', (req, res) => {
    let preferences = req.params.preferences;
    const searchParams = new URLSearchparams({preferences: preferencesCategory });
    newsArticlesPromise(`${url}?${searchParams}`).then(resp => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(resp);
      }).catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ error: err });
      });
    }); */

  module.exports = news;