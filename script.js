(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const cw4 = document.getElementById('cw4')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function (){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        //console.log(array)
        answer.innerHTML = "  "
        array.forEach(post => answer.innerHTML+=
          `
  ${post.title}
          <hr/>
          `
          
          );
      })
   
      })
  

  cw2.addEventListener("click", function () {
    //TODO implement it
    answer.innerHTML = "Loading ......."
    answer.innerHTML = "Loading ........."
    answer.innerHTML = "Loading ............."
    answer.innerHTML = "Loading ...................."
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        //console.log(array)
        answer.innerHTML = "  "
        array.forEach(post => answer.innerHTML+=
          `
  ${post.title}
          <hr/>
          `
          
          );
      })
    
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
    answer.innerHTML = "Loading ...................."
    fetch('https://jsonplaceholder.typicode.com/posts/7')
      .then(response => response.json())
      .then(post => {
        //console.log(post)
        answer.innerHTML = post.title
        answer.innerHTML += '<hr/>' + post.body
      })
    

  })

  cw4.addEventListener("click", function () {
    //TODO implement it
    answer.innerHTML = "Processing ...................."
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'XD',
    body: 'XD',
    userId: 7,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response) => response.json())
  .then((json) => answer.innerHTML = 'Dodano nowy post o ID: ' + json.id);

  })

})();
