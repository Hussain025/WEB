# Registration System Design

## Overview
The registration system is implemented as a simple external link integration that opens a Google Form in a new browser tab. This approach leverages Google Forms for data collection while keeping the landing page lightweight and focused.

## Architecture

### Component Structure
```
Hero Component
  └── Button Component (Register Now)
       └── handleRegisterClick() handler
            └── window.open() → Google Form
```

### Design Approach
**External Form Strategy:** Instead of building a custom form, we redirect users to a pre-configured Google Form. This provides:
- Zero maintenance for form infrastructure
- Built-in data collection and validation
- Familiar user experience
- No backend requirements

## Implementation Details

### 1. Button Component Integration

**Location:** `src/components/Hero.tsx`

The Hero component contains the registration button in its CTA section:

```tsx
<Button variant="primary" onClick={handleRegisterClick}>
  Register Now
</Button>
```

**Button Properties:**
- Variant: `primary` (orange gradient styling)
- Label: "Register Now"
- Event handler: `handleRegisterClick`

### 2. Click Handler

**Function:** `handleRegisterClick()`

```tsx
const handleRegisterClick = () => {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSdWlwM1klx1ZNMCNYkZBDpsRUuwBhjd-h4tSPn_fMojSyKIWw/viewform',
    '_blank'
  );
};
```

**Behavior:**
- Opens Google Form URL in new tab (`_blank` target)
- Non-blocking (main page remains active)
- No state management required
- No loading indicators needed

### 3. URL Configuration

**Google Form URL:**
```
https://docs.google.com/forms/d/e/1FAIpQLSdWlwM1klx1ZNMCNYkZBDpsRUuwBhjd-h4tSPn_fMojSyKIWw/viewform
```

**URL Structure:**
- Base: `docs.google.com/forms`
- Form ID: `1FAIpQLSdWlwM1klx1ZNMCNYkZBDpsRUuwBhjd-h4tSPn_fMojSyKIWw`
- View mode: `viewform`

## User Flow

1. User lands on HackIndia 2026 website
2. User sees "Register Now" button in Hero section
3. User clicks button
4. New browser tab opens with Google Form
5. User completes registration in Google Form
6. User can return to landing page tab

## Technical Decisions

### Why External Form?
- **Simplicity:** No form state management, validation, or submission logic
- **Reliability:** Google Forms handles all edge cases
- **Speed:** Faster implementation and deployment
- **Maintenance:** Zero ongoing maintenance for form infrastructure
- **Data Management:** Google Sheets integration for organizers

### Why window.open()?
- **Standard approach:** Native browser API
- **New tab behavior:** Preserves landing page state
- **No dependencies:** No routing or navigation libraries needed
- **Universal support:** Works across all browsers

### Why No Modal?
- **User experience:** External forms work better in full tab
- **Simplicity:** No modal state management
- **Mobile friendly:** Full-screen form on mobile devices
- **No complexity:** Avoids iframe security and styling issues

## Styling Integration

The button inherits styling from the Button component:
- Primary variant: Orange gradient background
- Hover effects: Scale and glow animations (Framer Motion)
- Responsive sizing: Adapts to screen size
- Consistent with design system

## Error Handling

**Popup Blockers:**
- Modern browsers allow `window.open()` from user-initiated events
- Click handler ensures user action triggers the open
- No additional popup blocker handling needed

**Browser Compatibility:**
- `window.open()` is universally supported
- `_blank` target works in all modern browsers
- No polyfills required

## Future Considerations

If custom form is needed later:
- Replace `handleRegisterClick` with modal trigger
- Add form component with validation
- Integrate Supabase for data storage
- Add success/error states

Current implementation can be easily extended without breaking changes.

## Testing Approach

**Manual Testing:**
- Click button on desktop browsers
- Click button on mobile devices
- Verify new tab opens correctly
- Confirm form loads properly
- Test with popup blockers enabled

**No Automated Tests Required:**
- Simple click handler with no logic
- External form validation handled by Google
- No state to test

## Dependencies

**None.** The implementation uses only:
- React built-in hooks (for component structure)
- Native browser APIs (`window.open`)
- Existing Button component

No additional packages or services required.
