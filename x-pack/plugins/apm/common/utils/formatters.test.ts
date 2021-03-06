/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { asPercent } from './formatters';

describe('formatters', () => {
  describe('asPercent', () => {
    it('should format as integer when number is above 10', () => {
      expect(asPercent(3725, 10000, 'n/a')).toEqual('37%');
    });

    it('should add a decimal when value is below 10', () => {
      expect(asPercent(0.092, 1)).toEqual('9.2%');
    });

    it('should format when numerator is 0', () => {
      expect(asPercent(0, 1, 'n/a')).toEqual('0%');
    });

    it('should return fallback when denominator is undefined', () => {
      expect(asPercent(3725, undefined, 'n/a')).toEqual('n/a');
    });

    it('should return fallback when denominator is 0 ', () => {
      expect(asPercent(3725, 0, 'n/a')).toEqual('n/a');
    });

    it('should return fallback when numerator or denominator is NaN', () => {
      expect(asPercent(3725, NaN, 'n/a')).toEqual('n/a');
      expect(asPercent(NaN, 10000, 'n/a')).toEqual('n/a');
    });
  });
});
