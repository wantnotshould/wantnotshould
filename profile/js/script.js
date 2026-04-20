;(function () {
	document.addEventListener('DOMContentLoaded', function () {
		const originalTitle = document.title || 'CDME'

		const welcomeTitles = ['> ./run', 'npm start', '200 OK', 'git pull']

		document.title = `[Running] ${welcomeTitles[Math.floor(Math.random() * welcomeTitles.length)]}`

		setTimeout(() => {
			document.title = originalTitle
		}, 2000)

		document.addEventListener('visibilitychange', function () {
			if (document.hidden) {
				const hiddenTitles = ['Status: 404', 'SIGSTOP', 'Sleep(∞)', 'Pending...', 'Ctrl+Z']
				document.title = hiddenTitles[Math.floor(Math.random() * hiddenTitles.length)]
			} else {
				document.title = 'Hotfix applied. Welcome back!'

				setTimeout(() => {
					document.title = `stdout > ${originalTitle}`
				}, 1500)

				setTimeout(() => {
					document.title = originalTitle
				}, 3500)
			}
		})

		// window.addEventListener('beforeunload', function (e) {
		// 	document.title = 'throw new Error("Missing you");';
		// 	e.preventDefault()
		// 	e.returnValue = ''
		// })
	})
})()
