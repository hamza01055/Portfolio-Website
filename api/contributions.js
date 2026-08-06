// Vercel serverless function — proxies GitHub's GraphQL contributionsCollection
// query so the browser never sees a GitHub token. Requires a GITHUB_TOKEN env
// var set in the Vercel project (Settings → Environment Variables), scoped to
// a personal access token with no special permissions (public read is enough).
export default async function handler(req, res) {
  const username = req.query.username;
  if (!username) {
    res.status(400).json({ error: 'missing username' });
    return;
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'server missing GITHUB_TOKEN' });
    return;
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
          totalRepositoriesWithContributedCommits
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
          nodes {
            primaryLanguage { name color }
            stargazerCount
            forkCount
          }
        }
      }
    }
  `;

  try {
    const ghRes = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables: { login: username } }),
    });

    if (!ghRes.ok) {
      res.status(502).json({ error: 'github request failed' });
      return;
    }

    const json = await ghRes.json();
    if (json.errors) {
      res.status(502).json({ error: 'github graphql error' });
      return;
    }

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(json.data);
  } catch {
    res.status(502).json({ error: 'proxy request failed' });
  }
}
