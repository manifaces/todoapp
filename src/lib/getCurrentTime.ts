export const getCurrentTime = (): string => {
  return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};