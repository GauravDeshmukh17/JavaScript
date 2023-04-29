// default imports
import obj from './temp';
import yolo from './temp';

console.log(obj);
console.log(yolo);

// named imports
import {key as haathi} from './strings';
import {exportedObj} from './strings';

console.log(haathi);
console.log(exportedObj);

import * as bundled from './strings';
console.log(bundled.key);
console.log(bundled.exportedObj);
