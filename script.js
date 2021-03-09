

    

function uploadFile() {

    let a = document.getElementById("a");
    let file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
  }