export default function getBaseUrl(){
  const inDevelopment = window.location === 'localhost';
  return inDevelopment ? 'http://localhost:3001': '/';
}
