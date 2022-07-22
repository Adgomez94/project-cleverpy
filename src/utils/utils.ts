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
    const regex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
    return regex.test(password)
  }
} as Utils