const element= document.getElementById("heading")
console.log(element)
console.log(_.camelCase('subha'))
console.log(_.camelCase('SUBHA'))
console.log(_.camelCase('--suu-bha--'))
console.log(_.camelCase('__LIP_SA__'))

console.log(_.capitalize('ROHITSHRAF'))

console.log(_.deburr('déjà vu'))

console.log(_.endsWith('subha', 'sri'))//if not then false
console.log(_.endsWith('subha', 'a'))//end letter than true
console.log(_.endsWith('subha', 'a',5))// if no of word is correct than t

console.log(_.escape('subhasri, lipsa, & subha'))

console.log(_.escapeRegExp('[lodash](https://lodash.com/)'))
console.log(_.kebabCase('subha sri'))
console.log(_.kebabCase('subhaSri'))
console.log(_.kebabCase('__SUBHA_SRI__'))


console.log(_.lowerCase('--Varun-Dhawan--'))
console.log(_.lowerCase('subha Sri'))
console.log(_.lowerCase('__SUBHA_SRI__'))

console.log(_.lowerFirst('Lipsa'))
console.log(_.lowerFirst('LIPSA'))

console.log(_.pad('abc', 22))
console.log(_.pad('abc', 20, '_-'))

console.log(_.padEnd('abc', 22, '_-'))
console.log(_.padEnd('abc', 20))

console.log(_.padStart('abc', 22222))
console.log(_.padStart('abc', 20, '_-'))

console.log(_.parseInt('08'))
console.log(_.map(['30', '04', '18'], _.parseInt))

console.log(_.repeat('*', 5))
console.log(_.repeat('subha', 2))
console.log(_.repeat('subha', 0))

console.log(_.replace('Hi subu', 'subu', 'subha'))//it will replace the name subu to subha 
console.log(_.snakeCase('SUBHA SRI'))
console.log(_.snakeCase('subha sri'))

console.log(_.split('a-b-c', '-', 3))

console.log(_.startCase('--subha-sri--'))
console.log(_.startCase('__SUBHA_SRI__'))

console.log(_.startsWith('subha', 's'))
console.log(_.startsWith('subha', 'a'))
//console.log(_.startsWith('subha', 's',1))

console.log(_.toLower('--Subha-Sri--'))
console.log(_.toLower('subhaSri'))
console.log(_.toLower('__SUBHA_SRI__'))

console.log(_.toUpper('subhasri'))
console.log(_.trim('  subha '))
console.log(_.trim('-_-subha-_-', '_-'))
//console.log(_.map(['  subha  ', '  sri  '], _.trim))

console.log(_.trimEnd('  subha  '))
console.log(_.trimEnd('-_-abc-_-', '_-'))

console.log(_.trimStart('  lipsa  '))
console.log(_.trimStart('-_-lipsa-_-', '_-'))

//console.log(_.unescape('fred, barney, &amp; pebbles'))

console.log(_.upperCase('--subha-sri'))
console.log(_.upperCase('subhaSri'))
console.log(_.upperCase('__subhaa_sri__'))

console.log(_.upperFirst('subha'))
console.log(_.upperFirst('SUBHA'))

// console.log(_.words('fred, barney, & pebbles'))
// console.log(_.words('fred, barney, & pebbles'))