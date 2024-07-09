const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

const breadthFirstTraversal= start => {
    //creat a queue
    const queue = [start];
    //creat a visited set
    const visited = new Set([start]);

    //while the queue length is not empty
    while (queue.length) {
        //set current node to the first element in the queue
        let currentNode = queue.shift();
        // log the element
        console.log(currentNode);

        //loop through the nodes neighbors (which is an array)
        adjList[currentNode].forEach(neighbor => {
        // if the visited set does not have the neighbor from the current node
        if (!visited.has(neighbor)) {
            // add the neighbor to visited and add it to the queue
            visited.add(neighbor);
            queue.push(neighbor);
        }
        });

    }
}

const breadthFirstSearch = (start, end) => {
    //creat a queue
    const queue = [start];
    // create a visited (set or array)
    const visited = [];
    //loop through the queue
    while (queue.length) {
      let currNode = queue.shift();
      // if the current node is === to the end then we can reach the node
      if (currNode === end) return true;
      //loop through the nodes neighbors
      adjList[currNode].forEach(neighbor => {
        //if visited does not contain the nodes neighbors add them to visited and queue them
        if (!visited.includes[currNode]) {
          visited.push(neighbor);
          queue.push(neighbor);
        }
      });
    }
    // if the end node is not visited through the queue then we cannot reach it and it returns false
    return false;
  }








console.log(breadthFirstTraversal(3));

console.log(breadthFirstSearch(4, 1));
