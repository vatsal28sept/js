class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value 
    }

    get password() {
        return `${this._password}vatsal`
    }

    set password(value) {
        this._password = value 
    }
}

const b = new User("pvatsal665@gmail.com", "123")
console.log(b.email)    
console.log(b.password)  
