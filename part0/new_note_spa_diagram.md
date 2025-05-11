```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes note and clicks Save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created (empty response or confirmation)
    deactivate server

    Note right of browser: JS adds the new note to the list and updates the DOM

    Note right of browser: Page is not reloaded, note is shown dynamically
