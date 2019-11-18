# Next.js Tree Shaking


### Environment overview

This environment describes a Next.js project, typed with TypeScript using React Hooks.

Project is organized in this way:
-   `my-next-app` contains a `next-js@9` project
-   `my-comp` contains React SFC using React Hooks
    -   `dist` exposes CommonJs and ES6 bundles
    -   `dist/lib` exposes indipendend CommonJs modules for remote import
-   `my-lib` exposes React Hooks, used by `my-comp` modules
    -   `dist` exposes CommonJs and ES6 bundles

Flag `sideEffects` is set in both `my-comp` and `my-lib` package.json

The `my-comp` library exposes two components: `Counter` and `Useless`.
Counter component is imported by `my-next-app/pages/index` container.
Useless components is imported in `my-next-app/pages/heavy` container, and uses `faker` dependency (which is quite heavy).


#### Issue description

The `heavy` chunk should be the bulky one, but whenever I import the `Counter` component with the square-method, the bulky chunk becames `_app`

| Counter | Useless | Bulky chunk |
| ------- | ------- | ----------- |
|  `{ }`  |  `{ }`  | `_app`      |
|  `{ }`  |  `/./`  | `_app`      |
|  `/./`  |  `{ }`  | `heavy`     |
|  `/./`  |  `/./`  | `heavy`     |


#### Expected behaviour

Using tree shaking, I shouldn't see `faker` dependency in `pages/index`, but I should see it in `pages/heavy` (where `Useless` is used).

This works perfectly with relative import ```import Useless from 'my-comp/dist/lib/Useless'```
```
Page            Size     Files  Packages
┌ ⚡ /           1.58 kB      3         3
├   /_app       224 kB       0         3
├   /_document
├   /_error     1.96 kB      0         3
└ ⚡ /heavy      1.34 MB      2         4
```
As you can see, faker dependency is included only in `/heavy` file (1.34 MB size)

But tree-shake seems not working ```import { Useless } from 'my-comp'```
```
Page            Size     Files  Packages
┌ ⚡ /           430 B        3         4
├   /_app       1.56 MB      0         4
├   /_document
├   /_error     1.96 kB      0         4
└ ⚡ /heavy      436 B        3         4
```
Here faker dependency is now included in `/_app` file (1.56 MB size), while `/heavy` has a simple reference of it.


### Environment setup

Install and link modules to `my-next-app`

```
cd my-next-app
npm install
npm run link
```

You now need to link peerDependencies in cascade mode, so let's move to `my-comp` first and run `npm run link`. Once complete, move to `my-lib` repository and run `npm run link` again.

Now let's run the app and see if it works.

```
npm start
```

Yeah! App runs successfully. Stop the server and let's move on.

##### Warning

If you install a new dependency in any of these repositories, you need to link peerDependencies again in the nested repositories (`my-comp` and `my-lib`).

E.G.: if you install something in `my-next-app`, you need to run `npm run link` in `my-comp` first, and then run `npm run link` in `my-lib`.
If you forget this, you will receive an error like "missing React dependency".
