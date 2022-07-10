$(document).ready(() => {

    renderButtons();

});

const channel = new BroadcastChannel('my-channel');

renderButtons = () => {

    $("#theNames").empty();

    names.forEach(i => {
        theButtons = $("<button>").attr("id", "buttonNames").attr("name", i.name).attr("title", i.title).text(i.displayName);
        theList = $("<li>").append(theButtons)
        $("#theNames").append(theList);
        console.log(i.name);
    });

};

set = () => {
    channel.postMessage( { 
        name: $("#name").val(), title: $("#title").val()
    });
};

addName = () => {
    buttonName = $("#name").val();
    buttonTitle = $("#title").val();
    theNewButton = $("<button>").attr("id", "buttonNames").attr("name", buttonName).attr("title", buttonTitle).text(buttonName);
    newName = $("<li>").append(theNewButton)
    $("#theNames").append(newName);
    console.log(newName);
};

function sendIt() {
    buttonName = $(this).attr("name");
    buttonTitle = $(this).attr("title");
    console.log(buttonName);
    channel.postMessage( {
        name: buttonName, title: buttonTitle
    });
}


$(document).on("click", "#buttonNames", sendIt);
