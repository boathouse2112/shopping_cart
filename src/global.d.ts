// Gets typescript to stop crying about css module types.
// Is there a way to do this in tsconfig instead?

declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
