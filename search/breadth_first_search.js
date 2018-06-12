// graph object model
let graph = {
    start: ["alice", "bob", "claire"],
    bob: ["anuj", "peggy"],
    alice: ["peggy"],
    claire: ["alehandro", "johnny"],
    anuj: [],
    peggy: [],
    tom: [],
    johnny: []
};

// search function
// @param data - graph to search in
function bfs (data) {
    let queue = [];
    let searched = [];
    queue.push(...data["start"]);
    while (queue.length) {
        let person = queue.shift();
        if (searched.indexOf(person) == -1) {
            if (isMangoSeller(person)) {
                console.log(`MANGO SELLER FOUND! AND HIS NAME IS - ${person}`);
                return true;
            } else {
                searched.push(person);
                queue.push(...data[person]);
            }
        }
    }
    return false;
};

// fake function to detect a mango seller
function isMangoSeller (person) {
    return person.length == 9 ? true : false;
};

bfs(graph); // johnny