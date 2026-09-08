/**
 * Purpose: clear form fields after email successfully sends
 */
const form = document.getElementById("contactForm")
const formStatus = document.getElementById("formStatus");
async function handleSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)

  formStatus.textContent = "";
  formStatus.className = "form-status"

  try {

    const res = await fetch(e.target.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      form.reset();
      formStatus.innerHTML = `<p>Thanks for reaching out!</p>`;
      formStatus.classList.add("success");
    } else {
      formStatus.innerHTML = `<p>Something went wrong. Please try again.</p>`;
      formStatus.classList.add("error");
    }
  } catch (error) {
    console.error("submit failed:", error);
    formStatus.innerHTML = `<p>Something went wrong. Please try again.</p>`;
    formStatus.classList.add("error");
  }
}

form.addEventListener("submit", handleSubmit);

form = $('.contact-form');
form.submit(function () {
  $.post(form.attr('action'), $('.contact-form').serialize(), function (data) {
    $(`#success-contact-form`).text("Your email has been sent!").fadeIn().delay(3000).fadeOut();
  }, 'json');
  return false;
});