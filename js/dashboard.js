const guilds =
JSON.parse(localStorage.getItem("snob_guilds"))

const container =
document.getElementById("servers")

guilds.forEach(guild => {

const div = document.createElement("div")

div.className = "server"

div.innerHTML = `
<h3>${guild.name}</h3>
<p>ID: ${guild.id}</p>
<button onclick="openServer('${guild.id}')">
Manage Server
</button>
`

container.appendChild(div)

})

function openServer(id) {

window.location.href =
`server.html?id=${id}`

}
