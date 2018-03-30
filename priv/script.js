window.onload = () => {
  Array.prototype.forEach.call(
    document.getElementsByTagName('pre'),
    function(el) {hljs.highlightBlock(el, '');
  });
}