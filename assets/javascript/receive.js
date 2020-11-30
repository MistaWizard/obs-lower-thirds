const channel = new BroadcastChannel('my-channel');

channel.onmessage = lowerthird_set = (data) => {
    // $$('lowerthird').style.visibility = "hidden";
    $("#lowerthird").hide();
    $$('lowerthird').style.width = "0";
    $$('name').innerHTML = data.data.name;
    $$('title').innerHTML = data.data.title;
    slidein($$('lowerthird'), 0)
}

slidein = (object, width) => {
    object.style.width = width + "%";
    // object.style.visibility = "visible";
    $("#lowerthird").show();
    object.style.opacity = 1;
    width = width+10;
    if (width < 80) {
        setTimeout(() => {
            slidein(object, width);
        }, 33);
    }
    else {
        setTimeout(() => {
            // fadeitout(object, 0.9);
            // fadeitout();
            $("#lowerthird").fadeOut(330);
            setTimeout(() => {
                $("#name").empty();
                $("#title").empty();
            }, 400);
        }, 10000);
    }
}

// fadeitout = () => {
// fadeitout = (object, opacity) => {
    // object.style.opacity = opacity;
    // opacity = opacity-.1;
    // if (opacity > 0) {
        // setTimeout(() => {
        //     fadeitout(object, opacity);
        // }, 33);
        // $("#lowerthird").fadeOut(330);
        // setTimeout(() => {
        //     $("#name").empty();
        //     $("#title").empty();
        // }, 400);
    // }
    // else {
    //     // object.style.visibility = "hidden";
    //     $("#lowerthird").hide(33);
    // }
// }

$$ = (f) => {
    return document.getElementById(f);
}