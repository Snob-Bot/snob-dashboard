const clientId = "1483213399000350870"
const redirect = "https://dashboard.snob.bot/dashboard.html"

const loginBtn = document.getElementById("loginBtn")

loginBtn.onclick = () => {

window.location.href =
`https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirect)}&response_type=token&scope=identify%20guilds`

}
