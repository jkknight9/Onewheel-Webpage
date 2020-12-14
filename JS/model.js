class Fan {
    constructor(id, firstName, lastName, address, city, state, zip, email,phone, findPage, comments){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.email = email;
        this.phone = phone;
        this.findPage = findPage;
        this.comments = comments
    };

}
    let fans = [
    ];

    function findFan(id){
        return fans.find(fan=>fan.id==id)
    }

    function fanIndex(id){
        return fans.findIndex(fan=>fan.id==id)
    }

    function addFan(id, firstName, lastName, address, city, state, zip, email, phone, findPage, comments){
        let newFan = new Fan(id, firstName, lastName, address, city, state, zip,email,phone,findPage,comments)
        fans.push(newFan)
        
    }
  
    function deleteModelItsem(id){
        let idx = fanIndex(id)
        let ret = false
        if (idx != -1){
            if(fans.length==1){
                fans.pop();
            }
            else {
                fans= fans.splice(idx,1)
            }
        }
    }
  
