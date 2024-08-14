# ngx-border-beam

`@omnedia/ngx-border-beam` is an Angular library that provides a dynamic and customizable animated border effect for Angular components. This component allows you to create a glowing, animated border that can be customized in terms of colors, border radius, and animation duration.

## Features

- Animated border effect with customizable gradient colors.
- Flexible configuration for border radius, border color, and animation speed.
- Lightweight and easy to integrate as a standalone component.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-border-beam
```

## Usage

Import the `NgxBorderBeamComponent` in your Angular module or component:

```typescript
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';

@Component({
  ...
  imports: [
    ...
    NgxBorderBeamComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-border-beam
  [gradientColorStart]="'#ffaa40'"
  [gradientColorEnd]="'#9c40ff'"
  [borderRadius]="'0.5rem'"
  [borderColor]="'hsl(240, 3.9%, 15.1%)'"
  [animationDuration]="'12s'"
  styleClass="custom-class"
>
  <p>Your content here</p>
</om-border-beam>
```

## API

```html
<om-border-beam
  [gradientColorStart]="colorFrom"
  [gradientColorEnd]="colorTo"
  [borderRadius]="borderRadius"
  [borderColor]="borderColor"
  [animationDuration]="animationDuration"
  styleClass="your-custom-class"
>
  <ng-content></ng-content>
</om-border-beam>
```

- gradientColorStart: (optional) The starting color of the border's gradient.
- gradientColorEnd: (optional) The ending color of the border's gradient.
- borderRadius: (optional) The border radius of the component. Accepts any valid CSS border-radius value.
- borderColor: (optional) The color of the border.
- animationDuration: (optional) The duration of the border animation. Accepts any valid CSS time value (e.g., 12s).
- styleClass: (optional) A custom CSS class to apply to the component's wrapper element.

## Example

```html
<om-border-beam
  [gradientColorStart]="'#ff7f50'"
  [gradientColorEnd]="'#6495ed'"
  [borderRadius]="'1rem'"
  [borderColor]="'#2f4f4f'"
  [animationDuration]="'8s'"
  styleClass="example-class"
>
  <h1>Highlighted Heading</h1>
</om-border-beam>
```

This will create a glowing, animated border around the heading with a custom gradient, border radius, and animation speed.

## Styling
To customize the appearance of the border or container, use the styleClass input to apply your own CSS classes.

```css
.example-class {
  padding: 10px;
  background-color: #f0f0f0;
}
```

## Contributing
Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License
This project is licensed under the MIT License.