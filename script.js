(function() {

const vertical = [
  ['&uarr;', 'top'],
  ['gg', 'first line'],
  ['?{text}', 'find text'],
  ['H', 'screen'],
  ['{', 'paragraph'],
  ['(', 'sentence'],
  ['k', 'up'],
  ['|', 'cursor'],
  ['j', 'down'],
  [')', 'sentence'],
  ['}', 'paragraph'],
  ['L', 'screen'],
  ['/{text}', 'find text'],
  ['G', 'last line'],
  ['&darr;', 'bottom'],
];

const horizontal = [
  ['&larr;', 'left'],
  ['0', 'line'],
  ['^', 'non blank'],
  ['F{x}', 'find x'],
  ['T{x}', 'till x'],
  ['b', 'word'],
  ['ge', 'end'],
  ['h', 'left'],
  ['l', 'right'],
  ['e', 'end'],
  ['w', 'word'],
  ['t{x}', 'till x'],
  ['f{x}', 'find x'],
  ['$', 'line'],
  ['&rarr;', 'right']
];

const Div = (c, x) => `<div class="${c}">${x}</div>`;
const Col = (c, x) => Div(`col ${c}`, x);
const Row = (c, x) => Div(`row ${c}`, x);

const Key = k => Div('key', k);
const Desc = d => Div('desc', d);
const Shortcut = s => Col('shortcut', Key(s[0]) + Desc(s[1]));
const Shortcuts = sArr => sArr.map(Shortcut).join('');

const top = Col('top', Shortcuts(vertical.slice(0, 6)));
const bottom = Col('bottom', Shortcuts(vertical.slice(6)));
const left = Row('left', Shortcuts(horizontal.slice(0, 7)));
const right = Row('right', Shortcuts(horizontal.slice(7)));

const app = document.getElementById('app');
app.innerHTML = Row('main', left + Col('top-bottom', top + bottom) + right);

})();
