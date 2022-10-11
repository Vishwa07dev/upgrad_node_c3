

/**
 * Simran has to promise Rahul for the marriage
 */

function simranPromiseForMarraige() {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dadAgrees = false ;
            if(dadAgrees){
                console.log("Dad agreed Rahul !");
                resolve();
            }else{
                reject("Papa nai maane, IAS dhoond hi lia !");
            }
        },2000);
    });
}

const rahulWaitForPromise = simranPromiseForMarraige();


rahulWaitForPromise.then(()=>{
    console.log("Destination Wedding in Goa !");
}).catch((msg)=>{
    console.log(msg);
    console.log("Tinder Jindabad !") ;
})