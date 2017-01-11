import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LocationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([{path:"Home",component:HomeComponent},
                          {path:"About",component:AboutComponent},
                          {path:"Location",component:LocationComponent},
                          {path:"Contact",component:ContactComponent}
                          ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
