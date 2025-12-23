
export async function handleLogin(UserName: string, Password: string){
    const API_URL = 'http://localhost:3000';

    try {
        const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            UserName: UserName,
            PasswordHash: Password,
        }),
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

export async function handleRegister(UserName: string, Password: string) {
  const API_URL = 'http://localhost:3000';
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        UserName,
        PasswordHash: Password,
      }),
    });

    if (!res.ok) {
      console.log('Błąd rejestracji');
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function PostPlants(
  UserId: number,
  NamePlant: string,
  PresetId?: number
) {
    const API_URL = 'http://localhost:3000';
  try {
    const res = await fetch(`${API_URL}/plants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        UserId,
        NamePlant,
        PresetId,
      }),
    });
    console.log("response", res);
    if (!res.ok) {
      console.log('Błąd dodawania rośliny');
      return null;
    }

    return await res.text();
  } catch (err) {
    console.error(err);
  }
}

export async function UpdatePlant(
  PlantId: number,
  UserId: number,
  NamePlant: string,
) {
    const API_URL = 'http://localhost:3000';
  try {
    const res = await fetch(`${API_URL}/plants`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        PlantId,
        UserId,
        NamePlant,
      }),
    });

    if (!res.ok) {
      console.log('Błąd edycji rośliny');
      return null;
    }

    return await res.text();
  } catch (err) {
    console.error(err);
  }
}

export async function DeletePlant(Id: number, NamePlant: string) {
  try {
    const API_URL = 'http://localhost:3000';
    const res = await fetch(`${API_URL}/plants`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Id,
        NamePlant,
      }),
    });

    if (!res.ok) {
      console.log('Błąd usuwania rośliny');
      return null;
    }

    return await res.text();
  } catch (err) {
    console.error(err);
  }
}


export async function GetPresets(Id: number) {
  try {
    const API_URL = 'http://localhost:3000';
    const res = await fetch(`${API_URL}/preset?Id=${Id}`, {
      method: 'GET',
    });

    if (!res.ok) {
      console.log('Błąd pobierania presetów');
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function PostPreset(
  NamePreset: string,
  Temp: number,
  Moist: number,
  AirQuality: number,
  UserId: number,
  IntervalMinutes: number,
) {
  try {
    const API_URL = 'http://localhost:3000';
    const res = await fetch(`${API_URL}/preset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        NamePreset,
        Temp,
        Moist,
        AirQuality,
        UserId,
        IntervalMinutes
      }),
    });

    if (!res.ok) {
      console.log('Błąd dodawania presetu');
      return null;
    }

    const data = await res.json();
    return data.id;
  } catch (err) {
    console.error(err);
  }
}

export async function UpdatePreset(
  Id: number,
  NamePreset: string,
  Temp: number,
  Moist: number,
  AirQuality: number,
  IntervalMinutes: number
) {
  const API_URL = 'http://localhost:3000';
  try {
    const res = await fetch(`${API_URL}/preset`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Id,
        NamePreset,
        Temp,
        Moist,
        AirQuality,
        IntervalMinutes,
      }),
    });

    if (!res.ok) {
      console.log('Błąd edycji presetu');
      return null;
    }

    return await res.text();
  } catch (err) {
    console.error(err);
  }
}

export async function DeletePreset(Id: number) {
  const API_URL = 'http://localhost:3000';
  try {
    const res = await fetch(`${API_URL}/preset`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Id }),
    });

    if (!res.ok) {
      console.log('Błąd usuwania presetu');
      return null;
    }

    return await res.text();
  } catch (err) {
    console.error(err);
  }
}


export async function GetHistory(PlantId: number) {
  const API_URL = 'http://localhost:3000';
  try {
    const res = await fetch(`${API_URL}/history?PlantId=${PlantId}`);

    if (!res.ok) {
      console.log('Błąd pobierania historii');
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
}


export async function UpdateWatering(){
  const API_URL = 'http://localhost:3000';
  try{
    const res = await fetch(`${API_URL}/preset`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!res.ok) {
      console.log('Błąd edycji presetu');
      return null;
    }

    return await res.text();
  } catch (err){
    console.error(err)
  }
}