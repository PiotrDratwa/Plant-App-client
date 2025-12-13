
export async function handleLogin(UserName: string, Password: string){
    const API_URL = 'http://localhost:3000';

    try {
        const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            UserName: UserName,
            PasswordHash: Password,
        }),
        credentials: 'include'
        });

        if (!res.ok) {
        const text = await res.text();
        console.log(text || 'Błąd logowania');
        return;
        }

        console.log('Logowanie udane');
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
        console.log('Błąd połączenia');
    }
};



export async function GetPlants(UserId: number) {
  const API_URL = 'http://localhost:3000'

  try {
    const res = await fetch(`${API_URL}/plants?UserId=${UserId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      console.log('Błąd pobierania roślin')
      return
    }

    const data = await res.json()
    console.log(data.recordsets)
    return data

  } catch (err) {
    console.log('Błąd połączenia')
    console.log(err)
  }
}

export async function PostPlants(UserId: number) {
  const API_URL = 'http://localhost:3000'

  try {
    const res = await fetch(`${API_URL}/plants?UserId=${UserId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      console.log('Błąd pobierania roślin')
      return
    }

    const data = await res.json()
    console.log(data.recordsets)
    return data

  } catch (err) {
    console.log('Błąd połączenia')
    console.log(err)
  }
}