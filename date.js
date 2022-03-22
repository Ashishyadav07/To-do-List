 exports.getDate = function (){
    let toDay = new Date();
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",

    };
 
    let day =  toDay.toLocaleDateString("en-US", option);
    return day;
}
