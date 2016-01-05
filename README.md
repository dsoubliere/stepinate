# stepinate

Pagination for journeys in steps.

Appends 'Next' and 'Prev' divs to each of the steps.

## Dependencies
- jQuery

## Options
- **next**, **prev**: the div labels
- **pageSelector**: selector to look for pages within
- **nextClass**, **prevClass**: classes for the next and prev divs
- **openPage**: page to start at
- **animPageHide**, **animPageShow**: object of css changes
- **animHideSpeed**, **animShowSpeed**: animation speeds

## Advantages
- Requires no js-specific styles as pages are hidden on initiate
- Maintains the *openPage* setting so that, should more than one Prev or Next button become visible due to another script, order will be kept.
