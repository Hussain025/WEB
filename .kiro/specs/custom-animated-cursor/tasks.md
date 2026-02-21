# Implementation Plan: Custom Animated Cursor

## Overview

This plan implements a custom animated cursor feature for the HackIndia 2026 landing page. The cursor includes a main dot, outer ring with spring animations, trail effects, and sparkle particles on hover. The implementation uses React with TypeScript, Framer Motion for animations, and Tailwind CSS for styling. The cursor is desktop-only and uses mix-blend-difference for visibility across all backgrounds.

## Tasks

- [x] 1. Create cursor component structure and utilities
  - [x] 1.1 Create CustomCursor component with TypeScript interfaces
    - Create `src/components/CustomCursor.tsx` with main component structure
    - Define TypeScript interfaces: `CursorState`, `TrailParticle`, `SparkleParticle`, `MousePosition`
    - Set up component state using useState hooks for mouse position, hover state, visibility, trails, and sparkles
    - Add data-testid attributes for testing
    - _Requirements: 1.1, 1.2, 10.4_

  - [x] 1.2 Implement device detection and responsive logic
    - Create `detectTouchDevice()` utility function using pointer media queries and navigator.maxTouchPoints
    - Add viewport width detection (hide cursor below 768px)
    - Set `shouldRender` state based on device and viewport detection
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 1.3 Implement utility functions
    - Create `getInteractiveElements()` function to query buttons, links, inputs, and .cursor-pointer elements
    - Create `throttle()` function for performance optimization
    - Add helper functions for particle ID generation
    - _Requirements: 4.3, 4.4, 4.5, 4.6_

  - [ ]* 1.4 Write property test for device detection
    - **Property 10: Responsive Rendering**
    - **Validates: Requirements 8.1**

- [x] 2. Implement cursor dot and ring components
  - [x] 2.1 Create CursorDot component
    - Create inline component within CustomCursor.tsx
    - Accept props: x, y, isHovering
    - Use Framer Motion's motion.div with spring transition
    - Apply mix-blend-difference mode and white color
    - Size: 10px default, scale to 0.6 when hovering
    - Position using CSS transform (translate3d for GPU acceleration)
    - Add will-change CSS property
    - _Requirements: 1.1, 1.3, 5.2, 7.1, 7.6, 9.1_

  - [ ]* 2.2 Write property test for cursor dot positioning
    - **Property 1: Cursor Position Tracking**
    - **Validates: Requirements 1.1, 2.1**

  - [x] 2.3 Create CursorRing component
    - Create inline component within CustomCursor.tsx
    - Accept props: x, y, isHovering
    - Use Framer Motion's motion.div with spring transition (damping: 20, stiffness: 300)
    - Apply 2px white border with 40% opacity
    - Size: 36px default, scale to 1.5 when hovering
    - Add 100ms delay to follow cursor (spring animation provides natural lag)
    - Position using CSS transform
    - Add will-change CSS property
    - _Requirements: 1.2, 1.4, 2.2, 2.4, 5.1, 5.3, 7.1, 7.6, 9.2_

  - [ ]* 2.4 Write property test for ring lag behavior
    - **Property 3: Ring Lag Behavior**
    - **Validates: Requirements 2.4**

  - [ ]* 2.5 Write property test for element size constraints
    - **Property 2: Element Size Constraints**
    - **Validates: Requirements 1.3, 1.4, 5.1, 5.2**

- [x] 3. Implement mouse tracking and event handling
  - [x] 3.1 Set up mousemove event listener
    - Add mousemove listener in useEffect on component mount
    - Update mouseX and mouseY state on mouse movement
    - Use requestAnimationFrame for smooth 60 FPS updates
    - Validate coordinates are within viewport bounds
    - Add error handling with try-catch
    - _Requirements: 2.1, 2.5, 7.2, 10.1_

  - [x] 3.2 Implement viewport enter/exit detection
    - Add mouseenter and mouseleave listeners on document
    - Set isVisible state to false when cursor leaves viewport
    - Set isVisible state to true when cursor re-enters viewport
    - Hide cursor elements when isVisible is false
    - _Requirements: 8.4, 8.5_

  - [x] 3.3 Implement hover state detection
    - Query all interactive elements using getInteractiveElements()
    - Add mouseenter listeners to set isHovering to true
    - Add mouseleave listeners to set isHovering to false
    - Ensure transitions complete within 150ms using Framer Motion
    - Re-query elements if DOM changes (use MutationObserver or re-run on interval)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [x] 3.4 Implement event listener cleanup
    - Remove all event listeners in useEffect cleanup function
    - Cancel pending requestAnimationFrame calls
    - Clear all particle arrays
    - Restore default cursor style
    - _Requirements: 10.2, 10.3, 10.5_

  - [ ]* 3.5 Write property test for hover state transitions
    - **Property 6: Hover State Transition Timing**
    - **Validates: Requirements 4.1, 4.2**

  - [ ]* 3.6 Write property test for viewport boundary behavior
    - **Property 11: Viewport Boundary Behavior**
    - **Validates: Requirements 8.4, 8.5**

- [ ] 4. Checkpoint - Ensure basic cursor functionality works
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implement trail effect system
  - [x] 5.1 Create TrailParticle component
    - Create inline component within CustomCursor.tsx
    - Accept props: x, y, id, onComplete callback
    - Use Framer Motion for fade-out and scale-down animation
    - Initial size: 6px, final size: 2px
    - Animation duration: 400ms
    - White color with opacity fade from 0.6 to 0
    - Call onComplete when animation finishes
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [x] 5.2 Implement trail particle generation
    - Generate trail particle on mousemove (throttled to every 50ms)
    - Create particle with current mouse position and unique ID
    - Add particle to trails array (max 5 concurrent)
    - Remove oldest particle if limit exceeded
    - Set up auto-cleanup timer to remove particle after 500ms
    - _Requirements: 3.1, 3.2, 7.3_

  - [ ]* 5.3 Write property test for trail lifecycle
    - **Property 5: Trail Generation and Lifecycle**
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 7.3**

- [x] 6. Implement sparkle effect system
  - [x] 6.1 Create SparkleParticle component
    - Create inline component within CustomCursor.tsx
    - Accept props: x, y, angle, color, id, onComplete callback
    - Use Framer Motion for outward movement, rotation, and fade-out
    - Move 20-30px outward based on angle
    - Rotate during animation
    - Animation duration: 500ms
    - Size: 4px
    - Colors: orange (#f97316) or green (#22c55e)
    - Call onComplete when animation finishes
    - _Requirements: 6.1, 6.3, 6.4, 6.5, 6.6_

  - [x] 6.2 Implement sparkle particle generation on hover
    - Generate 4 sparkle particles when isHovering changes to true
    - Position particles at current cursor position
    - Distribute angles evenly (0°, 90°, 180°, 270°)
    - Alternate colors between orange and green
    - Add particles to sparkles array (max 6 concurrent)
    - Set up auto-cleanup timer to remove particles after 600ms
    - _Requirements: 6.1, 6.2, 6.3, 6.5, 7.4_

  - [ ]* 6.3 Write property test for sparkle generation
    - **Property 8: Sparkle Generation and Behavior**
    - **Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 7.4**

  - [ ]* 6.4 Write property test for hover state visual changes
    - **Property 7: Hover State Visual Changes**
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.5**

- [x] 7. Implement performance optimization
  - [x] 7.1 Add performance monitoring
    - Track frame rate using performance.now()
    - Calculate FPS every second
    - Set performanceMode state: 'full', 'reduced', or 'minimal'
    - Reduce effects when FPS < 30 (reduced mode)
    - Disable trail/sparkles when FPS < 20 (minimal mode)
    - _Requirements: 7.5_

  - [x] 7.2 Optimize particle rendering
    - Use CSS transforms for all position updates
    - Apply will-change property to animated elements
    - Ensure requestAnimationFrame is used for all animations
    - Enforce particle count limits (5 trails, 6 sparkles)
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.6_

  - [ ]* 7.3 Write property test for frame rate maintenance
    - **Property 4: Frame Rate Maintenance**
    - **Validates: Requirements 2.5**

  - [ ]* 7.4 Write property test for performance degradation handling
    - **Property 9: Performance Degradation Handling**
    - **Validates: Requirements 7.5**

- [x] 8. Add global cursor styling and integration
  - [x] 8.1 Hide default system cursor
    - Add CSS to hide default cursor: `body { cursor: none; }`
    - Apply cursor: none to all interactive elements when CustomCursor is active
    - Add styles to index.css or inline in component
    - _Requirements: 1.6_

  - [x] 8.2 Integrate CustomCursor into App component
    - Import CustomCursor in App.tsx
    - Add CustomCursor as a sibling to ParticleBackground at root level
    - Ensure cursor has high z-index (z-50 or higher)
    - Position as fixed to cover entire viewport
    - Set pointer-events: none on cursor container to avoid blocking clicks
    - _Requirements: 1.1, 1.2_

  - [ ]* 8.3 Write unit tests for component integration
    - Test cursor renders in App component
    - Test cursor doesn't interfere with button clicks
    - Test cursor respects z-index layering
    - Test cursor works with existing Framer Motion animations

- [ ] 9. Checkpoint - Ensure all features work together
  - Ensure all tests pass, ask the user if questions arise.

- [-] 10. Final polish and edge case handling
  - [x] 10.1 Add error boundaries and validation
    - Wrap event handlers in try-catch blocks
    - Validate mouse coordinates before state updates
    - Handle missing or invalid DOM elements gracefully
    - Add console.error logging for development debugging
    - _Requirements: 10.1, 10.2, 10.3_

  - [x] 10.2 Test and fix edge cases
    - Test rapid mouse movements
    - Test cursor at viewport boundaries (0,0 and max width/height)
    - Test component mount/unmount during active animations
    - Test with dynamically added interactive elements
    - Verify memory cleanup with browser dev tools
    - _Requirements: 2.5, 8.4, 8.5, 10.2, 10.3_

  - [ ]* 10.3 Write property test for color and opacity constraints
    - **Property 12: Color and Opacity Constraints**
    - **Validates: Requirements 9.2, 9.5**

  - [ ]* 10.4 Write property test for lifecycle management
    - **Property 13: Lifecycle Management**
    - **Validates: Requirements 10.1, 10.2, 10.3**

  - [ ]* 10.5 Write unit tests for edge cases
    - Test cursor with rapid mouse movements
    - Test cursor at viewport boundaries
    - Test component mount/unmount during animation
    - Test with invalid mouse coordinates

- [ ] 11. Final checkpoint - Complete testing and validation
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- The cursor uses Framer Motion (already in project dependencies) for all animations
- Performance is critical - use CSS transforms and requestAnimationFrame throughout
- The cursor is desktop-only and will not render on mobile devices or touch screens
- Mix-blend-difference mode ensures cursor visibility on all backgrounds
- All particle systems have strict count limits to prevent memory leaks
- Property tests validate universal behaviors across randomized inputs
- Unit tests validate specific scenarios and integration points
