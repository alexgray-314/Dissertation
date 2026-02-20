grammar deal;

COMMENT:        '//' ~[\r\n]* -> skip;

prog:           stmt* EOF ;
stmt:           (definition | move | on_action | on_move | for | if | cancel | assign | function_call | updateTurn | log | modify | show | config) ';' ;
block:          stmt* ;

player:         '<' ('/' | '.' | '@' | aexpr) '>';

definition:     'define' type=('area' | 'action' | 'int' | 'card') ID args? ;

move:           'move' source destination;
source:         (CARD | position | positionset) ;
destination:    position;

on_action:      'on' ID '{' block '}';
on_move:        'on' 'move' move_catch move_catch '{' block '}';
for:            'for' ID 'in' set '{' block '}';
if:             'if' bexpr '{' consequent=block '}' ('else' '{' antecedent=block '}')? ;
cancel:         'cancel';
assign:         variable '=' term;
function_call:  ID args;
updateTurn:     '<' '.' '>'  ( '++' | '=' player)  ;
log:            'log' (term)+;
modify:         position '..' function_call
                | variable '..' function_call;
show:           'show' (position | CARD | variable) player;

config:         '$' ID atts;
attribute:      (ID|NUMBER|intset) (ID | STRING | atts);
atts:           '{' (attribute (',' attribute)*)? '}';

variable:       ID;

args:           '(' (arg (',' arg)*)? ')' ;
arg:            ID ':' (STRING | NUMBER) ;

arearef:        ID | player;
area:           arearef '[' ']';
stack:          arearef '[' aexpr ']';
position:       arearef '[' aexpr ',' aexpr ']'
                | MOVE_SOURCE
                | MOVE_DEST;

MOVE_DEST:      '/';
MOVE_SOURCE:    '\\';

term:           (EMPTY | CARD | STRING | variable | aexpr | player | area | stack | position) property?;
property:       '.' ID;
EMPTY:          'empty';

bexpr:          term (  (('=='|'!='|'<<'|'<='|'>='|'>>') term)
                        | (('=?' | '!?') set)
                        );
aexpr:          NUMBER | variable (op=(PLUS|MINUS|TIMES) aexpr)*;
PLUS:           '+';
MINUS:          '-';
TIMES:          '*';

set:            (intset | positionset | playerset) property?;
intset:         aexpr ':' aexpr?;
positionset:    arearef '[' intset ',' intset ']';
playerset:      '<' '*' '>';

move_catch:     WILDCARD | position | positionset;
WILDCARD:       '?';

NUMBER:         [0-9]+ ;
ID:             [a-zA-Z_]+ ;
CARD:           '#' ('10'|[2-9]|[JjQqKkAa]) [CcHhDdSs] ;
STRING:         '"' [A-Za-z ]* '"';

SPACES:         [\t\r\n ]+ -> skip;
NEWLINE:        [\r\n]+ -> skip;