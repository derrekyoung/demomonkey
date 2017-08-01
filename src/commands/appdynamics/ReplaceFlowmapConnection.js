import Command from '../Command'
import UndoElement from '../UndoElement'

class ReplaceFlowmapConnection extends Command {
  constructor(appName, _) {
    super()
    this.appName = appName
  }

  apply(node, key) {
    if (typeof node[key] !== 'undefined' && node[key].trim() === this.appName) {
      var parent = this._walk(node, 4)
      if (parent !== false && parent.style.display !== 'none' && parent.className.includes('ads-application-card')) {
        var original = parent.style.display
        parent.style.display = 'none'
        if (original !== parent.style.display) {
          return new UndoElement(parent.style, 'display', original, 'none')
        }
      }
    }
    return false
  }
}

export default ReplaceFlowmapConnection