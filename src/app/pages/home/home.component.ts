import { Component, OnInit } from '@angular/core';
// import { LanguageService } from '@core/language/services/language.service';
// import { StorageService } from '@core/services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  // constructor(private language: LanguageService,
  //             private storage: StorageService) { }
  constructor(private baseUrl: String) { }

  ngOnInit() {
  }

  // setLanguage(lang: string) {
  //   this.language.change(lang);
  //   this.storage.setKey('lang', lang);
  // }

  sendAPI(parameter: string) {
    this.baseUrl = "https://api.iextrading.com/1.0/tops/last?symbols=" + parameter;
  }

}
