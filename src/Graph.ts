import { Premises } from './Premises';

export class Graphs extends Premises {
  
  // Set of vertexes that have passed the trail
  private trailVertexes: Array<string>;
  // {V} in V(G)
  private vertexes: Array<string>;

  constructor() {
    super();
    this.trailVertexes = [];
    this.vertexes = [];
  }
  
  public isTreeGraph(Graph: Object): Boolean {
    this.vertexes = Object.keys(Graph);

    // Conditions for graph to be a Tree
    const isCycle: Boolean = this.hasCycle(this.vertexes[0], this.trailVertexes, this.vertexes[0], Graph);
    const isDisconnected: Boolean = this.hasDiconnected(this.vertexes, this.trailVertexes);

    if (isCycle || isDisconnected) {
      return false;
    }

    return true;
  }
}