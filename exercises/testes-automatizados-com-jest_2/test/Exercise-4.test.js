const fetch = require('node-fetch');
const getRepos = require('../source/Exercise-4');
const URL = 'https://api.github.com/orgs/tryber/repos';
const repoOne = 'sd-01-week4-5-project-todo-list';
const repoTwo = 'sd-01-week4-5-project-meme-generator';

it('test getRepos function', async () => {
  const repo = await getRepos(URL);
  expect(repo.includes(repoOne)).toBe(true);
  expect(repo.includes(repoTwo)).toBe(true);
});