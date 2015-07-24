skills = [
  {
    name: 'CoffeeScript'
    url: 'http://coffeescript.org'
  }
  {
    name: 'Jade'
    url: 'http://jade-lang.com'
  }
  {
    name: 'Sass'
    url: 'http://sass-lang.com'
  }
  {
    name: 'Gulp'
    url: 'http://gulpjs.com'
  }
  {
    name: 'git'
    url: 'http://git-scm.com'
  }
  {
    name: 'handlebars'
    url: 'http://handlebarsjs.com'
  }
  {
    name: 'node.js'
    url: 'https://nodejs.org'
  }
  {
    name: 'jQuery'
    url: 'https://jquery.com'
  }
  {
    name: 'PHP'
    url: 'http://php.net'
  }
  {
    name: 'Prestashop'
    url: 'https://www.prestashop.com'
  }
  {
    name: 'WordPress'
    url: 'https://wordpress.org'
  }
  {
    name: 'Jasmine'
    url: 'http://jasmine.github.io'
  }
]

Handlebars.registerHelper 'logoapi', (text) ->
  new Handlebars.SafeString(('' + text).replace(/http(s)?:\/\//, ''))


competences = document.querySelector '#competences'
for s in skills
  competences.innerHTML += window.cv.templates.skill s
