// @flow

import type { ChildrenGetter } from './bfs.types';

export { ChildrenGetter } from './bfs.types';

export const bfs = <Node, Graph>(getChildren: ChildrenGetter<Node, Graph>, root: Node, graph: ?Graph = null): Node[] => {
    const queue = [root];
    const visited = new Set(queue);

    do {
        for (const vertex of getChildren(queue.shift(), graph)) {
            if (!visited.has(vertex)) {
                visited.add(vertex);
                queue.push(vertex);
            }
        }
    } while (queue.length > 0);

    return [...visited];
};
