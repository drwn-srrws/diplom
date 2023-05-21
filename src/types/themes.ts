export interface IFrontmatter {}

export interface IScope {}

export interface ISource {
  compiledSource: string;
  frontmatter: IFrontmatter;
  scope: IScope;
}

export interface IMeta {
  MainTheme: string;
  PageThemes: [{ name: string; url: string }];
  Test: string;
  //PageThemesUrl: string[];
}

export interface ITheme {
  slug: string;
  source: ISource;
  meta: IMeta;
}
