
$(document).ready(readyNow);

function readyNow() {
    getTestData();
    $('#addPerson').on('click', addPerson);
}//end readyNow

function addPerson() {
    $.ajax({
        type: 'POST',
        url: '/tester',
        data: {//will become req.body
            name: 'Shaokee'
        }
    }).then(function (response) {
        console.log(response);
        //DOM does not reflect array on server, do another GET
        getTestData();
    }).catch(function (error) {
        alert('ERROR IN POST')
    })
};

function getTestData() {
    console.log('in getTestData');
    //AJAX GET Call to /tester
    $.ajax({
        type: 'GET',
        url: '/tester'
    }).then(function (response) {
        console.log('back from the server with:', response);
        //eventually will append to dom...
        appendToDom(response);
    }).catch(function (err) {
        alert('PROBLEM, check console.')
        console.log(err);
    })
}//end getTestData  

function appendToDom(listOfPeople) {
    $('#personList').empty(); //empty outside of for loop, before so not all empties
    //we have more than one person, need for loop
    for (let person of listOfPeople) {
        $('#personList').append(`<li>${person}</li>`)
    }//end for loop
    //Target UL, add each person to DOM

}