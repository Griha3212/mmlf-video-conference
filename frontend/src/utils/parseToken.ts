export const parseToken = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = JSON.parse(decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join('')));
  return jsonPayload;
};

export default parseToken;
