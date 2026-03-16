const params = new URLSearchParams(window.location.search)
const code = params.get("code")

fetch(`https://api.snob.bot/callback?code=${code}`)
.then(res => res.json())
.then(data => {

localStorage.setItem(
"snob_guilds",
JSON.stringify(data.guilds)
)

localStorage.setItem(
"snob_user",
JSON.stringify(data.user)
)

window.location.href = "dashboard.html"

})
