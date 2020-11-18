namespace SlickstreamEngagementSuiteApiV1 {

  export const PATHS = {
    site: 'site',
    pages: 'pages',
    page: 'page',
    recommendations: 'recommendations',
    siteMembers: 'site-members',
    siteContentAnalytics: 'site-content-analytics',
    auditSite: 'audit-site'
  };

  export const PARAMS = {
    apiKey: 'apiKey',
    pageUrl: 'pageUrl',
    count: 'count'
  };

  export class UrlFactory {
    private baseApiUrl: string;
    private apiKey: string;
    constructor(baseApiUrl: string, apiKey: string) {
      this.baseApiUrl = baseApiUrl;
      this.apiKey = apiKey;
    }
    getSite(): string {
      return this.getUrl(PATHS.site).toString();
    }

    getPages(): string {
      return this.getUrl(PATHS.pages).toString();
    }

    getPage(pageUrl: string): string {
      const result = this.getUrl(PATHS.page);
      result.searchParams.set(PARAMS.pageUrl, pageUrl);
      return result.toString();
    }

    getRecommendations(pageUrl: string, count: number): string {
      const result = this.getUrl(PATHS.recommendations);
      result.searchParams.set(PARAMS.pageUrl, pageUrl);
      result.searchParams.set(PARAMS.count, count.toString());
      return result.toString();
    }

    getSiteMembers(): string {
      return this.getUrl(PATHS.siteMembers).toString();
    }

    getSiteContentAnalytics(): string {
      return this.getUrl(PATHS.siteContentAnalytics).toString();
    }

    getAuditSite(): string {
      return this.getUrl(PATHS.auditSite).toString();
    }

    private getUrl(path: string): URL {
      const url = new URL(path, this.baseApiUrl);
      url.searchParams.set(PARAMS.apiKey, this.apiKey);
      return url;
    }
  }

  export interface GetSiteResponse {
    siteCode: string;
    status: string;
    added: number;
    siteHomeUrl: string;
    name: string;
    lastAudit: number;
    last30Days: SiteSummaryAnalytics;
    totalMembers: number;
    indexSummary: IndexSummaryAnalytics;
  }

  export interface GetPagesResponse {
    pages: PageDescriptor[];
    nextPageUrl?: string;
  }

  export interface GetPageResponse {
    page: PageDescriptor;
  }

  export interface GetRecommendationsResponse {
    recommendations: PageDescriptor[];
  }

  export interface GetSiteMembersResponse {
    members: MemberDescriptor[];
    nextPageUrl?: string;
  }

  export interface GetContentAnalyticsResponse {
    items: SiteContentItemAnalytics[];
    nextPageUrl?: string;
  }

  export interface AuditSiteResponse {
    status: string;
  }

  export interface SiteSummaryAnalytics {
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

  export interface IndexSummaryAnalytics {
    sitemapUrls: string[];
    indexedPages: number;
    withImages: number;
    withIngredients: number;
    searchablePages: number;
    recommendablePages: number;
    categories: number;
    ingredients: number;
  }

  export interface PageDescriptor {
    id: string;
    originalUrl: string;
    added: number;
    title?: string;
    description?: string;
    favorites: number;
    favoritesPad: number;
    thumbnailImageUrl?: string;
  }

  export interface MemberDescriptor {
    email: string;
    name: string;
    allowContact: boolean;
    firstSeen: number;
    firstSynced: number;
    lastSeen: number;
    totalFavorites: number;
    authType: string;
  }

  export interface SiteContentItemAnalytics {
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
}
