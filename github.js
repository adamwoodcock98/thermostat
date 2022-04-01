import got from 'got';

const fetchRepoInfo = (repoName, repoResponseObject) => {
  got(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=718d895d0e2c2058b50f534efe003e59`).then((response) => {
    const responseObject = JSON.parse(response.body);
    repoResponseObject(responseObject);
  });
}

fetchRepoInfo('sinatra/sinatra', (repoResponseObject) => {
  console.log(repoResponseObject);
}); 