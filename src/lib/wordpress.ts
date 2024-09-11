const WP_API_URL = 'http://blog.3zerodigital.com/graphql';

export interface CaseStudy {
  id: string;
  title: string;
  content: string;
  slug: string;
  outcome: string;
  services: string[];
  description: string;
}

interface CaseStudyFields {
  outcome: string;
  services: string;
  description: string;
}

interface CaseStudyNode {
  id: string;
  title: string;
  content: string;
  slug: string;
  caseStudyFields: CaseStudyFields;
}

interface GraphQLCaseStudiesResponse {
  data: {
    caseStudies: {
      edges: {
        node: CaseStudyNode;
      }[];
    };
  };
  errors?: { message: string }[];
}

interface GraphQLCaseStudyBySlugResponse {
  data: {
    caseStudyBy: CaseStudyNode;
  };
  errors?: { message: string }[];
}

export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  const query = `
    query NewQuery {
      caseStudies {
        edges {
          node {
            id
            title
            content
            slug
            caseStudyFields {
              outcome
              services
              description
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const json: GraphQLCaseStudiesResponse = await response.json();

    // Check for GraphQL errors
    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      return [];
    }

    // Map the data and return case studies
    const caseStudies = json.data.caseStudies.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      content: node.content,
      slug: node.slug,
      outcome: node.caseStudyFields?.outcome || '',
      services: node.caseStudyFields?.services.split(',') || [],
      description: node.caseStudyFields?.description || '',
    }));

    return caseStudies;
  } catch (error) {
    console.error('Fetch Error:', error);
    return [];
  }
}

export async function fetchCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  const query = `
    query CaseStudyBySlug($slug: String!) {
      caseStudyBy(slug: $slug) {
        id
        title
        content(format: RENDERED)
        slug
        caseStudyFields {
          outcome
          services
          description
        }
      }
    }
  `;

  try {
    const response = await fetch(WP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { slug },
      }),
    });

    const json: GraphQLCaseStudyBySlugResponse = await response.json();

    // Check for GraphQL errors
    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      return null;
    }

    const node = json.data.caseStudyBy;

    // Return the case study with formatted fields
    return {
      id: node.id,
      title: node.title,
      content: node.content,
      slug: node.slug,
      outcome: node.caseStudyFields?.outcome || '',
      services: node.caseStudyFields?.services.split(',') || [],
      description: node.caseStudyFields?.description || '',
    };
  } catch (error) {
    console.error('Fetch Error:', error);
    return null;
  }
}