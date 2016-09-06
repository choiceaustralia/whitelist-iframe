(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^https:\/\/www\.e-activist.com\/ea-action\/widget\/.+/i);
})();
