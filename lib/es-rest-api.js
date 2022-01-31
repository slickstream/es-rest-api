"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlickstreamRestApiUrlFactory = void 0;
class SlickstreamRestApiUrlFactory {
    constructor(baseApiUrl, apiKey) {
        this.baseApiUrl = baseApiUrl;
        this.apiKey = apiKey;
    }
    getSite() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.site).toString();
    }
    getPages() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.pages).toString();
    }
    getPage(pageUrl) {
        const result = this.getUrl(SlickstreamRestApiUrlFactory.PATHS.page);
        result.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.pageUrl, pageUrl);
        return result.toString();
    }
    getRecommendations(pageUrl, count) {
        const result = this.getUrl(SlickstreamRestApiUrlFactory.PATHS.recommendations);
        result.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.pageUrl, pageUrl);
        result.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.count, count.toString());
        return result.toString();
    }
    getSiteMembers() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.siteMembers).toString();
    }
    getSiteContentAnalytics() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.siteContentAnalytics).toString();
    }
    getAuditSite() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.auditSite).toString();
    }
    getUrl(path) {
        const url = new URL(path, this.baseApiUrl);
        url.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.apiKey, this.apiKey);
        return url;
    }
}
exports.SlickstreamRestApiUrlFactory = SlickstreamRestApiUrlFactory;
SlickstreamRestApiUrlFactory.PATHS = {
    site: 'site',
    pages: 'pages',
    page: 'page',
    recommendations: 'recommendations',
    siteMembers: 'site-members',
    siteContentAnalytics: 'site-content-analytics',
    auditSite: 'audit-site',
    hello: 'hello',
};
SlickstreamRestApiUrlFactory.PARAMS = {
    apiKey: 'apiKey',
    pageUrl: 'pageUrl',
    count: 'count'
};
//# sourceMappingURL=es-rest-api.js.map