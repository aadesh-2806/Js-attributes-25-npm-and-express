/*where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    clean-install, clean-install-test, completion, config,
    create, ddp, dedupe, deprecate, dist-tag, docs, doctor,
    edit, explore, fund, get, help, help-search, hook, i, init,
    install, install-ci-test, install-test, it, link, list, ln,
    login, logout, ls, org, outdated, owner, pack, ping, prefix,
    profile, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami
*/

//npm install give-me-a-joke
//npm i colors

var joke = require('give-me-a-joke')
var colors = require('colors');

console.log('hello are you rainbow'.green)
console.log('hello are you rainbow'.rainbow)

joke.getRandomDadJoke(function(jokes){
    console.log(jokes);
})

//npm i -g cowsay ------>error
// sudo chown -R $USER /user/local/lib/node_modules
//cowsay show all file

//if require done directly sasy error
//but if npm link cowsay it works

//npm init------->json file
//npm i figlet----->install
//if multiple file than can do by (npm install) or npm i  -----> looks to package.json and download every related thing
//chat      ----->      start node index.js   ----->  start google and type (localhost:8080)
// npm i franc langs
















