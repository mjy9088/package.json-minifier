#!/usr/bin/env node

const fs = require('fs');

function extractGitHubRepo(inputString) {
  const regex = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\.git$/;
  const match = inputString?.match(regex);

  if (match) {
    const username = match[1];
    const repository = match[2];
    return `github:${username}/${repository}`;
  } else {
    return inputString;
  }
}

const minify = ({
  description,
  name,
  version,
  keywords,
  homepage,
  bugs,
  license,
  author,
  contributors,
  funding,
  // ignore files, because every required files will be copied to dist directory
  main,
  browser,
  bin,
  man,
  directories,
  repository,
  dependencies,
  // ignore devDependencies, because it will not be used after publish
  peerDependencies,
  peerDependenciesMeta,
  overrides,
  engines,
  os,
  cpu,
  // ignore private, publishConfig, because it will not be used after publish
}) => ({
  description,
  name,
  version,
  keywords,
  homepage,
  bugs,
  license,
  author,
  contributors,
  funding,
  main,
  browser,
  bin,
  man,
  directories,
  repository: extractGitHubRepo(repository),
  dependencies,
  peerDependencies,
  peerDependenciesMeta,
  overrides,
  engines,
  os,
  cpu,
});

fs.writeFileSync(
  './dist/package.json',
  JSON.stringify(
    minify(JSON.parse(fs.readFileSync('./package.json').toString()))
  )
);
