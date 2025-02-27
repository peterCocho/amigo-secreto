```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    User->>Browser: He opens the browser
    Browser->>Server: Enviar solicitud HTTP GET a https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>Browser: HTML document
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/educer.css
    activate Server
    Server-->>Browser: the css file
    deactivate Server
    Note right of Browser: The Browser starts executing the JavaScript code that fetches the JSON from the Server
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]


y (Yes): Añade este fragmento (hunk) al área de preparación.

n (No): No añade este fragmento al área de preparación.

q (Quit): Salir del modo interactivo sin añadir ningún fragmento adicional.

a (All): Añade todos los fragmentos restantes al área de preparación sin preguntar por cada uno.

d (Divide): Divide este fragmento en fragmentos más pequeños para seleccionarlos individualmente.

e (Edit): Editar manualmente este fragmento antes de añadirlo.

? (Help): Muestra una descripción de todas las opciones disponibles.

