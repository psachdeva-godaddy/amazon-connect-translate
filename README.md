# amazon-connect-translate

A basic gasket app

## Local Setup

To support https with SSO for local development, first update your hosts file
to include:

```
127.0.0.1  local.gasket.dev-godaddy.com
```

Now start up the app.

```bash
cd amazon-connect-translate

npm install

npm run local
```

The app should now be accessible over https on port 8443 at:

```
https://local.gasket.dev-godaddy.com:8443
```

### Page Router

This Gasket app uses Next.js 14 with [Page Router] which relies on the traditional file-based routing within the pages directory. The integration with Next.js 14 leverages features like server-side rendering and static optimization, providing a streamlined development process and ensuring the app remains efficient and scalable.

### Development Proxy

The HTTPS proxy in this Gasket app forwards requests to the default Next.js server, enabling HTTPS for development and support on deployed servers.


<!-- LINKS -->
[App Router]: https://nextjs.org/docs/app
[Page Router]: https://nextjs.org/docs/pages
[Custom Server]: https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
[EcmaScript Modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[Page Router]: https://nextjs.org/docs/pages
