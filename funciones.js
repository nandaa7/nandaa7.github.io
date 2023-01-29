async function consulta(){
    let person = await fetch("https://randomuser.me/api/")
                        .then(response => response.json())
                        .then(data => data)
    console.log(person)
    document.getElementById("demo").innerHTML =
        "<img src="+person.results[0].picture.large+">"+
        "<br><br>Nombre: "+person.results[0].name.first+
        "<br><br>Apellido: "+ person.results[0].name.last+
        "<br><br>Género: "+ person.results[0].gender+
        "<br><br>Nac: "+ person.results[0].dob.date+
        "<br><br>Edad: "+ person.results[0].dob.age+
        "<br><br><span class='material-symbols-outlined'>drafts</span>"+
        "<br>E-mail: "+ person.results[0].email+
        "<br><span class='material-symbols-outlined'>home</span>"+
        "<br>Ciudad: "+ person.results[0].location.city+
        "<br><br>Estado: "+ person.results[0].location.state+
        "<br><br>País: "+ person.results[0].location.country;
        //console.log(ajax())
}

consulta()