// Ready, get set, GO!!! :D
const person = {
    firstName: "Jane",
    lastName: "Doe",
  
    get fullName(){
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(val){
      this.firstName = val.split(' ')[0]
      this.lastName = val.split(' ')[1]
  }
}