import LinkedList from "./linkedList.js";
import Node from "./node.js";

let list = new LinkedList();

list.append(2);
list.append(4);
list.prepend(1);

console.log(`List: ${list.toString()}`);
console.log("-----------------------------------------------");
console.log(`Size: ${list.size}`);
console.log(`Head:`, list.head);
console.log(`Tail:`, list.tail);
console.log("-----------------------------------------------");
console.log(`list.at(1):`, list.at(1));
console.log(`list.at(-1):`, list.at(-1));
console.log("-----------------------------------------------");
console.log("list.pop()");
console.log("list.pop()");
list.pop();
list.pop();
console.log(`List: ${list.toString()}`);
console.log(`Size: ${list.size}`);
console.log("list.pop()");
console.log("list.pop()");
list.pop();
list.pop();
console.log(`List: ${list.toString()}`);
console.log(`Size: ${list.size}`);
console.log("-----------------------------------------------");
console.log("Regenerating list...");
list.append(2);
list.append(4);
list.prepend(1);
console.log(`List: ${list.toString()}`);
console.log("-----------------------------------------------");
console.log(`list.contains(1): ${list.contains(1)}`);
console.log(`list.contains(8): ${list.contains(8)}`);
console.log("-----------------------------------------------");
console.log(`list.find(4): ${list.find(4)}`);
console.log(`list.find(3): ${list.find(3)}`);
