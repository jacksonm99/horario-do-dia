

function carrega() {
    var msg = window.document.getElementById('msg');
    var img = document.getElementById('foto'); 
    var data = new Date();
    var horario = data.getHours(); 
    var minutos = data.getMinutes();
   
    msg.innerHTML = `A hora atual é <strong>${horario}:${minutos}`;
   

    if(horario>=5 && horario<13){
        img.innerHTML = '<img src="assets/img/manha.jpg">';
        document.body.style.backgroundColor = "#C2EFF2";
    }
        else if(horario>12 && horario<19){
            img.innerHTML = '<img src="assets/img/tarde.jpg">';
            document.body.style.backgroundColor = "#EBC95B";
        }
            else{
                img.innerHTML = '<img src="assets/img/noite.jpg">';
                document.body.style.backgroundColor = "#0C4473";
                document.body.style.color = "#DAA520"
            }
           
                
               
            }
