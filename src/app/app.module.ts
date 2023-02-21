import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { ProfileComponent } from "./profile/profile.component"
import { ToggleComponent } from "./toggle/toggle.component"
import { SocialLinksComponent } from "./social-links/social-links.component"
import { FooterComponent } from "./footer/footer.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ToggleComponent,
    SocialLinksComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
