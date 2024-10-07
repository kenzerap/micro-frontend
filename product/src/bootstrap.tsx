import App from './App';
import { createRoot } from 'react-dom/client';

// Mount function to start up the app
const mount = (el: HTMLElement) => {
  const root = createRoot(el!);
  root.render(<App />);

  return {
    root,
  };
  // .render(<App />);
};

// We are running through container
// and we should export the mount function
export { mount };
