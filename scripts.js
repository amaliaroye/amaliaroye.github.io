const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Add 'active' class if observation target is inside viewport
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('active')
      console.log(entry.target.id)
      document
        .querySelector(`[data-${entry.target.id}]`)
        .classList.add('active')
    }
    // Remove 'active' class otherwise
    else {
      entry.target.classList.remove('active')
      document
        .querySelector(`[data-${entry.target.id}]`)
        .classList.remove('active')
    }
  })
})

// Declares what to observe, and observes its properties.
const sectionElement = document.querySelectorAll('[data-nav-section]')

sectionElement.forEach((element) => {
  observer.observe(element)
})
