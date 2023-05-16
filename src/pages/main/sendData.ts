export const handleRequest = async () => {
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
        name: "k",
        incomes: [
          {
            "id": 16739429536331,
            "name": "1232121234",
            "icon": "bank",
            "color": "#000000",
            "value": 231
          }
        ],
        accounts: [
          {
            "id": 132412341,
            "name": "Тинькофф121234",
            "icon": "bank",
            "color": "#FFFF00",
            "value": 234054
          },
          {
            "id": 313341,
            "name": "Наличные1123",
            "icon": "cash",
            "color": "#FF00FF",
            "value": 213
          }
        ],
        expenses: [
          {
            "id": 12113,
            "name": "Продукты121234",
            "icon": "cash",
            "color": "#000000",
            "value": 9094351
          },
          {
            "id": 1541,
            "name": "werwe211234",
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