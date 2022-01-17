const dns = require('dns')

dns.lookup('jd.com', (err, address, family) => {
  console.log(address);
})