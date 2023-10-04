

let mainBtn = document.querySelector('button')
let createHTag = document.createElement('h2')
let bodyTag = document.querySelector('body')



mainBtn.addEventListener('click', () => {
  axios.get('https://swapi.dev/api/planets/?search=Alderaan'
  ).then((response) => {
    let residentsArr = response.data.results[0].residents
      for(let i = 0; i < residentsArr.length; i++){
        axios.get(residentsArr[i])
        .then((res) => {
          bodyTag.createElement('h2').textcontent = res.data.name
        })
      }
  })
})