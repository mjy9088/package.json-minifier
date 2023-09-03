#!/usr/bin/env node

const fs = require('fs');

const {
  name,
  version,
  description,
  types,
  main,
  bin,
  author,
  repository,
  license,
  peerDependencies,
  dependencies,
} = JSON.parse(fs.readFileSync('./package.json').toString());

fs.writeFileSync(
  './dist/package.json',
  JSON.stringify({
    name,
    version,
    description,
    types,
    main,
    bin,
    author,
    repository,
    license,
    peerDependencies,
    dependencies,
  })
);
