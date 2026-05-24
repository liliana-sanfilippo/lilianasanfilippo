# Creating new parser from grammar

```
cd grammar/
```

```
npx antlr4ts -visitor AuthorsLexer.g4
```

```
npx antlr4ts -visitor Authors.g4
```

Then copy `AuthorsLexer.ts`, `Authors.ts`, `AuthorsListener.ts` and `AuthorsVisitor.ts` to `src/base`.
