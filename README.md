## 나만의 navbar 만들기

[드림코딩](https://www.youtube.com/watch?v=X91jsJyZofw&list=PLv2d7VI9OotQ1F92Jp9Ce7ovHEsuRQB3Y&index=14)영상을 참고해서 `navbar` component 만들자.

### 💥 핵심!

- navbar의 핵심은 바로 CSS중에서도 `Flexbox`!

```css
justify-content: space-between;
align-items: center;
```

### li, a

- li

```css
list-style: none;
```

- a

```css
text-decoration: none;
```

### Google Font 적용

- Source Sans Pro

### media query

```css
@media screen and (max-width: 780px)
```

- `max-width` : 0px ~ 780px에 한해서 적용