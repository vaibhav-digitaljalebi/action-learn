var exec = require('child_process').exec;

const current_repo = "original";
const current_branch = "master" 

const dest_repo_url = "https://github.com/vaibhav-digitaljalebi/action-learn-1.git"
const det_repo_branch = "master"


exec(`git remote add carbon-copy ${dest_repo_url}`, dump);
exec(`git pull ${current_repo} ${current_branch} && git push carbon-copy ${det_repo_branch}`, dump);
exec(`git remote remove carbon-copy`, dump);

function dump(err, stdout, stderr) {
    if(err) console.error("err", err);
    if(stdout) console.error("log", stdout);
    if(stderr) console.error("err", stderr);
}

// https://github.com/vaibhav-digitaljalebi/action-learn.git
// https://github.com/vaibhav-digitaljalebi/action-learn-1.git