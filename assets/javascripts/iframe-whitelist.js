(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^http:\/\/www\.e-activist\.com\/ea-action\/widget.+/i);
})();
