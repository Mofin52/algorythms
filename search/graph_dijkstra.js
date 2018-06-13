let graph, costs, parents;

graph = {
    start: {poster: 0, vinyl: 5},
    poster: {guitar: 30, drum: 35},
    vinyl: {guitar: 15, drum: 20},
    guitar: {end: 20},
    drum: {end: 10},
    end: {}
};

costs = {
    poster: 0,
    vinyl: 5,
    guitar: Infinity,
    drum: Infinity,
    end: Infinity
};

parents = {
    poster: "start",
    vinyl: "start",
    guitar: undefined,
    drum: undefined,
    end: undefined
};

function dijkstra_search (graph, costs, parents) {
    let processed = [];
    let node = find_lowest_cost_node(costs, processed);
    while(node) {
        let cost = costs[node];
        let neighbors = graph[node];
        Object.keys(neighbors).map( (el) => {

            let new_cost = cost + neighbors[el];
            if (costs[el] > new_cost) {
                costs[el] = new_cost;
                parents[el] = node;
            }

        })
        processed.push(node);
        node = find_lowest_cost_node(costs, processed);
    }

    let fin_path = build_final_path(parents, "end");
    return [fin_path, costs["end"]];
}

// finds the cheapest unprocessed node
function find_lowest_cost_node(costs, processed) {
    let min = Infinity;
    let result = "";
    for (let key in costs) {
        if (costs[key] < min && processed.indexOf(key) == -1) {
            min = costs[key];
            result = key;
        }
    }
    return result;
}

function build_final_path(parents, goal_node) {
    let fin_path = [goal_node];
    
    let curr_step = goal_node;
    while(parents[curr_step]) {
        fin_path.push(parents[curr_step]);
        curr_step = parents[curr_step];
    }

    return fin_path.reverse();
}

let search_res = dijkstra_search(graph, costs, parents);
console.log(search_res);