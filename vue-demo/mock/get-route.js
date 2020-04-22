import Mock from 'mockjs'

const data = Mock.mock({
  'data': {
    'router': [
      {
        'path': '',
        'component': 'Layout',
        'redirect': 'dashboard',
        'children': [
          {
            'path': 'dashboard',
            'component': 'dashboard/index',
            'meta': {
              'title': '首页',
              'icon': 'dashboard'
            }
          }
        ]
      },
      {
        'path': '/example',
        'component': 'Layout',
        'redirect': '/example/table',
        'name': 'Example',
        'meta': {
          'title': '案例',
          'icon': 'example'
        },
        'children': [
          {
            'path': 'table',
            'name': 'Table',
            'component': 'table/index',
            'meta': {
              'title': '表格',
              'icon': 'table'
            }
          },

          {
            'path': 'tree',
            'name': 'Tree',
            'component': 'tree/index',
            'meta': {
              'title': '树形菜单',
              'icon': 'tree'
            }
          }
        ]
      },
      {
        'path': '/form',
        'component': 'Layout',
        'children': [
          {
            'path': 'index',
            'name': 'Form',
            'component': 'form/index',
            'meta': {
              'title': '表单',
              'icon': 'form'
            }
          }
        ]
      },
      {
        'path': '*',
        'redirect': '/404',
        'hidden': true
      }
    ]
  }
})

export default [
  {
    url: '/vue-admin-template/config/list',
    type: 'get',
    response: config => {
      const router = data.data.router
      return {
        code: 20000,
        data: router
      }
    }
  }
]
