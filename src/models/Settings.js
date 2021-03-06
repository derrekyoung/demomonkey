class Settings {
  constructor(settings) {
    this.baseTemplate = typeof settings.baseTemplate === 'string' ? settings.baseTemplate : ''
    this.optionalFeatures = typeof settings.optionalFeatures === 'object' ? settings.optionalFeatures : {}
    this.connectors = typeof settings.connectors === 'object' ? settings.connectors : {}
  }

  isFeatureEnabled(featureName) {
    return typeof this.optionalFeatures[featureName] !== 'undefined' && this.optionalFeatures[featureName] === true
  }

  isConnectedWith(name) {
    return typeof this.connectors[name] !== 'undefined'
  }

  getConnectorCredentials(name) {
    if (this.isConnectedWith(name)) {
      return this.connectors[name]
    }
    return {}
  }
}

export default Settings
