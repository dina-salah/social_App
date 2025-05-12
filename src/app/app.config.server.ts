import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
// import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
      // provideServerRoutesConfig(serverRouts)
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
