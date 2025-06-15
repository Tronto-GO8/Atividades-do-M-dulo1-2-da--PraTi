class TrreNode{
    constructor(value){
        this.value = value
        this.children = []
    }

    addChild(node){
        this.children.push(node)
    }

    remoChild(value){
        this.children = this.children.filter(child => child.value !== value)
    }

}

class tree{
    constructor(rootValue){
        this.root
    }
}