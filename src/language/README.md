# Run
```
antlr4ts deal.g4 -o ../src/parser 
```
or ...
```
antlr4ts -visitor -o ../src/parser deal.g4
```
if you want more files

# Preview Tree
```
antlr4-parse Expr.g4 prog -gui
<PROGRAM>
ctrl+Z
```