# formkit-validation-helper &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mjlehrke/formkit-validation-helper/blob/main/LICENSE)

This helper utility creates a FormKit validation string or array from an object containing key/label pairs.

See the [FormKit validation page](https://formkit.com/essentials/validation) regarding validating fields with the string or array syntax.

## Usage
```js
<script setup>
import { generateValidationString, generateValidationArray } from 'formkit-validation-helper';

const selectOptions = { dog: 'Dog', cat: 'Cat', mouse: 'Mouse' };

const validationString = generateValidationString(selectOptions); //=> 'dog,cat,mouse'
const validationArray = generateValidationArray(selectOptions); //=> [['dog'], ['cat'], ['mouse']]
</script>

<template>
  <FormKit
    type="select"
    name="first_animal"
    label="Animal"
    placeholder="Select first animal"
    :options="selectOptions"
    :validation="`required|is:${validationString}`"
  />

  <!-- OR -->

  <FormKit
    type="select"
    name="second_animal"
    label="Animal"
    placeholder="Select second animal"
    :options="selectOptions"
    :validation="[['required'], ['is', ...validationArray]]"
  />
</template>
```

## Note
Only uses the object keys and not the values.
```js
{ dog: 'Dog', cat: 'Fox' } //=> 'dog,cat'
```
