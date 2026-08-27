source 'https://rubygems.org'

gem 'jekyll'

# Core plugins that directly affect site building.
# Gems in this group are auto-required by Bundler, so removing a feature means
# deleting it here as well as from the `plugins:` list in _config.yml.
group :jekyll_plugins do
    gem 'jekyll-3rd-party-libraries'
    gem 'jekyll-cache-bust'
    gem 'jekyll-email-protect'
    gem 'jekyll-imagemagick'
    gem 'jekyll-link-attributes'
    gem 'jekyll-minifier'
    gem 'jekyll-regex-replace'
    # Required even without a bibliography: al_folio_core's page/post layouts
    # reference {% bibliography %}, and Liquid parses those branches either way.
    gem 'jekyll-scholar'
    gem 'jekyll-sitemap'
    gem 'jekyll-socials'
    gem 'jekyll-terser', :git => "https://github.com/RobertoJBeltran/jekyll-terser.git"
    gem 'jekyll-toc'
    gem 'jemoji'
end

# Gems for development or external data fetching (outside :jekyll_plugins)
group :other_plugins do
    gem 'css_parser'
    gem 'observer'       # used by jekyll-scholar
    # gem 'terser'         # used by jekyll-terser
    # gem 'unicode_utils' -- should be already installed by jekyll
    # gem 'webrick' -- should be already installed by jekyll
end

# Gems for al-folio plugins
group :al_folio_plugins do
    gem 'al_folio_core', '= 1.0.15'
    gem 'al_icons', '= 1.0.0'
    gem 'al_folio_distill', '= 1.0.3'
    gem 'al_folio_upgrade', '= 1.0.3'
    gem 'al_cookie', '= 1.0.1'

    gem 'al_analytics', '= 1.0.2'
    gem 'al_img_tools', '= 1.0.3'
    gem 'al_math', '= 1.0.2'

    gem 'al_email_protect', '= 1.0.1'
    gem 'al_rtl', '= 1.0.0'
end
