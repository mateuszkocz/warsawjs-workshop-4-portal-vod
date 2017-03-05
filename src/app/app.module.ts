import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule, MdButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import {VideosService} from './videos.service';
import { ModalComponent } from './modal/modal.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SearchBarComponent,
    VideosListComponent,
    VideoItemComponent,
    LogoComponent,
    FooterComponent,
    ModalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [VideosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
