import axios from "axios"

export const addNewCard = (type: string, item: string) => {
  axios.post(`http://localhost:3001/${type}`, JSON.parse(item))
      .then(() => {
        console.log("success")
      })
      .catch(error => {console.error('There was an error!', error)
      })
}