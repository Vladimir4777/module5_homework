let x = 1;
if (typeof x === 'number'){
  console.log('х - число');
}else if (typeof x === 'string'){
  console.log('х - строка');
}else if (typeof x === 'boolean'){
  console.log('х - логическое');
}else {
  console.log('х - неопределен');
};