/**
 * Author: Mr.B
 * Date: 2017/7/7-17:21
 * Last Modified by: Nokey
 */
'use strict';

const path = require('path');
const config = require('../config');

const PAGE_PATH = [],
      ENTRY = {};

config.pages.forEach((e)=>{
    PAGE_PATH.push(e.entry)
})

PAGE_PATH.forEach((page) => {
    ENTRY[page.split("/").join(".")] = path.resolve(__dirname, '../src/pages/' + page + '.js');
});

module.exports = ENTRY;