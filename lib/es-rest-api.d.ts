export declare class SlickstreamRestApiUrlFactory {
    static PATHS: {
        site: string;
        pages: string;
        page: string;
        recommendations: string;
        siteMembers: string;
        siteContentAnalytics: string;
        auditSite: string;
        hello: string;
        members: string;
    };
    static PARAMS: {
        apiKey: string;
        pageUrl: string;
        count: string;
        siteCode: string;
    };
    private baseApiUrl;
    private apiKey;
    constructor(baseApiUrl: string, apiKey: string);
    getSite(): string;
    getPages(): string;
    getPage(pageUrl: string): string;
    getRecommendations(pageUrl: string, count: number): string;
    getSiteMembers(): string;
    getSiteContentAnalytics(): string;
    getAuditSite(): string;
    private getUrl;
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
    nextPageParam?: string;
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
    author?: string;
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
