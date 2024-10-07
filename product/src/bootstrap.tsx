import App from './App';
import { createRoot } from 'react-dom/client';

// Mount function to start up the app
const mount = (el: HTMLElement, { url }: { url?: string }) => {
  const root = createRoot(el!);
  root.render(<App url={url} />);

  return {
    root,
  };
};

// We are running through container
// and we should export the mount function
export { mount };
