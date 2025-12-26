import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // Placeholder for future IPC bridges; kept empty for now for security.
});
