/**
 * Automated Test Suite: Multilingual Translation Parity
 * Run directly with: node tests/translations.test.js
 */

import assert from 'node:assert';
import { translations } from '../js/data/translations.js';

console.log('--- RUNNING TRANSLATION PARITY TESTS ---');

const enKeys = Object.keys(translations.en);
const hiKeys = Object.keys(translations.hi);
const guKeys = Object.keys(translations.gu);

console.log(`Key counts: English (${enKeys.length}), Hindi (${hiKeys.length}), Gujarati (${guKeys.length})`);

// Test 1: Baseline English Keys existence
assert.ok(enKeys.length >= 40, 'English dictionary must contain at least 40 critical UI keys');
assert.ok(translations.en.todaysWorkout, 'Key todaysWorkout must exist in EN');
assert.ok(translations.en.startWorkout, 'Key startWorkout must exist in EN');
assert.ok(translations.en.listen, 'Key listen must exist in EN');
console.log('✔ Test 1 Passed: Core English keys are present.');

// Test 2: Hindi Key Parity
const missingInHi = enKeys.filter(k => !(k in translations.hi));
assert.strictEqual(missingInHi.length, 0, `Hindi dictionary is missing keys: ${missingInHi.join(', ')}`);
console.log('✔ Test 2 Passed: 100% Hindi key parity achieved.');

// Test 3: Gujarati Key Parity
const missingInGu = enKeys.filter(k => !(k in translations.gu));
assert.strictEqual(missingInGu.length, 0, `Gujarati dictionary is missing keys: ${missingInGu.join(', ')}`);
console.log('✔ Test 3 Passed: 100% Gujarati key parity achieved.');

// Test 4: Verify Non-Empty Strings
enKeys.forEach(key => {
  assert.ok(translations.en[key] && translations.en[key].trim().length > 0, `EN key ${key} is empty`);
  assert.ok(translations.hi[key] && translations.hi[key].trim().length > 0, `HI key ${key} is empty`);
  assert.ok(translations.gu[key] && translations.gu[key].trim().length > 0, `GU key ${key} is empty`);
});
console.log('✔ Test 4 Passed: No empty translation strings found.');

console.log('ALL TRANSLATION TESTS PASSED SUCCESSFULLY!\n');
