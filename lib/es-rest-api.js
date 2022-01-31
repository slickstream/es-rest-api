"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlickstreamRestApiUrlFactory = void 0;
class SlickstreamRestApiUrlFactory {
    constructor(baseApiUrl, apiKey) {
        this.baseApiUrl = baseApiUrl;
        this.apiKey = apiKey;
    }
    getSite() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.site, null).toString();
    }
    getPages() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.pages, null).toString();
    }
    getPage(pageUrl) {
        const result = this.getUrl(SlickstreamRestApiUrlFactory.PATHS.page, null);
        result.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.pageUrl, pageUrl);
        return result.toString();
    }
    getRecommendations(pageUrl, count) {
        const result = this.getUrl(SlickstreamRestApiUrlFactory.PATHS.recommendations, null);
        result.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.pageUrl, pageUrl);
        result.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.count, count.toString());
        return result.toString();
    }
    getSiteMembers() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.siteMembers, null).toString();
    }
    getSiteContentAnalytics() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.siteContentAnalytics, null).toString();
    }
    getAuditSite() {
        return this.getUrl(SlickstreamRestApiUrlFactory.PATHS.auditSite, null).toString();
    }
    getUrl(path, siteCode) {
        const url = new URL(path, this.baseApiUrl);
        url.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.apiKey, this.apiKey);
        if (siteCode) {
            url.searchParams.set(SlickstreamRestApiUrlFactory.PARAMS.siteCode, siteCode);
        }
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
    members: 'members',
};
SlickstreamRestApiUrlFactory.PARAMS = {
    apiKey: 'apiKey',
    pageUrl: 'pageUrl',
    count: 'count',
    siteCode: 'site',
};
//# sourceMappingURL=es-rest-api.js.map