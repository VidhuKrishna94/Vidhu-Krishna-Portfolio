function sendMail()
    {
      console.log("hai");
      // emailjs.send("service_ni6qvio","template_vd6lk12",{
      //   name:  document.getElementById("name").value,
      //   message:  document.getElementById("message").value,
      //   subject:  document.getElementById("subject").value,
      //   });
      let parms={
       name : document.getElementById("name").value,
       email : document.getElementById("email").value,
       subject : document.getElementById("subject").value,
       message : document.getElementById("message").value,

      }
      emailjs.send("service_ni6qvio","template_vd6lk12",parms).then(alert("Email Sent!!"))
    }