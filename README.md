# scrollbar-auto-hide

## How to use

- import in `main.js`

```
import ScrollbarAutoHide from 'scrollbar-auto-hide'
Vue.use(ScrollbarAutoHide)
```

- Use in another components

```
  <scrollbar-auto-hide
    :contentStyle="{ maxHeight: '600px' }"
    :scrollBarStyle="{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }"
    :trackStyle="{ borderRadius: '10px', backgroundColor: '#3498db' }"
  >
    // Code
  </scrollbar-auto-hide>
```
