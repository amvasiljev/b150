<h1>Сборка Webpack 5 + Pug для верстки</h1>

## Чтобы начать работать со сборкой:

``` bash

работает в node v14.17.5 и ниже

# Установить зависимости:
npm install

# Запуск сервера разработки:
npm run dev

# Сборка проекта:
npm run build

# Пример использования переменных в scss





.test {
    font-size: 20px;
    color: black;
    font-family: $font;
    @media #{$m_1200} {
       color: yellow;
    }
    @media #{$m_1024} {
       color: green;
    }
    @media #{$m_768} {
       color: indigo;
    }
    @media #{$m_320} {
       color: red;
    }

}


```
