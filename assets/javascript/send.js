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

function sendIt() {
    buttonName = $(this).attr("name");
    buttonTitle = $(this).attr("title");
    console.log(buttonName);
    channel.postMessage( {
        name: buttonName, title: buttonTitle
    });
}


$(document).on("click", "#buttonNames", sendIt);
