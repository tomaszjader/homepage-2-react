export const getImagePath = (path: string) => {
  return process.env.NODE_ENV === 'development' 
    ? `/${path}`
    : path;
}; 