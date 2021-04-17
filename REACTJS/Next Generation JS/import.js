import person from './export.js'     // if default export is used & single export

import {baseData} from './export.js'  // no default & single export

import {baseData as bs} from './export.js'  // no default & single export -with aliasing

import * as bundles from './export.js' //multiple exports are in same file
