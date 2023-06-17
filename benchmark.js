import Benchmark from 'benchmark';
import { twMerge } from 'tailwind-merge';
import * as cva from './cva.js';
import * as tvSlots from './tv-slots.js';
import * as tv from './tv.js';

const suite = new Benchmark.Suite();

// add tests
suite
  .add('CVA', function () {
    cva.avatar({ size: 'md' });
    cva.fallback();
    cva.image();
  })
  .add('CVA with tailwind-merge', function () {
    twMerge(cva.avatar({ size: 'md' }));
    twMerge(cva.fallback());
    twMerge(cva.image());
  })
  .add('TV with slots', function () {
    const { base, fallback, image } = tvSlots.avatar({ size: 'md' });
    base();
    fallback();
    image();
  })
  .add('TV without slots', function () {
    tv.avatar({ size: 'md' });
    tv.fallback();
    tv.image();
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });
