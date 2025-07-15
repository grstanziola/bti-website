const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export async function fetchAPI(endpoint: string) {
  const res = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getHero() {
  return fetchAPI('/heroes?populate=*')
}

export async function getCompanyInfo() {
  return fetchAPI('/company-infos?populate=*')
}

export async function getSectors() {
  return fetchAPI('/sectors?populate=*')
}

export async function getProducts() {
  return fetchAPI('/products?populate=*')
}

export async function getProjects() {
  return fetchAPI('/projects?populate=*&sort=featured:desc')
}

export async function getClientTypes() {
  return fetchAPI('/client-types?populate=*')
}

export async function getServices() {
  return fetchAPI('/services?populate=*&sort=order:asc')
}

export async function getContact() {
  return fetchAPI('/contact?populate=*')
}