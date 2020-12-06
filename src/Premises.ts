export class Premises {

  // True if has Cycle, otherwise return false
  hasCycle = (
    currentVertex: string,
    trailVertexes: Array<string>,
    lastVertex: string,
    Graph: any,
  ): Boolean => {
    trailVertexes.push(currentVertex);

    // Loop in adjacent vetices on current vertice
    const result: Boolean = Graph[currentVertex].some((adjacentVertex: string) => {
      const adjVertexVisited: Array<string> = trailVertexes.filter(trail => trail === adjacentVertex)

      // Case not visited callback another edges
      if (!(adjVertexVisited.length > 0)) {
        if (this.hasCycle(adjacentVertex, trailVertexes, currentVertex, Graph)) {
          return true;
        }

        // Check if parent vertice is equal, if equal so has cycle
      } else if (adjacentVertex != lastVertex) {
        return true;
      }

      return false;
    });

    return result;
  };

  hasDiconnected = (
    vertexes: Array<string>,
    trailVertexes: Array<string>
  ): Boolean => {

    for (let vertex of vertexes) {
      // Check vertice was visited, if not is disconnected
      const vertexVisited = trailVertexes.filter(trail => trail === vertex);
      if (!(vertexVisited.length > 0)) {
        return true;
      }
    }

    return false;
  };
}