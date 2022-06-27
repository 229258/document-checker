# document-checker

## Instalacja node i npm

Node'a trzeba pobrać z tej strony: [wybrac wersje 14.17.0](https://nodejs.org/en/download/releases/).

Po wykonaniu wszystkich kroków potrzebnych do zainstalowania go na używanym systemie (Windows, nie bij Juzdyna),
warto sprawdzić jaką mamy wersję node'a w cmd/powershellu/bashu czy jakimkolwiek command line uzywamy.

Komenda do sprawdzenia wersji node:

```bash
node -v
```

Komenda do sprawdzenia wersji npm:

```bash
npm -v
```

## Inicjalizacja projektu lokalnie

Kiedy posiadamy już projekt pobrany z repo, trzeba uruchomić środowisko, którego chcemy używać (polecam [Visual Studio Code](https://code.visualstudio.com)).

Kiedy mamy już uruchomione środowisko i konsolę, potrzebujemy zainstalować wszystkie dependecies projektu.

Używamy do tego:

```bash
npm install
```

I pobierze nam to wszystkie potrzebne biblioteki, frameworki zainicjalizowane w `package.json`.

## Uruchomienie projektu

Aby uruchomić projekt, należy najpierw użyć komend:

Do zbuildowania obrazu nextowego po raz pierwszy

```bash
npm run build
```

Do uruchomienia zbuildowanego obrazu

```bash
npm run start
```

a potem spokojnie można używać trybu developerskiego, czyli takiego gdzie wszelkie zmiany zapisane w kodzie są widoczne real-time.

```bash
npm run dev
```

Ostatnia komenda da nam link to lokalnego serwera, na którym został uruchomiony nasz projekt:

```bash
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

[Serwer odpalony lokalnie](http://localhost:3000)

## Jak sprawdzić routery i dane z nich

API(czy też "backend" aplikacji) dostępne jest w `pages/api`.
Tam deklarujemy wszystkie routery według schematu, które są mapowane przez nexta według ścieżki, czyli np. stworzymy strukturę `api/wojtek/index.js`, to dane spod tego routera możemy wyświetlić poprzez: `http://localhost:3000/api/wojtek`.

Tam gdzie będzie potrzeba przekazywania/ściągania danych przez ID, next oferuje tworzenie struktury poprzez `api/wojtek/[id].js`, i wtedy możemy dostać dane np. spod `http://localhost:3000/api/wojtek/99`, jeżeli oczywiście one istnieją.

Jest zadeklarowany przykładowa struktura z helloWorldem oraz poza folderowym test-data.js, do przetestowania i zabawy, żeby sprawdzić co się z czym je.

## Jak sprawdzić frontend

Front ma pathy deklarowane w `pages`. Każdy folder staje się pathem, czyli stworzenie strony `pages/wojtek` będzie wymagało stworzenia folderu wojtek wraz z plikiem index.js w środku.

Również zadeklarowana jest strona domyślna startowa (która się odpali pod samym kliknięciem http://localhost:3000) jak i również
do testów co przychodzi z api, strona http://localhost:3000/hello/id, gdzie w miejscu id wstawiamy id spod jakiego dane chcemy sobie sprawdzić (np. 1,2,3).
