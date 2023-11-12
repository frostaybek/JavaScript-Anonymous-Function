function func(){

    console.log("Clicked!");

    $("#text").html("You've Clicked!");

    $("#text").click(function (){

        $("#text").html("Click me and see on console what happens");
        $("#text").off("click");
    });

};