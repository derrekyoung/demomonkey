import CodeMirror from 'react-codemirror'
import React from 'react'
import PropTypes from 'prop-types'
import Mousetrap from 'mousetrap'

class CodeEditor extends React.Component {

  constructor(props) {
    super(props)
    this.bound = false
  }

  static propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onAutoSave: PropTypes.func.isRequired
  }

  handleChange(content, event) {
    if (event) {
      event.preventDefault()
    }
    // for a non obvious reason the binding does not work on componentDidMount.
    // Until there is a solution, this works ...
    this.bind()
    this.props.onChange(content)
  }

  bind() {
    if (!this.bound) {
      this.bound = true
      var area = document.querySelector('.moustrap-auto-save-area')

      Mousetrap.prototype.stopCallback = () => { return false }

      console.log('BINDING')

      Mousetrap(area).bind('enter', () => {
        console.log('AUTOSAVE')
        this.props.onAutoSave(event)
        return false
      })
    }
  }

  render() {
    return <div className="moustrap-auto-save-area">{window.isTesting === true
      ? <textarea id="contentarea" value={this.props.value} onChange={(event) => this.handleChange(event.target.value, event)} />
      : <CodeMirror value={this.props.value} onChange={(content) => this.handleChange(content)} options={this.props.options}/>
    }</div>
  }
}
export default CodeEditor
