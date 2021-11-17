var getUserRepos = function() {
    console.log("function was called");
    var apiUrl = "";

    fetch("https://api.github.com/users/octocat/repos").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    });
    console.log("outside")
    console.log(response);
}

getUserRepos();