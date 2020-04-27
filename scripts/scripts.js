document.getElementById('getMovies').addEventListener('click', getMovies);

function getMovies(){
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then((res) => res.json())
    .then((data) => {
      let output = `<div>
                    <table class='table'>
                      <thead>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Rotten Tomatoes Score</th>
                        <th>Producer</th>
                      </thead>`;
      data.forEach(function(user){
        output += `
              <tbody>
                <td>${user.title}</td>
                <td>${user.release_date}</td>
                <td>${user.director}</td>
                <td>${user.rt_score}</td>
                <td>${user.producer}</td>
              </tbody>
          </div>
        `;
      });
      document.getElementById('animeTable').innerHTML = output;
    })
    .catch((err)=> console.log(err));
  }