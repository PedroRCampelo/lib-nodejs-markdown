function arrayURLsGenerator(arrayLinks){
    
    const onlyLinks = arrayLinks.map(objectLinks => Object.values(objectLinks));

    return onlyLinks
}

function URLsValidation(arrayLinks){

    return arrayURLsGenerator(arrayLinks)
    // return arrayLinks
}


module.exports = URLsValidation;