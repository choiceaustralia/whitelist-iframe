# name: Iframe Whitelist
# version: 0.1.1
# authors: scossar, rimian

# whitelist raw iframes posted by users

enabled_site_setting :whitelist_iframe_plugin_enabled

register_asset 'javascripts/iframe-whitelist.js', :server_side
