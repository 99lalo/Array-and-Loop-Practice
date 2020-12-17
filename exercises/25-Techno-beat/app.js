const lyricsGenerator = (array) => {
    let counter = 0;
    let rapper = "";
    array.forEach(function(dj){
        if(dj == 1){
            counter += 1;
            if(counter%3 == 0){
            rapper += "Drop the base !!!Break the base!!! "
            }
            rapper += "Drop the base "
        } else if(dj == 0){
            rapper += "Boom "
            counter = 0;
        }
    })
    return rapper;
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))