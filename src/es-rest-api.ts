
export class SlickstreamRestApiUrlFactory {
  static PATHS = {
    site: 'site',
    pages: 'pages',
    page: 'page',
    recommendations: 'recommendations',
    siteMembers: 'site-members',
    siteContentAnalytics: 'site-content-analytics',
    auditSite: 'audit-site'
  };
  static PARAMS = {
    apiKey: 'apiKey',
    pageUrl: 'pageUrl',
    count: 'count'
  };

  private baseApiUrl: string;
  private apiKey: string;
  constructor(baseApiUrl: string, apiKey: string) {
    this.baseApiUrl = baseApiUrl;
    this.apiKey = apiKey;
  }
  getSite(): string {
    return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.site).toString();
  }

  getPages(): string {
    return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.pages).toString();
  }

  getPage(pageUrl: string): string {
    const result = this.getUrl(SlickstreamRestApiUrlFactory.PATHS.page);
    result.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.pageUrl, pageUrl);
    return result.toString();
  }

  getRecommendations(pageUrl: string, count: number): string {
    const result = this.getUrl(SlickstreamRestApiUrlFactory.PATHS.recommendations);
    result.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.pageUrl, pageUrl);
    result.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.count, count.toString());
    return result.toString();
  }

  getSiteMembers(): string {
    return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.siteMembers).toString();
  }

  getSiteContentAnalytics(): string {
    return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.siteContentAnalytics).toString();
  }

  getAuditSite(): string {
    return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.auditSite).toString();
  }

  private getUrl(path: string): URL {
    const url = new URL(path, this.baseApiUrl);
    url.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.apiKey, this.apiKey);
    return url;
  }
}

export interface SlickstreamRestApiGetSiteResponse {
  siteCode: string;
  status: string;
  added: number;
  siteHomeUrl: string;
  name: string;
  lastAudit: number;
  last30Days: SlickstreamRestApiSiteSummaryAnalytics;
  totalMembers: number;
  indexSummary: SlickstreamRestApiIndexSummaryAnalytics;
}

export interface SlickstreamRestApiGetPagesResponse {
  pages: SlickstreamRestApiPageDescriptor[];
  nextPageUrl?: string;
}

export interface SlickstreamRestApiGetPageResponse {
  page: SlickstreamRestApiPageDescriptor;
}

export interface SlickstreamRestApiGetRecommendationsResponse {
  recommendations: SlickstreamRestApiPageDescriptor[];
}

export interface SlickstreamRestApiGetSiteMembersResponse {
  members: SlickstreamRestApiMemberDescriptor[];
  nextPageUrl?: string;
}

export interface SlickstreamRestApiGetContentAnalyticsResponse {
  items: SlickstreamRestApiSiteContentItemAnalytics[];
  nextPageUrl?: string;
}

export interface SlickstreamRestApiAuditSiteResponse {
  status: string;
}

export interface SlickstreamRestApiSiteSummaryAnalytics {
  totalPageviews: number;
  netPageviews: number;
  sessions: number;
  linkClicks: number;
  totalWidgetClicks: number;
  recommendationClicks: number;
  searches: number;
  favorites: number;
  gamesPlayed: number;
}

export interface SlickstreamRestApiIndexSummaryAnalytics {
  sitemapUrls: string[];
  indexedPages: number;
  withImages: number;
  withIngredients: number;
  searchablePages: number;
  recommendablePages: number;
  categories: number;
  ingredients: number;
}

export interface SlickstreamRestApiPageDescriptor {
  id: string;
  originalUrl: string;
  published: number;
  title?: string;
  description?: string;
  favorites: number;
  imageUrl?: string;
}

export interface SlickstreamRestApiMemberDescriptor {
  email: string;
  name: string;
  allowContact: boolean;
  firstSeen: number;
  firstSynced: number;
  lastSeen: number;
  totalFavorites: number;
  authType: string;
}

export interface SlickstreamRestApiSiteContentItemAnalytics {
  pageId: string;
  url: string;
  title: string;
  published: number;
  lastUpdated: number;
  activeTime: number;
  widgetClicks: number;
  linkClicks: number;
  clickthrough: number;
  totalFavorites: number;
  favoritesPerPageview: number;
  pageviews: number;
  immediateBounces: number;
  headerBiddingRevenue: number;
  headerBiddingRpm: number;
}
