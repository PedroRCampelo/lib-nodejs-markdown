const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function handleError(error){

    throw new Error(error.message)
}

async function checkStatus(arrayURLs){
    
    try {
    // needs to be done with promises (async) becouse the response may take a while.
    const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url =>{
                const res = await fetch(url)
                return `${res.status} - ${res.statusText}`;
    }))

    return arrayStatus

    }catch(err){
        handleError(err)
    }

}

function arrayURLsGenerator(arrayLinks){
    
    const onlyLinks = arrayLinks
        .map(objectLinks => Object
            .values(objectLinks).join());
    //.join() - to transform a array in string

    return onlyLinks
}

async function URLsValidation(arrayLinks){

    const links = arrayURLsGenerator(arrayLinks)
    const statusLinks =  await checkStatus(links)

    // spread operator 
    const results = arrayLinks.map((obj, i) => ({
        ...obj,
        status: statusLinks[i]
    }))

    return results;
}

module.exports = URLsValidation; 