---
title: "How to catch Astro SSR errors during render"
slug: "how-to-catch-astro-ssr-errors"
description: "Create a simple, reusable astro component that can catch ssr errors during the render and display a fallback"
date: "05-08-2024"
---
## The problem
Astro has no built in way to catch errors that happen during the render of SSR components.
While you can use try and catch within a component to handle errors, this can cause the components logic to become complicated.
Many of the component libraries that astro is compatible with do have an error boundary component, once you use it all children have to be of that library which may not be ideal.
In order to deal with this we can create a designated Error Boundary component in astro.

## Solution
The Astro API has a lesser known method for [slot rendering](https://docs.astro.build/en/reference/api-reference/#astroslotsrender) which can be used to render slots within the code block.

```typescript
const html = await Astro.slots.render('default') // renders <slot />
const html = await Astro.slots.render('name') // renders <slot name="name" />
```
We can use this API to attempt to render the default slot and then if it fails catch and render an error element instead. <br>

To do this its as simple as using a try catch:

```astro
---
// ErrorBoundary.astro
let html

try {
    html = await Astro.slots.render('default')
} catch {
    html = await Astro.slots.render('error')
}
---
<Fragment set:html={html} />
```

This can then be used like this:

```astro
<ErrorBoundary>
    <SomeSSRComponent />
    <Fragment slot="error">
        <p>Something went wrong!</p>
    </Fragment>
</ErrorBoundary>
```
> **Note**: This will only catch errors during the server render, errors that occur after this will not be caught.

### Including the error
We may also want to include the error to be used in the logic of the error fallback
To do this we can simply add the error as the 2nd arguement to to our render call.

```astro
---
// ErrorBoundary.astro
let html

try {
    html = await Astro.slots.render('default')
} catch (e) {
    html = await Astro.slots.render('error', [e])
}
---
<Fragment set:html={html} />
```

This now allows us to render a callback method inside the error slot that can take the error as an arguement.

```astro
<ErrorBoundary>
    <SomeSSRComponent />
    <div slot="error">
       {(error: Error) => <p>Something went wrong! Error: {error.message}</p>}
    </div>
</ErrorBoundary>
```
> **Note**: When rendering a callback function, you cannot use the Fragment component or error will be undefined.