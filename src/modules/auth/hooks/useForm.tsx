import { ChangeEvent, useState } from "react"

type EventChanged = ChangeEvent<HTMLInputElement>

const useForm = <T extends Object>( initialState:T ) => {

  const [formValues, setFormValues] = useState(initialState)

  const handleInputChange = ( e:EventChanged ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return {
    formValues,
    handleInputChange
  }

  

}

export default useForm