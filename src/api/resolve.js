const express = require('express');
const {
  resolveDomain
} = require('../helpers');

const router = express.Router();

const help = {
  status: 'The Response Code of the DNS Query. https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6.',
  TC: 'If true, it means the truncated bit was set. This happens when the DNS answer is larger than a single UDP or TCP packet. TC will almost always be false with Cloudflare DNS over HTTPS because Cloudflare supports the maximum response size.',
  RD: 'If true, it means the Recursive Desired bit was set. This is always set to true for Cloudflare DNS over HTTPS.',
  RA: 'If true, it means the Recursion Available bit was set. This is always set to true for Cloudflare DNS over HTTPS.',
  AD: 'If true, it means that every record in the answer was verified with DNSSEC.',
  CD: 'If true, the client asked to disable DNSSEC validation. In this case, Cloudflare will still fetch the DNSSEC-related records, but it will not attempt to validate the records.',
  Question: {
    name: 'The record name requested.',
    type: 'The type of DNS record requested. These are defined here: https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4.'
  },
  Answer: {
    name: 'The record owner.',
    type: 'The type of DNS record. These are defined here: https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4.',
    TTL: 'The number of seconds the answer can be stored in cache before it is considered stale.',
    data: 'The value of the DNS record for the given name and type. The data will be in text for standardized record types and in hex for unknown types.'
  }
}

router.get('/:domain', async (req, res) => {
  const returnHelp = req.query.help === 'true';
  try {
    const { domain } = req.params;
    const resolvedDomain = await resolveDomain(domain);
    const response = { resolvedDomain };
    if (returnHelp) response.fields = help;
    return res.json(response);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
