# Brand Fonts

Aperçu is licensed font with restrictions of usage and requirements. If you have any questions please contact [design@jesusfilm.org](mailto:design@jesusfilm.org)

Source Sans Pro is available from [Google Fonts](https://fonts.google.com/specimen/Source+Sans+Pro?selection.family=Source+Sans+Pro)

Setup your CSS

```code
lang: css
---
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

@font-face {
  font-family: 'ApercuRegular';
  src: url('/static/apercu_regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

h1 {
  font-family: "ApercuRegular", Helvetica, Arial, sans-serif;
}

h2, h3, h4, h5, h6 {
  font-family: 'Source Sans Pro', sans-serif;
}
```

## Headings

```type
{
	"color": "#000000",
	"headings": [
    { "label": "H1", "value": 62 }
  ],
  "font": "SourceSansPro"
}
```

```type
{
	"color": "#000000",
	"headings": [
		{ "label": "H2", "value": 42 },
		{ "label": "H3", "value": 30 },
		{ "label": "H4", "value": 20 },
		{ "label": "H5", "value": 18 },
		{ "label": "H6", "value": 16 },
	],
  "font": "SourceSansPro"
}
```

## Paragraphs
```type
{
  "paragraphs": ["16/24"],
	"font": "SourceSansPro",
  "color": "#000000"
}
```

## Links
[A link to a page](#)
```code
lang: html
---
<a href="#">A Link to a page</a>
```

## Unordered Lists
- List item 1
- List item 2
- List item 3

```code
lang: html
---
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Ordered Lists
1. List item 1
2. List item 2
3. List item 3

```code
lang: html
---
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```
