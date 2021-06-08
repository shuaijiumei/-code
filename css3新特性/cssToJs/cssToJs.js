const marvelData = document.querySelector('.marvel-data')

const phone = getComputedStyle(marvelData)
    .getPropertyValue('--normal')

console.log(phone);