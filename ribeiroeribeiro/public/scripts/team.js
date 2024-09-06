var team = [...document.getElementsByClassName("membro")];

function expand(member) {
    if (!member.classList.contains("collapsed")) {
        member.classList.add("collapsed");
    } else {
        team.forEach(element => {
            element.classList.add("collapsed");
        });

        member.classList.remove("collapsed");
    }
}