import App from './App';
import { createRoot } from 'react-dom/client';

// Mount function to start up the app
const mount = (el: HTMLElement, { url }: { url: string }) => {
  createRoot(el!).render(<App url={url} />);
};

// We are running through container
// and we should export the mount function
export { mount };
