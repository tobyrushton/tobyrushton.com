---
title: "How to deploy Go Chi to Vercel"
slug: "how-to-deploy-go-chi-to-vercel"
description: "Learn how to quickly and easily deploy a Go Chi API serverlessly with Vercel."
date: "05-28-2024"
---
## Why Vercel?
Vercel is most commonly known for deploying Javascript frameworks, so why host a Go application on it?
Vercel has an incredibly generious [free tier](https://vercel.com/docs/accounts/plans/hobby#general-features) that allows for 100,000 free serverless invocations.
If you're just building a hobby project, it's unlikely you'd ever exceed this. DNS is also included in this, so you're able to use a custom domain at no extra cost.

## Building the API
First, lets create a new project. I'll call this go-chi-vercel-example.
```bash
mkdir go-chi-vercel-example
```
Lets now initialise our Go project and install Chi
```bash
cd go-chi-vercel-example
go mod init github.com/<YOUR_USERNAME>/go-chi-vercel-example
go get -u github.com/go-chi/chi/v5
```
Now, we'll make our handler
```bash
mkdir handlers && cd handlers
touch hello_world.go
```
We should now have a file structure that looks like this
```
.
├── go.mod
├── go.sum
└── handlers
    └── hello_world.go
```
We'll now create our handler that will be called for our requests.
```go
// handlers/hello_world.go
package handlers

import (
	"net/http"

	"github.com/go-chi/render"
)

type HelloWorldHandler struct{}

func NewHelloWorldHandler() *HelloWorldHandler {
	return &HelloWorldHandler{}
}

func (h *HelloWorldHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	render.JSON(w, r, map[string]string{"hello": "world"})
}
```
Now that our handler has breen creatd, we'll need to create our router to handle the requests.
To do this, we'll be following the [docs](https://vercel.com/docs/functions/runtimes/go) from Vercel. <br>
Lets create our api.
```bash
mkdir api && cd api
touch index.go
```
Let's now build out our Chi router.
```go
// api/index.go
package api

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/<YOUR_USERNAME>/go-chi-vercel-example/handlers"
)

func Handler(w http.ResponseWriter, req *http.Request) {
	r := chi.NewRouter()

	r.Get("/", handlers.NewHelloWorldHandler().ServeHTTP)

	r.ServeHTTP(w, req)
}
```
Now, we need to tell vercel how to interact with this, so we'll create a vercel.json file.
```bash
touch vercel.json
```
Now, add the following into it to tell vercel to redirect all requests to our handler.
```json
{
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/api"
      }
    ]
}
```
Your API is now ready to deploy to Vercel and the final project should look something like this.
```
.
├── api
│   └── index.go
├── go.mod
├── go.sum
├── handlers
│   └── hello_world.go
└── vercel.json
```
View the live version [here](https://go-chi-vercel-example.tobyrushton.com/)
and the repo [here](https://github.com/tobyrushton/go-chi-vercel-example)

## Limitations
As vercel only deploys serverlessly, this may lead to cold starts affecting response time if your API is not used frequently.
Additionally, Go support at Vercel is still in Beta so this may not be safe for any production applications.
