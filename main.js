// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(obj){
    if(obj.userRole === 'ADMIN'){
        return true;
    }else{
        return false;
    }
}

function getEmail(obj){
    return obj.firstName[0].toLowerCase() + obj.lastName.toLowerCase() + '.prsvr@gmail.com'
}

function getPlaylistLength(obj){
    return obj.songs.length
}

function getHardestHomework(arr){
    if(arr.length === 0){
        return '';
    }
    let hardest = arr[0].name;
    let lowestScore = arr[0].averageScore
    for(let i=0; i < arr.length; i++){
        if(arr[i].averageScore < lowestScore){
            lowestScore = arr[i].averageScore;
            hardest = arr[i].name
        }

    }
    return hardest;
}

function createPhonebook(names, numbers){
    let phonebook = {};
   for(let i=0; i < names.length; i++){
        phonebook[names[i]] = numbers[i]
   }
   return phonebook
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};