import { AppEnvironmentUrlAssets } from './app.environment-url.assets'

export class AppImgUrlAssets {
  private appEnvironmentUrlAssets = new AppEnvironmentUrlAssets()

  // Local
  environment = this.appEnvironmentUrlAssets.localBase
  // Prod
  // environment = this.appEnvironmentUrlAssets.prodBase

  inLogo = '/assets/images/inLogo.svg'
  gitLogo = '/assets/images/gitLogo.svg'
}
