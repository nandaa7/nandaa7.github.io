document.getElementById('bt1').onclick = async function consulta(){
    let person = await fetch("https://randomuser.me/api/")
                        .then(response => response.json())
                        .then(data => data)
    console.log(person)
    document.getElementById("demo").innerHTML =
        "<img src="+person.results[0].picture.large+" alt='My picture' />"+
        "<br><br><span class='material-symbols-outlined'>person</span>"+
        "<ul><li>Nombre: "+person.results[0].name.first+"</li>"+
        "<br><li>Apellido: "+ person.results[0].name.last+"</li>"+
        "<br><li>Género: "+ person.results[0].gender+"</li>"+
        "<br><li>Nac: "+ person.results[0].dob.date+"</li>"+
        "<br><li>Edad: "+ person.results[0].dob.age+"</li></ul>"+
        "<span class='material-symbols-outlined'>drafts</span>"+
        "<ul><li>E-mail: "+ person.results[0].email+"</li></ul>"+
        "<span class='material-symbols-outlined'>home</span>"+
        "<ul><li>Ciudad: "+ person.results[0].location.city+"</li>"+
        "<br><li>Estado: "+ person.results[0].location.state+"</li>"+
        "<br><li>País: "+ person.results[0].location.country+"</li></ul>";
}

document.getElementById('bt2').onclick = function (){
    document.getElementById("demo").innerHTML =
        "<form action='' method=''> "+ "<p class='parrafo_2'>Ingrese sus datos y será contactado a la brevedad</p>" +
            "<label>Empresa </label>" +
            "<input type='text' name='Empresa' placeholder='Nombre de la Empresa' />"+"<br>" +
            "<label>Nombre </label>" +
            "<input type='text' name='Nombre' placeholder='Ingrese su Nombre' />"+
            "<label> Apellido </label>"+
            "<input type='text' name='Apellido' placeholder='Ingrese su Apellido' />"+
            "<label>Teléfono </label>"+
            "<input type='tel' name='Teléfono' placeholder='Ingrese su Teléfono' />"+
            "<label> E-mail </label>"+
            "<input type='email' name='E-mail' placeholder='Ingrese su E-mail' />"+
            "<input class='botones' type='submit' value='Enviar' />"+
        "</form>";
}
