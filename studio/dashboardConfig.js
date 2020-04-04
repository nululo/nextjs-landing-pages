export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e89063ff6dd61b030b6eea9',
                  title: 'Sanity Studio',
                  name: 'nextjs-landing-pages-studio',
                  apiId: '715cefc0-1ded-4284-b5be-9b26316fa8b3'
                },
                {
                  buildHookId: '5e89063fe5fe8196a09ce9bb',
                  title: 'Landing pages Website',
                  name: 'nextjs-landing-pages',
                  apiId: '3dd97a97-77c5-4ef8-814d-5d61eedc1b60'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nululo/nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-landing-pages.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
