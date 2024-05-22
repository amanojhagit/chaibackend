require('dotenv').config()
const express = require('express')
const app = express()

const githubData = {
    "login": "amanojhagit",
    "id": 77316389,
    "node_id": "MDQ6VXNlcjc3MzE2Mzg5",
    "avatar_url": "https://avatars.githubusercontent.com/u/77316389?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/amanojhagit",
    "html_url": "https://github.com/amanojhagit",
    "followers_url": "https://api.github.com/users/amanojhagit/followers",
    "following_url": "https://api.github.com/users/amanojhagit/following{/other_user}",
    "gists_url": "https://api.github.com/users/amanojhagit/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/amanojhagit/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/amanojhagit/subscriptions",
    "organizations_url": "https://api.github.com/users/amanojhagit/orgs",
    "repos_url": "https://api.github.com/users/amanojhagit/repos",
    "events_url": "https://api.github.com/users/amanojhagit/events{/privacy}",
    "received_events_url": "https://api.github.com/users/amanojhagit/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Aman Ojha",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-01-12T05:31:43Z",
    "updated_at": "2024-05-22T22:27:17Z"
  }

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('its_amanojha')
})

app.get('/github', (req,res)=>{
    res.json(githubData)
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>This will be a Youtube page</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log('Example app listining on port '+ process.env.PORT)
})