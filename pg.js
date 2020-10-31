import './pg.css';

const btnCopyText = document.querySelector('#btn-copy-text');
const btnCopyTable = document.querySelector('#btn-copy-table');

const elText = document.querySelector('p');
const elTable = document.querySelector('table');

const copyEl = (elToBeCopied) => {
  let range, sel;
  
  // Ensure that range and selection are supported by the browsers
  if (document.createRange && window.getSelection) {
    
    range = document.createRange();
    sel = window.getSelection();
    // unselect any element in the page
    sel.removeAllRanges();

    try {
      range.selectNodeContents(elToBeCopied);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(elToBeCopied);
      sel.addRange(range);
    }

    document.execCommand('copy');
  }

  sel.removeAllRanges();

  console.log('Element Copied! Paste it in a file')
};

btnCopyText.addEventListener('click', () => copyEl(elText));
btnCopyTable.addEventListener('click', () => copyEl(elTable));