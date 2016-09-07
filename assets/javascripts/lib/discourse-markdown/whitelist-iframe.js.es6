import {whiteListIframe} from 'pretty-text/sanitizer';

if (Discourse.SiteSettings.whitelist_iframe_plugin_enabled) {
  whiteListIframe(/^https:\/\/www.e-activist.com\/ea-action\/widget\/.+/i);
}
