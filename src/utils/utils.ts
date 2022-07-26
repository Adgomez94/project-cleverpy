interface Utils {
  regexEmail: ( email: string ) => boolean,
  regexPassword: ( password: string ) => boolean,
}


export default {
  regexEmail( email:string ) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    return regex.test(email)
  },
  regexPassword( password:string ) {
    const regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    return regex.test(password)
  }
} as Utils