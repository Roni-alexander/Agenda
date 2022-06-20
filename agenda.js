let url = 'http://www.raydelto.org/agenda.php';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`${data[i].nombre}` + " " +`${data[i].apellido}` + " " + `${data[i].telefono}<br/>`
            }
            document.getElementById('resultado').innerHTML = body
            //console.log(body)
        }
        const form = document.getElementById('form');
        form.addEventListener('submit',function(e){
            
            e.preventDefault()

          var inp_username = document.getElementById('inp_username').value
          var inp_apellido = document.getElementById('inp_apellido').value
          var inp_telefono = document.getElementById('inp_telefono').value
        
            fetch('http://www.raydelto.org/agenda.php',{
                method: 'POST',
                body: JSON.stringify({
                nombre: inp_username,
                apellido: inp_apellido,
                telefono: inp_telefono
            
                }),                                 
            })
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
        })
})  



