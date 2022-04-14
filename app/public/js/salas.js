function selection(event) {
    var value;
    event.preventDefault();
    for(var i = 1; i<6; i++){
        if (document.getElementById(i).checked) {
            value = i;
            window.location.href = "localhost:3000/chat/view/" + i;
          }
    }

}