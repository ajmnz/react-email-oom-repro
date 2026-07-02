# React Email Preview OOM Reproduction

Minimal reproduction for a React Email preview hot-reload issue.

Saving one shared component imported by many templates causes `email dev` to
eagerly render every dependent template. With heavier markup, repeated shared
component saves can exhaust the Node heap.

## Reproduce

Install dependencies:

```sh
yarn install
```

Start preview with a deliberately small heap so the issue is deterministic:

```sh
yarn dev:small-heap
```

Open one template:

```text
http://localhost:3000/preview/Email001
```

In another terminal, touch the shared component a few times:

```sh
yarn touch-shared
yarn touch-shared
yarn touch-shared
```

Expected failure:

```text
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

The small heap is only there to make the failure quick. The important behavior
is visible in the preview server logs: saving `emails/components/HeavyShared.jsx`
causes all dependent `Email*.jsx` templates to render, even though only one
preview page is open.

Regenerate the templates with:

```sh
yarn generate
```
