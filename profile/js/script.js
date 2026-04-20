;(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const originalTitle = document.title

    const welcomeTitles = ['> ./run', 'npm start', '200 OK', 'git pull']

    let titleTimeout

    const clearPendingTitle = () => {
      if (titleTimeout) {
        clearTimeout(titleTimeout)
        titleTimeout = null
      }
    }

    document.title = `[Running] ${welcomeTitles[Math.floor(Math.random() * welcomeTitles.length)]}`

    titleTimeout = setTimeout(() => {
      document.title = originalTitle
    }, 2000)

    document.addEventListener('visibilitychange', function () {
      clearPendingTitle()
      if (document.hidden) {
        const hiddenTitles = ['Status: 404', 'SIGSTOP', 'Sleep(∞)', 'Pending...', 'Ctrl+Z']
        document.title = hiddenTitles[Math.floor(Math.random() * hiddenTitles.length)]
      } else {
        document.title = 'Hotfix applied. Welcome back!'

        titleTimeout = setTimeout(() => {
          document.title = `stdout > ${originalTitle}`

          titleTimeout = setTimeout(() => {
            document.title = originalTitle
          }, 2000)
        }, 1500)
      }
    })

    // window.addEventListener('beforeunload', function (e) {
    // 	document.title = 'throw new Error("Missing you");';
    // 	e.preventDefault()
    // 	e.returnValue = ''
    // })
  })
})()
