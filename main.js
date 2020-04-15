function goBack() {
  window.history.back()
}
const form = document.getElementsByTagName('form')
form.addEventListener('submit', contact, false)
function contact(e) {
  // Prevent Default Form Submission
  e.preventDefault()

  let target = e.target || e.srcElement
  let i = 0
  let message = ''

  // Loop Through All Input Fields
  for (i = 0; i < target.length; ++i) {
    // Check to make sure it's a value. Don't need to include Buttons
    if (target[i].type != 'text' && target[i].type != 'textarea') {
      // Skip to next input since this one doesn't match our rules
      continue
    }

    // Add Input Name and value followed by a line break
    message += target[i].name + ': ' + target[i].value + '\r\n'
  }

  // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
  this.submit()
}
