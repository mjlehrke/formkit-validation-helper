import { it, expect } from 'vitest';
import { generateValidationString } from ".";
import { generateValidationArray } from ".";

const options = { dog: 'Dog', cat: 'Cat', mouse: 'Mouse' };

it('should generate validation string', () => {
  expect(generateValidationString(options)).toBe('dog,cat,mouse');
});

it('should generate validation array', () => {
  expect(generateValidationArray(options)).toStrictEqual(
    [['dog'], ['cat'], ['mouse']]
  );
});
