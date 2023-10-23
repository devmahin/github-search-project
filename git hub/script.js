let APIURL = "https://api.github.com/users/";
const profile_right = document.querySelector(".profile_right")
const userInfo = async (username) => {
    let api =await fetch(APIURL + username)
    let data = await api.json();
    // console.log(data)
    const html = `
    <div class="name">
                    <h3>${data.login}</h3>
                    <p>${data.bio}</p>
                </div>
                <div class="flowers_box">
                   <p>${data.followers
                   } Followers</p>
                   <p>${data.following} Following</p>
                   <p>${data.public_repos
                   } Repos</p>
                </div>
                <div class="repo">
                    
                </div>
    `
    profile_right.innerHTML = html
    getrepo(username)
}
userInfo("devmahin")


const getrepo = async (username) => {
    let apiRepo = await fetch(APIURL + username + "/repos")
    let data = await apiRepo.json()
    const repo = document.querySelector(".repo")
    // console.log(data)
    data.forEach(item=> {
        // console.log(item)
        
        const elem = document.createElement("a")
        elem.classList.add("tag")
        elem.href = item.html_url
        elem.target = "_blank"
        elem.innerText = item.name
        repo.appendChild(elem)
    })

}

const btnclick = document.querySelector(".btnclick")
const input = document.querySelector(".input")

btnclick.addEventListener("click", (val) => {
    if(input.value != ""){
        userInfo(input.value)
        input.value = ""
    }
})
const formsubmit = input.addEventListener("keypress", (val) => {
    if (val.key === "Enter") {
        event.preventDefault();
        userInfo(input.value)
        input.value = ""

    }

})
input.addEventListener("focusout", () => {
    if(input.value != ""){
        userInfo(input.value)
        input.value = ""
    }
})
