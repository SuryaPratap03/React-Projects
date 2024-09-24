
const dummyApiResponse = {
    showLightAndDarkMode : false,
    showTicTacToeBoard : true,
    showRandomColorGenerator : true,
    showAccodian : false,
    showTreeView : false,
}

function featureFlagsDataService(){
    return new Promise((resolve,reject)=>{
        if(dummyApiResponse) setTimeout(()=>resolve(dummyApiResponse),500);
        else reject('Some Error Occured ! Please Try Again');
    })
}

export default featureFlagsDataService;
