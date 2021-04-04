const channel = new BroadcastChannel('my-channel');

channel.onmessage = lowerthird_set = (data) => {
    $("#lowerthird").hide();
    $("#lowerthird").width(0);
    $("#name").html(data.data.name);
    $("#title").html(data.data.title);
    makeMyMonsterGrow();
}

makeMyMonsterGrow = () => {
    $("#lowerthird").show().animate({
        width: '70%'
    }, 600);

    setTimeout(() => {
        $("#lowerthird").animate({
            width: '0%'
        }, 600).fadeOut(30);
        // $("#name").empty();
        // $("#title").empty();
    }, 20000);
}