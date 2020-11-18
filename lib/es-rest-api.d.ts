declare namespace SlickstreamEngagementSuiteApiV1 {
    const PATHS: {
        site: string;
        pages: string;
        page: string;
        recommendations: string;
        siteMembers: string;
        siteContentAnalytics: string;
        auditSite: string;
    };
    const PARAMS: {
        apiKey: string;
        pageUrl: string;
        count: string;
    };
    class UrlFactory {
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
    interface GetSiteResponse {
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
    interface GetPagesResponse {
        pages: PageDescriptor[];
        nextPageUrl?: string;
    }
    interface GetPageResponse {
        page: PageDescriptor;
    }
    interface GetRecommendationsResponse {
        recommendations: PageDescriptor[];
    }
    interface GetSiteMembersResponse {
        members: MemberDescriptor[];
        nextPageUrl?: string;
    }
    interface GetContentAnalyticsResponse {
        items: SiteContentItemAnalytics[];
        nextPageUrl?: string;
    }
    interface AuditSiteResponse {
        status: string;
    }
    interface SiteSummaryAnalytics {
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
    interface IndexSummaryAnalytics {
        sitemapUrls: string[];
        indexedPages: number;
        withImages: number;
        withIngredients: number;
        searchablePages: number;
        recommendablePages: number;
        categories: number;
        ingredients: number;
    }
    interface PageDescriptor {
        id: string;
        originalUrl: string;
        added: number;
        title?: string;
        description?: string;
        favorites: number;
        favoritesPad: number;
        thumbnailImageUrl?: string;
    }
    interface MemberDescriptor {
        email: string;
        name: string;
        allowContact: boolean;
        firstSeen: number;
        firstSynced: number;
        lastSeen: number;
        totalFavorites: number;
        authType: string;
    }
    interface SiteContentItemAnalytics {
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
