const fetcData = require('../utils/fetchData');

const API = 'https://ricandmortiapi.com/api/character';

fetcData(API)
.then(data => {
    console.log(data.info.count);
    return fetcData(`${API}${data.results[0].id}`)
})
.then(data=>{
    console.log(dat.name)
    return fetcData(data.origin.url)

})
.then(data=>{
    console.log(data.dimension)
})
.catch(err => console.error(err))