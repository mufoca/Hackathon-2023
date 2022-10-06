
function sendNotification(heading,body,data,tag){
    Notification.requestPermission().then(permissions => {
        if(permissions === "granted"){
            const notification = new Notification(heading,{
                body:body,
                data:data,
                tag:tag,
                icon:'./svg/icons8-notification-58.png'
            })
            notification.addEventListener("error",e =>{
                alert("error");
            })
        }
    })
}

