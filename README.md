# ESBuild Learnings 🚀
GitHub Page: **https://calmaneiser.github.io/esbuild-learnings/**

A simple LitElement project bundled with esbuild demonstrating lazy loading of components and a loading spinner.

---

## Features 👽

- LitElement-based web components
- Lazy load components dynamically with `import()`
- Loading spinner displayed while lazy component loads
- CSS custom properties for easy styling and theming
- Responsive styles with media queries
- Build with esbuild bundler

---

## Setup ⭐

1. Clone the repo:

   ```bash
   git clone https://github.com/calmaneiser/esbuild-learnings.git
   cd esbuild-learnings
2. Install dependencies
3. Build using esbuild: `npm run build` 
   Serve your public/ folder or open index.html in your browser.

## Usage ⭐
Click the Load Lazy Component button to dynamically import the lazy-loaded component.
A spinner appears during loading.
CSS variables allow easy theme customization.
Responsive layout works on mobile and tablet devices.
 
## Notes ⭐
Used static properties instead of @property decorators due to esbuild’s lack of native decorator support.
Manually call requestUpdate() after changing reactive properties for UI updates.
Lazy loading reduces initial bundle size by loading components on demand.
Spinner styles and page layout are in a separate CSS module for modularity.
Git usage was covered including initialization, pushing, and pull-rebase workflow.

##To Do
Integrate Babel with esbuild for decorator support
Expand lazy loading to multiple components
Add unit tests
Improve error handling during lazy loading
