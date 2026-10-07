import { writeFile } from 'node:fs/promises';

const token = process.env.ADS_TOKEN;

if (!token) {
  throw new Error('Set ADS_TOKEN before running npm run sync:citations.');
}

const publications = [
  {
    identifier: 'astro-ph/2609.00263',
    query: 'arXiv:2609.00263'
  },
  {
    identifier: 'astro-ph/2608.19756',
    query: 'arXiv:2608.19756'
  },
  {
    identifier: 'astro-ph/2607.09873',
    query: 'arXiv:2607.09873'
  },
  {
    identifier: 'astro-ph/2511.16771',
    query: 'arXiv:2511.16771'
  },
  {
    identifier: 'astro-ph/2607.06708',
    query: 'arXiv:2607.06708'
  },
  {
    identifier: 'doi:10.3847/1538-3881/ae019a',
    query: 'doi:"10.3847/1538-3881/ae019a"'
  },
  {
    identifier: 'doi:10.3847/2041-8213/adf282',
    query: 'doi:"10.3847/2041-8213/adf282"'
  },
  {
    identifier: 'astro-ph/2505.10910',
    query: 'arXiv:2505.10910'
  },
  {
    identifier: 'astro-ph/2504.13997',
    query: 'arXiv:2504.13997'
  },
  {
    identifier: 'astro-ph/2504.08903',
    query: 'arXiv:2504.08903'
  },
  {
    identifier: 'doi:10.1109/ITCA52113.2020.00009',
    query: 'doi:"10.1109/ITCA52113.2020.00009"'
  },
  {
    identifier: 'doi:10.1088/1755-1315/658/1/012051',
    query: 'doi:"10.1088/1755-1315/658/1/012051"'
  }
];

const citationCounts = {};

for (const publication of publications) {
  const params = new URLSearchParams({
    q: publication.query,
    fl: 'bibcode,citation_count,title',
    rows: '1'
  });

  const response = await fetch(`https://api.adsabs.harvard.edu/v1/search/query?${params}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`ADS request failed for ${publication.identifier}: ${response.status}`);
  }

  const data = await response.json();
  const doc = data.response?.docs?.[0];
  citationCounts[publication.identifier] = doc?.citation_count ?? 0;
}

await writeFile('src/citation-counts.json', `${JSON.stringify(citationCounts, null, 2)}\n`);
