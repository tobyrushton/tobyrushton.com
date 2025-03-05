---
title: 'Using incremental static regenration with pagination in NextJS 15'
slug: 'using-incremental=static-regeneration-with-pagination-in-nextjs-15'
description: 'Learn how to using incremental static regeneration with pagination in NextJS 15 while using the query parameter.'
date: '02-18-2025'
---

## The problem
While NextJS 15 does support ISR, there is no option to staticly generate a page for it's search parameters.
Generally in pagination we want to use a page searsch param to manage pages. Such as ```example.com/posts?page=5```.

## Solution
In this solution, I'll take you through a basic and simple approach of how to implement this using path parameters.
This will be a generalised approach that anybody can implement into their own project rather than a specific tutorial.
It implies you have knowledge of NextJS routing, middleware and ISR already.

## File structure
In this example, we'll be using a path param to allow for pages to be static regenerated. So we'll be replacing ```/posts?page=5```
with ```/posts/page/5```. However, this will only be internal, we'll use middleware to rewrite the URL on request.
```
src/
└── app/
    ├── posts/
    |   └── page/
    |       └── [number]/
    |             └── page.tsx
    └── middleware.ts
```

## SSG
Now we'll need to generate our static routes. To do this we'll need to fetch all of our pages on build. 
This can be done by defining generateStaticParams() method.
```typescript
// posts/page/[number]/page.tsx
import { FC } from "react"

type PageParams = {
    number: string
}

// your chosen revalidation time here
export const revalidate = 60

export const generateStaticParams = async(): Promise<PageParams[]> => {
    const data = await fetch(/* fetch some data here that get's the total amount of pages */)

    // return all the pages here in some way
    const pages: PageParams = []
    for (let i = 1; i <= data.meta.total_pages; i++) {
        pages.push({ numer: `${i}` })
    }
    return pages
}

const Page: FC<{
    params: Promise<PageParams>
}> = async () => {
    const pageNumber = (await params).number

    // now render this page with the number
}
```

## Middleware
To maintain our use of a search param, we'll need to rewrite the url using middleware so that the page gets it to the write place.
```typescript
// middleware.ts
import { NextResponse } from "next/server"
import type { MiddlewareConfig, NextRequest } from "next/server"

export const middleware = (request: NextRequest): NextResponse => {
    if (request.nextUrl.pathname === "/posts") {
        const pageNumber = request.nextUrl.searchParams.get("page") ?? "1"

        return NextResponse.rewrite(new URL(`/posts/page/${pageNumber}`, request.url))
    }
    return NextResponse.next()
}

export const config: MiddlewareConfig = {
    matcher: "/posts"
}
```

## Moving on
While this solution is handy for if they get to an existing page. It does not take into account if the user tries to go to a page that does not exist.
To handle this you could create a ```not-found.tsx``` file in order to handle this. 
Additionally if your data is dynamic and new pages could get added we could use set the dynamicProps page attribute to true. 
```typescript
export const dynamicProps = true
``` 