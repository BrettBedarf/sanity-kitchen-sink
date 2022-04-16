export default {
  widgets: [
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
                  buildHookId: '625a5551a065693d4673bdff',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-d1tc23co',
                  apiId: 'b1a8e200-45da-4538-9135-db4a7d4f4bc1'
                },
                {
                  buildHookId: '625a5551803dea48c8a08336',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-e4aorr8g',
                  apiId: 'c52ad3e4-9553-4c26-8596-680a9962f055'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BrettBedarf/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-e4aorr8g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
