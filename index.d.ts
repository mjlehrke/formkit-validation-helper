/**
 * Generate FormKit validation string from key/value object
 *
 * Only uses the object keys and not the values.
 * ```js
 * { dog: 'Dog', cat: 'Fox' } //=> 'dog,cat'
 * ```
 *
 * @param obj object with key/value pairs
 * @returns FormKit validation string
 *
 * ```js
 * import { generateString } from 'formkit-validation-helper;
 * const selectOptions = { dog: 'Dog', cat: 'Cat', mouse: 'Mouse' };
 * const validationString = generateString(selectOptions) //=> 'dog,cat,mouse'
 * //...
 * :validation="`is:${validationString}`"
 * //...
 * ```
 */
export function generateValidationString(obj: object): string;

/**
 * Generate FormKit validation array from key/value object
 *
 * Only uses the object keys and not the values.
 * ```js
 * { dog: 'Dog', cat: 'Fox' } //=> [['dog'], ['cat']]
 * ```
 *
 * @param obj object with key/value pairs
 * @returns FormKit validation array
 *
 * ```js
 * import { generateArray } from 'formkit-validation-helper;
 * const selectOptions = { dog: 'Dog', cat: 'Cat', mouse: 'Mouse' };
 * const validationArray = generateArray(selectOptions) //=> [['dog'], ['cat'], ['mouse']]
 * //...
 * :validation="[['is', ...validationArray]]"
 * //...
 * ```
 */
export function generateValidationArray(obj: object): string[][];
