/*------------------------------------------------------------Renuja Sathnidu---------------------------------------------------------*/

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email    = document.getElementById("email");
const phone    = document.getElementById("phone");
const subject  = document.getElementById("subject");
const mess     = document.getElementById("message");



function sendEmail() {

  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value} <br> Message: ${mess.value}`;

    Email.send({
        SecureToken: "252133c1-9a37-4fd4-9e38-b5fafed92734",   
        To : 'prssilva17@gmail.com',
        From : "prssilva17@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
          Swal.fire({
            title: "Thank you for your feedback!",
            text: "Have a nice day!",
            icon: "success"
          })
        }

      }
    );
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errorTxtEmail = document.querySelector(".error-text.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    }
    else {
      errorTxtEmail.innerText = "Enter address can't be blank";
    }

  }
  else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }

}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    
    if (!fullName.classList.contains("error") && !email.classList.contains("error") &&
    !phone.classList.contains("error") && !subject.classList.contains("error") &&
    !mess.classList.contains("error")) {
      sendEmail();


      form.reset();
      return false;
    }        
    
});


/*      Host : "smtp.elasticemail.com",
        Username : "prssilva17@gmail.com",
        Password : "25BB322C3D9D37EB6C45E10811061CC0AAD9",*/


/*--------------------------------------------------------------Renuja Sathnidu--------------------------------------------------------------*/
