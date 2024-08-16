import { AppEnvironmentUrlAssets } from './app.environment-url.assets'

export class AppFontUrlAssets {
  private appEnvironmentUrlAssets = new AppEnvironmentUrlAssets()

  // Local
  environment = this.appEnvironmentUrlAssets.localBase
  // Prod
  // environment = this.appEnvironmentUrlAssets.prodBase

  elliotProFont = `${this.environment}fonts/FSElliotPro-Regular.ttf`
  elliotProBoldFont = `${this.environment}fonts/FSElliotPro-Bold.ttf`
}
