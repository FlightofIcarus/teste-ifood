async function loadEndPoint (url){
    let apiRequest = await fetch(url, { timeout: 10000 })
    .then(response => response.json())
    .catch(error => console.error('Erro:', error));  

    
    return apiRequest
}
    
    // let apireturn = await loadEndPoint('https://jsonplaceholder.typicode.com/photos');


    // console.log(apireturn);

    export default loadEndPoint;

