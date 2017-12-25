# Architecture issues

- File structure
- Better component naming
- Some components can be less specific
  - EditableText
- GraphQL integration is messy ?

## 1 - File Structure

```
- src/
  - theme/
    - defaultTheme.js <- theme.js
  - scenes/
    - Home/
      - index.js
      - Section/
        - index.js
    - Settings/
      - index.js
      - ColorSettings/
        - index.js
    - Lists/
      - index.js
      - Item/
        - index.js
      - List/
        - index.js
      - NewItem/
        - index.js
      - NewList/
        - index.js
    - Rss/
      - index.js
    - Weather/
      - index.js
    - Home/
      -index.js
  - components/
    - ui
      - Button.js
      - Card.js
      - ColorPicker.js
      - Loader.js
```