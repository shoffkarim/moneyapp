import Axios from "axios"

export const handleRequest = async () => {
  console.log(111)
  try {

    await fetch ('/api/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({
        name: "lol ke21`3k123213",
        incomes: [
          {
            "id": 2132141,
            "name": "Зарплата2",
            "icon": "cash",
            "color": "#000000",
            "value": "343342"
          },
          {
            "id": 16739429536331,
            "name": "123212",
            "icon": "bank",
            "color": "#000000",
            "value": 231
          }
        ],
        accounts: [
          {
            "id": 132412341,
            "name": "Тинькофф12",
            "icon": "bank",
            "color": "#FFFF00",
            "value": 234054
          },
          {
            "id": 313341,
            "name": "Наличные12",
            "icon": "cash",
            "color": "#FF00FF",
            "value": 213
          }
        ],
        expenses: [
          {
            "id": 12113,
            "name": "Продукты12",
            "icon": "cash",
            "color": "#000000",
            "value": 9094351
          },
          {
            "id": 1541,
            "name": "werwe21",
            "icon": "bank",
            "color": "black",
            "value": 0
          }
        ],
        total: {
          "expenses": 213546,
          "incomes": 123546,
          "balance": 123456
        },
      })
    })

  } catch (error) {
    console.log("Request Error", error)
  }
}