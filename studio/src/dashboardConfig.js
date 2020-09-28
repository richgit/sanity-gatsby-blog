export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f713140278576ab85d087a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kr7vwrr3',
                  apiId: 'ac6b60c1-6b9d-4bd6-a56b-29cf8b6b0953'
                },
                {
                  buildHookId: '5f713140bce561927603e8aa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tbke23gd',
                  apiId: 'e7c1403a-f4f4-43b4-abad-0a1638d4ec4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richgit/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tbke23gd.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
