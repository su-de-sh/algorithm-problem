class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    constructor(value){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    print(){
        let list = ""
        let pointer = this.head
        while(pointer){
          list +=  " "+pointer.value
         pointer = pointer.next
        }
        console.log(list)
    }

    prepend(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }
        else{
            newNode.next= this.head
            this.head= newNode
        }
        this.size+=1
    }

    append(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }
        else{

            let pointer = this.head
            while(pointer.next){

                pointer=pointer.next

            }
            pointer.next = newNode
        }
        this.size+=1
    }

    insert(value,index){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }
        else{
            let pointer = this.head
            for(let i=0;i<index-1;i++){
                pointer=pointer.next
            }
            newNode.next=pointer.next
            pointer.next=newNode
            this.size+=1
        }
        

    }
}

const linkedList = new LinkedList()
linkedList.print()
linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)
linkedList.append(40)
linkedList.prepend(50)
linkedList.insert(60,1)
linkedList.insert(70,5)

linkedList.print()
console.log(linkedList.size)



