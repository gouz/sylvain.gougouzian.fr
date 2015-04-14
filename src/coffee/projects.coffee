projects = [
  {
    name: 'FlubJS - a goo menu'
    url: 'http://gouz.github.io/flubjs/'
    img: 'flubjs'
  }
  {
    name: 'Gulp - WebEnVert'
    url: 'http://slides.com/gouz/gulp'
    img: 'gulp'
  }
  {
    name: 'moodular - a framework carrousel'
    url: 'http://www.gougouzian.fr/projects/jquery/moodular/'
    img: 'moodular'
  }
  {
    name: 'dylay - a dynamic layout jquery plugin'
    url: 'http://www.gougouzian.fr/projects/jquery/dylay/'
    img: 'dylay'
  }
  {
    name: 'masis - a tiny toolkit'
    url: 'http://github.com/gouz/masis'
    img: 'masis'
  }
  {
    name: 'SoFresh'
    url: 'http://sofresh.redpik.net/'
    img: 'sofresh'
  }
  {
    name: 'axome.com - libs js'
    url: 'http://axome.com'
    img: 'axome'
  }
  {
    name: 'neeed.com - snippet & js'
    url: 'http://neeed.com'
    img: 'neeed'
  }
]
portfolio = document.querySelector '#projects'
for p in projects
  portfolio.innerHTML += window.cv.templates.portfolio p
