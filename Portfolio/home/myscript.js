var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tab){
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

    document.getElementById(tab).classList.add("active-tab");
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbwPyA7WQM4XrYUs4LHVKWIZUsFNWSFOhxnHQrv0gBLIshCWYT_53cuopeW7JKNDFUaJQg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thank you! We have recived your message"
        setTimeout(function(){
            msg.innerHTML=""
        }, 6000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })