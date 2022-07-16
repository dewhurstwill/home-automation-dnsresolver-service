const makeRequest = require('./rest');

async function resolveDomain(domain) {
  const headers = { accept: 'application/dns-json' };
  const response = await makeRequest(
    'GET',
    `https://cloudflare-dns.com/dns-query?name=${domain}`,
    headers
  );
  return response;
}

module.exports = resolveDomain;

// type=AAAA'
