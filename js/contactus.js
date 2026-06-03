/**
 * Purpose: clear form fields after email successfully sends
 */
const form = document.getElementById("contactForm")

async function handleSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)

  try {

    const res = await fetch(e.target.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      form.reset()
    }
  } catch (error) {
    console.error("submit failed:", err)
  }
}

form.addEventListener("submit", handleSubmit);