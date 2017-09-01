function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function deepestChild() {
  return document.querySelector(`#grand-node div div div div`)
}

function increaseRankBy(n){
  return document.querySelectorAll('.ranked-list li').forEach(function(i) {
    i.innerHTML = parseInt(i.innerHTML) + n
  })
}
