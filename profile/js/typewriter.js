;(function () {
  const initTypewriter = async (el, options = {}) => {
    if (!el) return

    const {
      text = el.innerText || '',
      speed = 100,
      delay = 500,
      loop = false,
      loopDelay = 2000,
    } = options

    if (el.dataset.typing === 'true') return
    el.dataset.typing = 'true'

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const run = async () => {
      await sleep(delay)
      el.innerHTML = ''

      for (let i = 0; i < text.length; i++) {
        const char = text[i]
        if (char === ' ') {
          el.innerHTML += '&nbsp;'
        } else {
          const span = document.createElement('span')
          span.textContent = char
          el.appendChild(span)
        }
        await sleep(speed)
      }

      if (loop) {
        await sleep(loopDelay)
        run()
      } else {
        delete el.dataset.typing
      }
    }

    run()
  }

  document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.cd-me')

    if (el) {
      initTypewriter(el, {
        text: 'cd me',
        speed: 150,
        delay: 800,
        loop: false,
        loopDelay: 3000,
      })
    }
  })
})()
