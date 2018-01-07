# exmo-api

Exmo (Bitcoin Exchange) API client

## Getting Started
Install the module with: `npm install exmo-api-promise`

```javascript
const exmo = require('exmo-api-promise')
exmo.init({key:"your_key", secret:"your_secret"})
exmo.query("user_info", {}).then(result => { ... })
```

## Documentation
[Exmo.com Trade API](https://wallet.exmo.com/en/api_doc#/authenticated_api)

## Release History
_0.1.0_

## License
Copyright (c) 2016 exmo-dev  
Licensed under the MIT license.
