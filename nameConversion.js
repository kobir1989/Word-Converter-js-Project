let convertBtn = document.querySelector('#convert-btn');
var inputData = document.getElementById('text');
let camelCase = document.querySelector('#camel-case');
let pascalCase = document.querySelector('#pascal-case');
let snakeCase = document.querySelector('#snake-case');
let screamingSnakeCase = document.querySelector('#screaming-snake-case');
let kebabCase = document.querySelector('#kebab-case');
let screamingkebabCase = document.querySelector('#screaming-kebab-case');

const toCamelCase = (str) =>
  str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
const toPascalCase = (str) =>
  (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join('');
const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((s) => s.toLowerCase())
    .join('_');
const toScreamingSnakeCase = (str) =>
  str
    .split(' ')
    .map((character) => {
      if (character == character.toLowerCase()) {
        return '' + character.toUpperCase();
      } else {
        return character;
      }
    })
    .join('_');
const tokebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
const toScreamingkebabCase = (str) =>
  str
    .split(' ')
    .map((character) => {
      if (character == character.toLowerCase()) {
        return '' + character.toUpperCase();
      } else {
        return character;
      }
    })
    .join('-');

const renderToDom = () => {
  camelCase.innerText = toCamelCase(inputData.value);
  pascalCase.innerText = toPascalCase(inputData.value);
  snakeCase.innerText = toSnakeCase(inputData.value);
  screamingSnakeCase.innerText = toScreamingSnakeCase(inputData.value);
  screamingkebabCase.innerText = toScreamingkebabCase(inputData.value);

  kebabCase.innerText = tokebabCase(inputData.value);
};

convertBtn.addEventListener('click', renderToDom);
