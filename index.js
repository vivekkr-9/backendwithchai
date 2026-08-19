require('dotenv').config()
console.log("Hello backend");
const express = require('express');
const app = express()

const port = 3000

const githubData ={
  "login": "vivekkr-9",
  "id": 221473120,
  "node_id": "U_kgDODTNpYA",
  "avatar_url": "https://avatars.githubusercontent.com/u/221473120?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vivekkr-9",
  "html_url": "https://github.com/vivekkr-9",
  "followers_url": "https://api.github.com/users/vivekkr-9/followers",
  "following_url": "https://api.github.com/users/vivekkr-9/following{/other_user}",
  "gists_url": "https://api.github.com/users/vivekkr-9/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vivekkr-9/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vivekkr-9/subscriptions",
  "organizations_url": "https://api.github.com/users/vivekkr-9/orgs",
  "repos_url": "https://api.github.com/users/vivekkr-9/repos",
  "events_url": "https://api.github.com/users/vivekkr-9/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vivekkr-9/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vivek Kumar",
  "company": null,
  "blog": "",
  "location": "Raipur,Chattisgarh",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-07-18T05:19:38Z",
  "updated_at": "2026-08-19T09:41:06Z"
}

app.get('/github',(req,res)=>{
    res.send(githubData)
})


app.get('/', (req, res) => { //request and response are the parameters of the callback function
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('vivektwitter')
})

app.get('/login',(req, res)=>{
    res.send('<h1>login page of backend project</h1>')
})

app.get('/youtube',(req, res)=>{
    res.send('<h2>backend via youtube<h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
