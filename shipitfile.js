module.exports = shipit => {
  require('shipit-deploy')(shipit)
  require('shipit-npm')(shipit)

  shipit.initConfig({
    default: {
      workspace: '/tmp/bizapp-site-tmp',
      deployTo: '/tmp/bizapp-site',
      repositoryUrl: 'https://github.com/helozjisky/bizapp-site.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      npm: {
        installFlags: ['--production']
      }
    },
    staging: {
      servers: ['dc2-user@116.85.9.252'],
      branch: 'master'
    },
    production: {
      servers: [{
        host: '114.116.29.182',
        user: 'jason'
      }]
    },
    development: {
      servers: ['jason@localhost'],
      branch: 'master'
    },
    test: {
      servers: ['jason@localhost'],
      branch: 'master'
    }
  })

  shipit.task('build', function() {
    // ...
    shipit.emit('built')
  })

  shipit.task('start-server', function() {
    return shipit.remote('pwd');
  })

  shipit.on('built', function() {
    shipit.start('start-server')
  })
}
