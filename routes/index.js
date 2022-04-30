'use strict';
module.exports = (db) => {
    var express = require('express');
    var router = express.Router();
    var path = require('path');

    /* GET home page. */
    router.get('/', (req, res) => {
        res.render('index', { title: 'ChemTJ' });
    });

    router.get('/attr', (req, res) => {
        res.render('attr');
    });

    router.get('/wiki', (req, res) => {
        const cas = req.query.cas;
        if (cas == undefined)
            res.render('wiki', { url: '' });
        else
            db.query('select `URL` from `Wiki` where `CAS-RN` = ' + cas + ';',
                (err, rows, fields) => {
                    if (err) throw (err);
                    if (rows.length > 0)
                        res.render('wiki', { url: rows[0].URL });
                    else
                        res.render('wiki', { url: '' });
                });
    })

    router.get('/test', (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/Page1.html'));
    })
    return router;
}
