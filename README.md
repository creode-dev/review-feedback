# Creode Feedback Visualisation Dashboards

Two React-based visualisation dashboards for analysing employee feedback data using the Creode brand colour scheme.

## Colour Scheme

- **#FD7777** - Coral (brand accent colour) - used for highlights, CTAs, and key metrics
- **#FFFFFF** - White - backgrounds and text on dark
- **#EDEDEF** - Light Grey - card backgrounds and sections
- **#292928** - Dark Grey/Black - primary text and headers
- **#DDD** - Light border grey - borders and dividers

## Dashboards

### 1. Director Feedback (`360-directors-feedback.jsx`)

**Purpose:** Visualise individual-level feedback where directors are mentioned by name.

**Features:**
- Individual director cards with performance summaries
- Click-through detailed views for each person
- Team-wide performance comparison
- Score distribution analysis
- Critical areas identification
- Training needs analysis
- Key feedback quotes highlighted
- Strengths and development areas
- Bento box grid layout for visual appeal

**Data Visualisations:**
- Bar charts for performance comparison
- Theme cards for individual competency mapping
- Distribution charts for score analysis
- Colour-coded severity indicators

### 2. Team Feedback (`staff-review-aggregated.jsx`)

**Purpose:** Aggregate and anonymised feedback analysis showing systemic issues without individual attribution.

**Features:**
- Executive summary with critical findings
- Systemic issues severity analysis
- Risk assessment radar
- Key themes identification with severity levels
- Team-level comparison analysis
- Feedback honesty distribution
- Critical quotes organised by theme
- Performance assessment gap analysis
- Immediate action priorities by timeframe
- Bottom line summary with required next steps

**Data Visualisations:**
- Horizontal bar charts for systemic issues
- Radar chart for risk assessment
- Pie chart for honesty distribution
- Grouped bar charts for team comparison
- Theme cards with severity indicators

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Initialise the project:**

```bash
npm install
```

2. **Run the application:**

```bash
npm run dev
```

## Customisation

### Colours

Update the `COLORS` constant in each file:

```javascript
const COLORS = {
  coral: '#FD7777',
  white: '#FFFFFF',
  lightGrey: '#EDEDEF',
  darkGrey: '#292928',
  borderGrey: '#ddd'
};
```

### Layout

Dashboards use CSS Grid with a 12-column layout. Adjust `gridColumn: 'span X'` values to change component sizes.

### Charts

Charts use Recharts. Customise by modifying:
- Colours via `fill` and `stroke` props
- Dimensions via `ResponsiveContainer` height
- Data via the data props

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Exporting

To export dashboards as static files:

```bash
npm run build
```

The build folder will contain static files you can host anywhere.

## License

Internal use for Creode only.

## Support

For questions or issues, contact the development team.
