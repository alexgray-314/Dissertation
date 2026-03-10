grammar deal;

COMMENT:        '//' ~[\r\n]* -> skip;

prog:           stmt* EOF ;

stmt:           'define' ((definition ';') | define_function)
                | move ';'
                | 'on' (on_action | on_move | on_interact)
                | for
                | if
                | cancel ';'
                | assign ';'
                | function_call ';'
                | updateTurn ';'
                | log ';'
                | modify ';'
                | show ';'
                | config ;

block:          stmt* ;

player:         '<' ('.' | '@' | term) '>';
VARTYPE:        'int' | 'card' | 'string';

definition:     type=('area' | 'action' | VARTYPE) ID ;

define_function:'function' ID '(' argdef? ')' '{' block '}' ;
argdef:         VARTYPE ID (',' VARTYPE ID)*;

move:           'move' source destination;
source:         (CARD | position | positionset) ;
destination:    position;

on_action:      action_ref '{' block '}';
on_move:        'move' move_catch move_catch '{' block '}';
on_interact:    'interact' move_catch '{' block '}';
for:            'for' ID 'in' set '{' block '}';
if:             'if' bexpr '{' consequent=block '}' ('else' '{' antecedent=block '}')? ;
cancel:         'cancel';
assign:         variable '=' term;
function_call:  ID args;
updateTurn:     '<' '.' '>'  ( '++' | '=' term)  ;
log:            'log' (term)+;
modify:         (position | variable) '.' function_call;
show:           'show' (position | CARD | variable) player;

config:         '$' ID atts;
attribute:      (ID|NUMBER|intset) (ID | STRING | NUMBER | atts);
atts:           '{' (attribute (',' attribute)*)? '}';

variable:       ID;
action_ref:     ID;

args:           '(' (arg (',' arg)*)? ')' ;
arg:            term ;

arearef:        ID | player;
area:           arearef '[' ']';
stack:          arearef '[' term ']';
position:       arearef '[' term ',' term ']'
                | MOVE_SOURCE
                | MOVE_DEST
                | INTERACT_CARD;

MOVE_DEST:      '/';
MOVE_SOURCE:    '\\';
INTERACT_CARD:  '@';

term:           (primitives | CARD | STRING | variable | NUMBER | player | area | stack | position) property? (op=(PLUS|MINUS|TIMES) term)?;
property:       '.' ID;
primitives:     EMPTY | SPADES | HEARTS | CLUBS | DIAMONDS | JACK | QUEEN | KING | ACE;

bexpr:          term (  (('=='|'!='|'<'|'<='|'>='|'>') term)
                        | (('=?' | '!?') set)
                        ) (('||' | '&&') bexpr)?;
PLUS:           '+';
MINUS:          '-';
TIMES:          '*';

set:            (intset | positionset | playerset) property?;
intset:         term (':' term?)?;
positionset:    arearef '[' intset ',' intset ']';
playerset:      '<' '*' '>';

object:         primitives | CARD | STRING | variable | NUMBER | player | area | stack | position | intset | positionset | playerset;

move_catch:     WILDCARD | position | positionset;
WILDCARD:       '?';

EMPTY:          'empty';
SPADES:         'spades';
HEARTS:         'hearts';
CLUBS:          'clubs';
DIAMONDS:       'diamonds';
JACK:           'jack';
QUEEN:          'queen';
KING:           'king';
ACE:            'ace';

NUMBER:         ('-')? [0-9]+ ;
ID:             [a-zA-Z_]+ ;
CARD:           '#' ((('10'|[2-9]|[JjQqKkAa]) [CcHhDdSs]) | JOKER) ;
JOKER:          [jJ][oO][kK][eE][rR];
STRING:         '"' ~["]* '"' ;

SPACES:         [\t\r\n ]+ -> skip;
NEWLINE:        [\r\n]+ -> skip;