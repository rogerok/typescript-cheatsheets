import { exhaustiveCheck } from "./exhaustive_checks";
import { typeGuard } from "./typeguard";

//exhaustiveCheck();
//typeGuard();

interface SliderOptions {
  minValue: number;
  maxValue: number;
}

interface QuoteOptions {
  title: string;
  author: string;
}

interface NewsOptions {
  title: string;
}

type WidgetOptions<T extends string> = T extends "slider"
  ? SliderOptions
  : T extends "quote"
  ? QuoteOptions
  : T extends "news"
  ? NewsOptions
  : never;

interface MainForm {
  options: WidgetOptions<string>;
  title: string;
  widgetType: string;
  widgetId: string;
}
