// There is one root node
// Each child node has one parent
// Each parent has at most two children

function TreeConstructor(strArr) {
  // 1. Parents have at most 2 children; parents = {parent: [child1, child2]}
  // 2. Each child has at most one parent; children = {child: parent}
  // 3. Iterate across strArr and check all conditions remain true
  
  let parents = {};
  let children = {};

  for(let i = 0; i < strArr.length; i++) {
    // "(1, 2)" => ["1", "2"]
    let pair = strArr[i].replace(/[()]/g,"").split(",");
    // 1
    let child = pair[0];
    // 2
    let parent = pair[1];

    // does this parent exist
    if(parents[parent]) {
      parents[parent].push(child);
    } 
    // else create child
    else {
      parents[parent] = [child];
    }

    // if parents have more than 2 children, return false
    if(parents[parent].length > 2) {
      return false;
    }

    // if child already has a parent, return false
    if(children[child]) {
      return false;
    } 
    // else create parent
    else {
      children[child] = parent;
    }
  }
  return true;
}

console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));