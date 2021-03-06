/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+perf_viz
 * @flow strict-local
 * @format
 */
'use strict';

const cacheWithReferenceEquality = require('../Recoil_cacheWithReferenceEquality');

test('cacheWithReferenceEquality - set string', () => {
  const cache = cacheWithReferenceEquality();
  expect(cache.get('a')).toBe(undefined);
  cache.set('a', 1);
  expect(cache.get('a')).toBe(1);
  expect(cache.get('b')).toBe(undefined);
  cache.set('b', 2);
  expect(cache.get('a')).toBe(1);
  expect(cache.get('b')).toBe(2);
});

test('cacheWithReferenceEquality - set object', () => {
  const cache = cacheWithReferenceEquality();
  const fooA1 = {foo: 'a'};
  const fooA2 = {foo: 'a'};

  expect(cache.get(fooA1)).toBe(undefined);
  cache.set(fooA1, 1);
  expect(cache.get(fooA1)).toBe(1);
  // Override with a new instance
  cache.set(fooA2, 2);
  expect(cache.get(fooA1)).toBe(1);
  expect(cache.get(fooA2)).toBe(2);
});
