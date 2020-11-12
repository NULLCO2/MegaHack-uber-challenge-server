# Rotas

[Bikes Routes](#Bikes-routes) `/bikes`

[PLaces Routes](#Places-routes) `/places`

[Users Routes](#Users-routes) `/users`

---

## Bikes routes

**get** `/bikes`

```javascript
  return [
    {
      id: Number,
      model: String,
      cost: Number,
      availability: Boolean,
      created_at: Date,
      updated_at: Date,
    }
  ]
```
**get** `/bikes/:id`

```javascript
  return {
    id: Number,
    model: String,
    cost: Number,
    availability: Boolean,
    created_at: Date,
    updated_at: Date,
  }
```

**post** `/bikes`

```javascript
  const body = {
    model: String,
    cost: Number,
    availability: Boolean,
  }

  return {
    id: Number,
    model: String,
    cost: Number,
    availability: Boolean,
    created_at: Date,
    updated_at: Date,
  }
```

**put** `/bikes/:id`

```javascript
  const body = {
    model: String,
    cost: Number,
    availability: Boolean,
  }

  return {
    id: Number,
    model: String,
    cost: Number,
    availability: Boolean,
    created_at: Date,
    updated_at: Date,
  }
```

**delete** `/bikes/:id`

```javascript
  // no body returned for response
```
---

## Places routes

**get** `/places`

```javascript
  return [
    {
      id: Number,
      name: String,
      max_bikes: Number,
      number_bikes_available: Number,
      latitude: Number,
      longitude: Number,
      created_at: Date,
      updated_at: Date,
    }
  ]
```

**get** `/places/:id`

```javascript
  return {
    id: Number,
    name: String,
    max_bikes: Number,
    number_bikes_available: Number,
    latitude: Number,
    longitude: Number,
    created_at: Date,
    updated_at: Date,
  }
```

**post** `/places`

```javascript
  const body = {
    name: String,
    max_bikes: Number,
    number_bikes_available: Number,
    latitude: Number,
    longitude: Number,
  }

  return {
    id: Number,
    name: String,
    max_bikes: Number,
    number_bikes_available: Number,
    latitude: Number,
    longitude: Number,
    created_at: Date,
    updated_at: Date,
  }
```

**put** `/places/:id`

```javascript
  const body = {
    name: String,
    max_bikes: Number,
    number_bikes_available: Number,
    latitude: Number,
    longitude: Number,
  }

  return {
    id: Number,
    name: String,
    max_bikes: Number,
    number_bikes_available: Number,
    latitude: Number,
    longitude: Number,
    created_at: Date,
    updated_at: Date,
  }
```

**delete** `/bikes/:id`

```javascript
  // no body returned for response
```


## Users Routes

**get** `/places/:id`

```javascript
  return {
    id: Number,
    name: String,
    email: String,
    created_at: Date,
    updated_at: Date,
  }

```

**post**

```javascript
  const body = {
    name: String,
    email: String,
    password: String,
  }

  return {
    id: Number,
    name: String,
    email: String,
    created_at: Date,
    updated_at: Date,
  }
```
