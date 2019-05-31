/* TEMPORARY CODE FOR ACCESSING  API

url = "http://api.icndb.com/jokes" + url + numJokes + "/?firstName=" + $( "input[name='FirstName']" ).val() + "&amp;" + "lastName=" + $( "input[name='SecondName']" ).val();

    $.ajax({
        url: url,
        dataType: "JSON"
    }).done(function(data) {
        var length = data.value.length;
        var joke = "";
        $( ".joke" ).remove();
        $( "br" ).remove();
        for (i = 0; i < length; i++) {
            $('<div class="joke" id="joke'+i+'" style="display: block;"></div><br>').appendTo('.col-6');
            joke = data.value[i].joke;
            if (joke == undefined){
                joke = "";
            }
            $("#joke"+[i]).text(joke);
          }
        $("#joke").fadeIn();
    }).fail(function(data) {
        console.log(data);
    });
});

*/
