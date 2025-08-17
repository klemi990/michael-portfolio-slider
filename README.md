# Michael Kleinert - Portfolio Slider V2

A keyboard-first, timeline-based portfolio experience that tells Michael's story through milestone slides with optional course "intermezzo" inserts.

## Features

### Core Functionality
- **Keyboard Navigation**: Left/Right arrows, Space to advance, Home/End to jump
- **Timeline Navigation**: Clickable timeline with years and milestones
- **Touch/Swipe Support**: Mobile-friendly swipe navigation
- **Deep Linking**: Shareable URLs for each slide (e.g., `/#slide-7`)
- **Responsive Design**: Optimized for desktop, tablet, and mobile

### Accessibility
- **WCAG AA Compliance**: High contrast, keyboard navigation
- **Screen Reader Support**: ARIA roles and labels
- **Reduced Motion**: Respects user preferences
- **Focus Management**: Clear focus indicators

### Performance
- **Lazy Loading**: Images load as needed
- **Preloading**: Critical assets preloaded
- **Optimized Assets**: Compressed images and minimal dependencies

## Project Structure

```
/
├── index.html              # Main entry point
├── css/
│   ├── main.css           # Core styles and layout
│   ├── components.css     # Component-specific styles
│   └── responsive.css     # Mobile/tablet adaptations
├── js/
│   ├── app.js            # Main application logic
│   ├── navigation.js     # Navigation functionality
│   ├── timeline.js       # Timeline functionality
│   └── analytics.js      # Event tracking
├── photos/               # Slide images
└── README.md
```

## Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **Navigate** using:
   - Arrow keys (←/→)
   - Space bar to advance
   - Home/End to jump to first/last slide
   - Click timeline items to jump to specific slides
   - Swipe on mobile devices

## Slide Content

### Slide 1: Introduction
- **Headline**: "Get ahead. Get Michael"
- **Subheadline**: "PRODUCT & DISCOVERY PERSON"
- **Content**: Introduction with Michael's photo
- **CTA**: "Explore my journey"

### Additional Slides (2-10)
- **Slide 2**: 2018 - Prague fundraising story
- **Slide 3**: 2018 - First big success (160% goal)
- **Slide 4**: 2019 - First websites, Hnutí DUHA
- **Slide 5**: 2021 - Helping mayors with renewables
- **Slide 6**: 2022 - Energy cooperative (CZK 1.5M, 200+ investors)
- **Slide 7**: 2023 - Insurance app (4.7/5 rating)
- **Slide 8**: Experience summary
- **Slide 9**: Lessons learned
- **Slide 10**: Contact and call-to-action

## Navigation Features

### Keyboard Shortcuts
- `←` or `A`: Previous slide
- `→` or `D`: Next slide
- `Space`: Next slide
- `Home`: First slide
- `End`: Last slide

### Timeline Navigation
- Click any timeline item to jump to that slide
- Timeline shows years and milestone labels
- Active slide highlighted in timeline

### Mobile Features
- **Swipe Navigation**: Swipe left/right to navigate
- **Portrait Prompt**: Suggests landscape orientation for best experience
- **Responsive Layout**: Optimized for all screen sizes

## Persistent Elements

### Header
- **LinkedIn Link**: Always visible, opens in new tab
- **Resume CTA**: Links to final slide for download

### Footer
- **Contact Link**: Email link (mailto:mich.kleinert@gmail.com)

## Analytics Tracking

The application tracks:
- Page views
- Slide navigation
- Resume downloads
- LinkedIn clicks
- Email contacts

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Accessibility**: Screen readers, keyboard navigation

## Performance Targets

- **First Paint**: <1.5s
- **Interactive**: <2.5s
- **Story Completion Rate**: ≥50%
- **Time to First Interaction**: ≤30s

## Development

### Adding New Slides
1. Add slide HTML to `index.html`
2. Update timeline data in `js/app.js`
3. Add slide-specific styles to CSS files

### Customization
- **Colors**: Modify CSS custom properties
- **Typography**: Update font families and sizes
- **Animations**: Adjust transition timings
- **Content**: Update slide content in HTML

## License

This project is for Michael Kleinert's personal portfolio use.

## Contact

For questions or feedback, contact Michael at mich.kleinert@gmail.com
