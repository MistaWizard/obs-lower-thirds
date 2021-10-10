const channel = new BroadcastChannel('my-channel');

channel.onmessage = lowerthird_set = (data) => {
    if (data.data.name === "Stop") {
        timeForNap();
    }
    else {
        $("#lowerthird").hide();
        $("#lowerthird").width(0);
        $("#name").html(data.data.name);
        $("#title").html(data.data.title);
        makeMyMonsterGrow();
    }
}

makeMyMonsterGrow = () => {
    $("#lowerthird").show().animate({
        width: '70%'
    }, 600);

    setTimeout(() => {
        timeForNap();
    }, 20000);
}

timeForNap = () => {
    $("#lowerthird").animate({
        width: '0%'
    }, 600).fadeOut(30);
    // $("#name").empty();
    // $("#title").empty();
}