# API для работы [со Свалочкой](http://svalko.org)

Базовый урдл **http://api.svalko.org/1.0/**

НЕ ВЫКЛАДЫВАЙТЕ ЕБАНУТЫЕ КОММИТЫ

## Получение псто на глагне

_request_
GET **glagne/{skip: int, page_size: int}**

[_response_](#glagne-psto-response)
```
{
  items:[{  
    id: PSTO id
    date: ISO date-time
    title: PSTO title
    tiser: PSTO tiser
    autor: name of STUPID POSTER
    comments: count of comments
    ptaags: list of tags-ptaags
  }],

  total_count:int
}
```

## Получение новых псто с глагне

_request_
GET **glagne/new/{date: ISO date-time}**

<a name="glagne-psto-response">_response_</a>

## Получение единичкогова псто

_request_
GET **post/{psto_id: int}**

_response_
```
{
  id: PSTO id
  date: iCO date-time
  title: PSTO title
  tiser: PSTO tiser
  autor: name of STUPID POSTER
  comments_count: count of comments
  ptaags: list of tags-ptaags
  
}
```

## Поиск пстов

GET **post/search/{_request_}**

_request_
```
{
//  required
  q: string,
//  optional
  skip: int,
  page_size: int,
  search_in: list of [ptaags, psto, comments]
}
```

_response_
```
{
  items:[{
    id: PSTO id
    date: iCO date-time
    title: PSTO title
    tiser: PSTO tiser
    autor: name of STUPID POSTER
    comments_count: count of comments
    ptaags: list of tags-ptaags
  }],
  query_param:string,
  total_count:int
}
```

## Получение комментсов по псто

_request_
GET **post/comments/{psto_id: int, skip: int, page_size: int}**

_response_
```
{
  items: [{
    id: cament id
    date: iSO date-time
    title: cament title
    autor: name of STUPID POSTER
    text: body of comment
  }],
  
  total_count: int
}
```

## Запостеть боян

POST **post/**

_request_
```
{
  autor: PSTO AUTHOR
  text: PSCO content
}
```

_response_

```
URL of new PSTO
```
**Пердлагаю сде лоть {url: string}**

## Кокой-то СПАМ
```
GET from BASE_URL/SPAM 
{
  object:{
    string: random spam message
  }
}

POST to BASE_URL/SPAM
{
  myspam: custom string of spam 
}
Return string “И куда ты спам пстить собрался?”
```