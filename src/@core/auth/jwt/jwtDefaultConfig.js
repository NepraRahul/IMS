export default {
  // Endpoints
  loginEndpoint: 'http://192.168.10.30/IMS/public/api/web/v1/master-admin/login',
  usersloginEndpoint: 'http://192.168.10.30/IMS/public/api/company/v1/login',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: '/jwt/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
