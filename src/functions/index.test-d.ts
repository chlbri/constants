import { expectType } from 'tsd';
import * as TDD from './index';


const lfa1 = TDD.getLiterals(5, 7, 8);
const lfa2 = TDD.getLiterals('AZERTY', 0, 6, 'string');
    

expectType<{ 5: 5; 7: 7; 8: 8 }>(lfa1.object);

expectType<{
  object: { AZERTY: 'AZERTY'; 0: 0; 6: 6; string: 'string' };
  array: ['AZERTY', 0, 6, 'string'];
}>(lfa2);


expectType<[true, true, true, true, true, true, true, true, true, true]>(
  TDD.returnTrueArray(10),
);
