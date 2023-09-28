
$('.contactForm').submit(function (evento) {
    evento.preventDefault();
    console.log(evento);
    console.log($(this));
  
    let objectForm = $(this),
      sendMethod = objectForm.attr('method'),
      sendUrl = objectForm.attr('action'),
      sendData = {};
  
    objectForm.find("[name]").each(function (index, formItem) {
      console.log(index, formItem);
  
      let item = $(this),
        name = item.attr('name'),
        nameValue = item.val();
  
      sendData[name] = nameValue;
    });
  
    console.log(sendData);
  
    $.ajax({
      method: sendMethod,
      url: sendUrl,
      dataType: 'json',
      accepts: 'application/json',
      data: sendData,
  
      success: (data) => {
        console.log(data);
        Swal.fire({
          title: "Tu información ha sido enviada con éxito!",
          text: "Gracias por contactarme, en un momento me pondre en contacto contigo.",
          icon: "success",
          position: "center",
          showConfirmButton: true,
          confirmButtonColor: "color: #EF3724",
        });
        /* alert("Formulario enviado");*/
        $('.contactForm')[0].reset(); 
      },
      error: (err) => {
        Swal.fire({
          title: "Lo siento, hay un error con el servidor de mensajes.",
          text: "Por favor intentalo mas tarde!",
          icon: "error",
          position: "center",
          showConfirmButton: true,
          confirmButtonColor: "color: #EF3724",
        });
      }
    });
  });