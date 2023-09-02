# Petrichor Web3 Labs
A template to start building applcations.
see `todo.md` for remaining tasks

# rdt folder
- some hooks and context related objects are defined
- `componnets/rdt/rdt` needs to be used in `App.tsx` as initial rdt definition (whose value will be used as a context passed down to children elements by RdtProvider)
- subsequently we can use `useRdt` from `componnets/rdt/hooks/useRdt` to consume the `rdt-context`