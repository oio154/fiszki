








(
function(){
   populateMenu(w);
}
)();

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }



function populateMenu(words){
    let folders=[];
    words.forEach(element => {
        folders.push( element.folder )
        
    });
    let filterFolders=[...new Set(folders)]; //uniq values
    console.dir(filterFolders);

    //append list to menu

    filterFolders.forEach(element => {
        let node=document.createElement("INPUT");
        let label = document.createElement("LABEL");
        let id=guid();
        
        node.type="checkbox";
        node.id=id;
        node.name=element;
        //document.querySelector(".menu").appendChild(node);

        //label
        label.htmlFor=id;
        label.appendChild(document.createTextNode(element));
        l2=document.querySelector(".menu").appendChild(label);
        l2.appendChild(node);
    });

}
