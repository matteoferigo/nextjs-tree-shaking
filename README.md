# Next.js Tree Shaking

### Environment setup

Install and link modules to `my-next-app`

```
cd my-next-app
npm install
npm run link
```

Now let's run the app and see if it works.

```
npm start
```

Yeah! App runs successfully. Stop the server and let's move on.


### Environment overview

This environment describes a Next.js project, typed with TypeScript using React Hooks.

Project is organized in this way:

- `my-next-app` contains a `next-js@9` project
- `my-comp` contains React SFC using React Hooks
- `my-lib` exposes React Hooks, used by `my-comp` modules

Flag `sideEffects` is set in both `my-comp` and `my-lib` package.json

### Issue description

The `my-comp` library exposes two components: Counter and Useless.
Counter component is imported by `my-next-app/pages/index.ts` component, so it should be included in the bundle.
Useless is part of dead-code, and shouldn't be inside the final bundle.


### Bundle analyze

Let's check if tree-shaking works.
Execute `npm run analyze` to run `@next/bundle-analyzer`

##### Known issues

- [ ] Bundle analyzer runs several times (...a lot...)
  - [ ] Only refreshing on `localhost:3000` is possible to get the `build/analyze/client.html` analysis containing the `static/development/pages/index.js` bundle
- [x] Looking at `static/development/pages/index.js` bundle you will see the `my-comp/dist/esm` canvas
  - [x] Bundle includes `my-comp/dist/esm` folder, so ES6 modules are loaded instead of CommonJs modules. This is good!
  - [ ] Ouch! `Useless` component is included (never imported in `my-next-app/pages/index.ts` file, so it shouldn't be here!)
