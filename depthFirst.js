const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

const depthFirstTraversal = (start) => {
    //create a stack
    const stack = [start];
    //create a visited set
    const visited = new Set([start]);
    // While the queue is not empty, repeat steps 3-4
    while (stack.length) {
        // Dequeue a node and print it.
        let currentNode = stack.pop();
        console.log(currentNode);

        // Put all of the node's children in the back of the queue.
        adjList[currentNode].forEach(neighbor => {
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            stack.push(neighbor);
        }
        });
    }
}


const depthFirstSearch = (start, end) => {

    const stack = [start];

    const visited = new Set([start]);

    while (stack.length) {
        let currentNode = stack.pop();
        if (currentNode === end) return true;


        adjList[currentNode].forEach(neighbor => {
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            stack.push(neighbor);
        }
        });
    }

    return false;
}


console.log(depthFirstTraversal(3));
console.log(depthFirstSearch(4, 1));
