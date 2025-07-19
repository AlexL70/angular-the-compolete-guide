import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app.module";

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Works for standalone components only
// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
