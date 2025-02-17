# 📌 Nome del Progetto

PLAGIO AIRBNB

## 🚀 Tecnologie Utilizzate

- [Linguaggio di programmazione] : JAVASCRIPT
- [Framework o librerie principali] : EXPRESS
- [Database utilizzato] : "db_bnb"

## 🔧 Prerequisiti

Assicurati di avere installato:

- [Node.js]
- [Database richiesto] : MySQL
- [Dipendenze specifiche] : mysql2

## 🛠️ Installazione

1. Installa le dipendenze:

   ```bash
   npm install
   ```

2. Configura il file delle variabili d’ambiente:  
   Crea un file `.env` e aggiungi:

   ```env
   PORT = [la tua porta]

   DB_HOST = localhost
   DB_USER = root
   DB_PASSWORD = [la tua password]
   DATABASE = [il tuo database]
   ```

3. Avvia il server:
   ```bash
   npm run dev
   ```

## 📂 Struttura del Progetto

```bash
/src
   ├── classes/           # Classi personalizzate
   ├── controllers/       # Logica dei controller
   ├── data/              # Componenti del database
   ├── middlewares/       # Componenti aggiuntivi funzionali
   ├── public/            # File statici
   ├── routes/            # Definizione delle API
   ├── server.js          # Punto di ingresso

```

## 📡 Utilizzo delle API

Le API fornite permettono di interagire con il sistema per gestire le **proprietà**, i **messaggi**, le **recensioni** e le **immagini**.

### 1. **Proprietà**

Endpoint per ottenere le proprietà (GET)

#### **GET /api/properties**

- **Descrizione**: Permette di recuperare tutte le proprietà con allegata un immagine.

##### **Esempio di Risposta**:

```json
{
  "totalCount": 2,
  "data": [
    {
      "id_properties": 1,
      "title": "Titolo della proprietà",
      "host_name": "Arbi",
      "rooms": 3,
      "beds": 2,
      "bathrooms": 1,
      "square_meters": 85,
      "contact_email": "blabla@gmail.com",
      "property_type": "Appartamento",
      "likes": 0,
      "adress_city": "Milano",
      "adress_road": "Via Roma",
      "adress_hick_town": "MI",
      "create_date": "2025-02-13T14:08:06.000Z",
      "first_image": "https://placehold.co/600x400"
    },
    {
      "id_properties": 2,
      "title": "Titolo della proprietà",
      "host_name": "Arbi",
      "rooms": 3,
      "beds": 2,
      "bathrooms": 1,
      "square_meters": 85,
      "contact_email": "blabla@gmail.com",
      "property_type": "Appartamento",
      "likes": 0,
      "adress_city": "Milano",
      "adress_road": "Via Roma",
      "adress_hick_town": "MI",
      "create_date": "2025-02-13T14:08:06.000Z",
      "first_image": null
    }
  ]
}
```

---

Endpoint per ottenere una singola proprietà (GET)

#### **GET /api/properties/:id**

- **Descrizione**: Permette di recuperare una proprietà con tutte le sue immagini.
- **Parametro**: `:id` è l'ID della proprietà di cui si vogliono recuperare le informazioni.

##### **Esempio di Risposta**:

```json
{
  "success": true,
  "item": {
    "id_properties": 1,
    "title": "Titolo della proprietà",
    "host_name": "Arbi",
    "rooms": 3,
    "beds": 2,
    "bathrooms": 1,
    "square_meters": 85,
    "contact_email": "blabla@gmail.com",
    "property_type": "Appartamento",
    "likes": 0,
    "adress_city": "Milano",
    "adress_road": "Via Roma",
    "adress_hick_town": "MI",
    "create_date": "2025-02-13T14:08:06.000Z",
    "images": [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400"
    ]
  }
}
```

---

Endpoint per creare una casa (POST)

#### **POST /api/properties**

- **Descrizione**: Permette di recuperare creare una nuova proprietà, le immagini vengono gestite separatamente.

##### **Esempio di Body della Richiesta**:

```json
{
  "title": "Appartamento con vista",
  "host_name": "Arbi",
  "rooms": 3,
  "beds": 2,
  "bathrooms": 2,
  "square_meters": 75,
  "contact_email": "esempio@email.com",
  "property_type": "appartamento",
  "adress_city": "Roma",
  "adress_road": "Via Roma, 10",
  "adress_hick_town": "Centro"
}
```

##### **Esempio di Risposta**:

```json
{
  "properties_id": 10,
  "title": "Appartamento con vista",
  "host_name": "Arbi",
  "rooms": 3,
  "beds": 2,
  "square_meters": 75,
  "contact_email": "esempio@email.com",
  "property_type": "appartamento",
  "likes": 0,
  "adress_city": "Roma",
  "adress_road": "Via Roma, 10",
  "adress_hick_town": "Centro"
}
```

---

### 2. **Recensioni**

Endpoint per ottenere le recensioni (GET)

#### **GET /api/properties/:id/reviews**

- **Descrizione**: Permette di recuperare tutte le recensioni per una specifica proprietà.
- **Parametro**: `:id` è l'ID della proprietà di cui si vogliono recuperare le recensioni.

#### **Esempio di Risposta**:

```json
{
  "totalCount": 2,
  "data": [
    {
      "id_review": 1,
      "properties_id": 1,
      "user_name": "arbi",
      "review_content": "Posto fantastico, tornerò sicuramente!",
      "start_date": "2025-06-15",
      "end_date": "2025-06-20",
      "create_date": "2025-02-12T14:30:00.000Z"
    },
    {
      "id_review": 2,
      "properties_id": 1,
      "user_name": "arbi",
      "review_content": "Posto fantastico, tornerò sicuramente!",
      "start_date": "2025-07-01",
      "end_date": "2025-07-05",
      "create_date": "2025-02-12T15:00:00.000Z"
    }
  ]
}
```

---

Endpoint per inviare una recensione (POST)

#### **POST /api/properties/:id/reviews**

- **Descrizione**: Permette agli utenti di inviare una recensione riguardante una proprietà specifica.
- **Parametro**: `:id` è l'ID della proprietà a cui si sta inviando la recensione.

#### **Esempio di Body della Richiesta**:

```json
{
  "user_name": "arbi",
  "review_content": "Posto fantastico, tornerò sicuramente!",
  "start_date": "2025-06-15",
  "end_date": "2025-06-20"
}
```

#### **Esempio di Risposta**:

```json
{
  "id_review": 9,
  "properties_id": "1",
  "user_name": "arbi",
  "review_content": "Posto fantastico, tornerò sicuramente!",
  "start_date": "2025-06-15",
  "end_date": "2025-06-20",
  "create_date": "2025-02-14T10:02:01.313Z"
}
```

---

### 3. **Messaggi**

L'endpoint per inviare un messaggio relativo a una proprietà è:

#### **POST /api/properties/:id/messages**

- **Descrizione**: Permette agli utenti di inviare un messaggio riguardante una proprietà specifica.
- **Parametro**: `:id` è l'ID della proprietà a cui si sta inviando il messaggio.

#### **Esempio di Body della Richiesta**:

```json
{
  "user_email": "utente@email.com",
  "content": "Vorrei avere più informazioni su questa proprietà."
}
```

#### **Esempio di Risposta**:

```json
{
  "id_messages": 1,
  "properties_id": "1",
  "user_email": "utente@email.com",
  "content": "Vorrei avere più informazioni su questa proprietà."
}
```

---

### 4. **Likes**

L'endpoint per inrementare i like di una pagina è:

#### **Patch /api/properties/:id/likes**

- **Descrizione**: Permette incrementare i likes di una proprietà.
- **Parametro**: `:id` è l'ID della proprietà a cui si vole incrementare i likes.

#### **Esempio prima della chiamata**:

```json
{
  "likes": 100
}
```

#### **Esempio dopo la chiamata**:

```json
{
  "likes": 101
}
```

**NOTE**  
Ottimizzazione lato FE per non fare troppe richieste al server:

- **Incremento Locale Immediato**  
  Aggiorna il numero di like localmente al click, senza aspettare la risposta del server, per un feedback rapido all'utente.

- **Invio della Richiesta al Server**  
  Dopo l'aggiornamento locale, invia una richiesta `PATCH` al server per registrare l'incremento.

- **Gestione degli Errori**  
  Se la richiesta fallisce, il frontend può ripristinare il valore locale o ritentare l'invio fino a successo. (OPZIONALE)
