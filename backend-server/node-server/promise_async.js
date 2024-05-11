console.log('start')
async function fetchData() {
    return new Promise ((resolve, reject) => {
        resolve('Data successfully fetch')
        console.log('fetch data')
   })
}

console.log('step 1')
fetchData();
console.log('step 2')


async function fetchDataAndLog(){
    try {
        const data = await fetchData();
        console.log(data)
    } catch (error) {
        console.error(error)        
    }
}

console.log('step 3')
fetchDataAndLog();
console.log('final step')