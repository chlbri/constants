import { expectType } from 'tsd';
import { getLiterals, getLiteralsInObject } from './index';

expectType<{ 5: 5; 7: 7; 8: 8 }>(getLiteralsInObject(5, 7, 8));

expectType<{
  object: { AZERTY: 'AZERTY'; 0: 0; 6: 6; string: 'string' };
  array: ['AZERTY', 0, 6, 'string'];
}>(getLiterals('AZERTY', 0, 6, 'string'));
