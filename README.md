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
   DB_USER= root
   DB_PASSWORD= [la tua password]
   DATABASE= [il tuo database]
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

Le API fornite permettono di interagire con il sistema per gestire le **proprietà**, i **messaggi** e le **recensioni**.

### 1. **Proprietà**

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
      "comment": "Posto fantastico, tornerò sicuramente!",
      "start_date": "2025-06-15",
      "end_date": "2025-06-20",
      "create_date": "2025-02-12T14:30:00.000Z"
    },
    {
      "id_review": 2,
      "properties_id": 1,
      "comment": "Molto accogliente, ottimo soggiorno.",
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
  "comment": "Posto fantastico, tornerò sicuramente!",
  "start_date": "2025-06-15",
  "end_date": "2025-06-20"
}
```

#### **Esempio di Risposta**:

```json
{
  "id_review": 42,
  "properties_id": "1",
  "comment": "Posto fantastico, tornerò sicuramente!",
  "start_date": "2025-06-15",
  "end_date": "2025-06-20",
  "create_date": "2025-02-12T14:30:00.000Z"
}
```

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
