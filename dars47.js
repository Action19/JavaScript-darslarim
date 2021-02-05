person = {
    firstName: 'Abdulla',
    lastName: 'Qodiriy',

    get fullName() {
        return this.firstName + ' ' + this.lastName;

    },
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error('Qiymat string emas');
        let fullNameArray = value.split(' ');
        if (fullNameArray.length !== 2)
        throw new Error('Ismi va familiyangizni kiriting');
        this.firstName = fullNameArray[0];
        this.lastName = fullNameArray[1];
    }
}
try{
 person.fullName = '';//true; //'Alisher Navoiy';
}
catch(error){
   
    console.log(error);
}
console.log(person.fullName) 