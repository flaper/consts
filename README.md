# Константы для flaper.org
[![Build Status](https://travis-ci.org/flaper/consts.svg?branch=master)](https://travis-ci.org/flaper/consts) [![npm version](https://badge.fury.io/js/%40flaper%2Fconsts.svg)](https://badge.fury.io/js/%40flaper%2Fconsts)

Установка:

`install @flaper/consts --save`


### Environment
От ENV зависят ссылки для картинок. 
По умолчанию ENV=production.

Чтобы сменить:
```js
import {ConstsApp} from '@flaper/consts';
ConstsApp.setEnv('development');
```
