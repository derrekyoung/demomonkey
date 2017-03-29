import Command from '../Command'

class ReplaceFlowmapIcon extends Command {
  static icons = {
    // agents
    'java': 'images/icon_nodetype_java_100x100.png',
    'dotnet': 'images/icon_nodetype_dotnet_100x100.png',
    '.net': 'images/icon_nodetype_dotnet_100x100.png',
    'node': 'images/icon_nodetype_node_100x100.png',
    'node.js': 'images/icon_nodetype_node_100x100.png',
    'nodejs': 'images/icon_nodetype_node_100x100.png',
    'php': 'images/icon_nodetype_php_100x100.png',
    'python': 'images/icon_nodetype_python_100x100.png',
    'native': 'images/icon_nodetype_native_100x100.png',
    'c': 'images/icon_nodetype_native_100x100.png',
    'c++': 'images/icon_nodetype_native_100x100.png',
    'webserver': 'images/tierTypes/WebServers.svg',
    'apache': 'images/tierTypes/WebServers.svg',
    // backends
    'cache': 'svg/cache.svg',
    'cassandra': 'svg/cassandra.svg',
    'corba': 'svg/corba.svg',
    'custom': 'svg/custom.svg',
    'db': 'svg/db.svg',
    'erp': 'svg/erp.svg',
    'esb': 'svg/esb.svg',
    'fileserver': 'svg/fileServer.svg',
    'http': 'svg/http.svg',
    'ldap': 'svg/ldap.svg',
    'mailserver': 'svg/mailServer.svg',
    'mainframe': 'svg/mainframe.svg',
    'messageserver': 'svg/messageserver.svg',
    'mod': 'svg/mod.svg',
    'queue': 'svg/queue.svg',
    'rmi': 'svg/rmi.svg',
    'sap': 'svg/sap.svg',
    'socket': 'svg/socket.svg',
    'sqs': 'svg/sqs.svg',
    'thrift': 'svg/thrift.svg',
    'tibco': 'svg/tibco.svg',
    'tibco async': 'svg/tibcoAsync.svg',
    'topic': 'svg/topic.svg',
    'ws': 'svg/ws.svg'
  }
  constructor(appName, newIcon) {
    super(false)
    this.appName = appName
    this.newIcon = ReplaceFlowmapIcon.icons[newIcon.toLowerCase()] ? ReplaceFlowmapIcon.icons[newIcon.toLowerCase()] : newIcon
  }

  apply(node, key) {
    if (typeof this.newIcon !== 'undefined' && node[key].trim() === this.appName) {
      var parent = this._walk(node, 2)
      if (parent !== false) {
        var image = parent.querySelector('image')
        if (image !== null) {
          image.href.baseVal = this.newIcon
        }
      }
    }
  }
}

export default ReplaceFlowmapIcon
