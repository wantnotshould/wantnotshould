;(function () {
	document.addEventListener('DOMContentLoaded', () => {
		const themeToggle = document.querySelector('.theme')
		if (themeToggle) {
			themeToggle.addEventListener('click', () => {
				const body = document.body
				const currentTheme = body.getAttribute('data-theme') || 'light'
				const newTheme = currentTheme === 'light' ? 'dark' : 'light'
				body.setAttribute('data-theme', newTheme)
			})
		}

		const yearEl = document.getElementById('year')
		if (yearEl) {
			yearEl.textContent = new Date().getFullYear()
		}

		const appEl = document.getElementById('app')
		if (appEl) {
			appEl.textContent = 'cdme.cn'
		}
	})
})()
