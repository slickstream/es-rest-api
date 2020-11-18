"use strict";
var SlickstreamEngagementSuiteApiV1;
(function (SlickstreamEngagementSuiteApiV1) {
    SlickstreamEngagementSuiteApiV1.PATHS = {
        site: 'site',
        pages: 'pages',
        page: 'page',
        recommendations: 'recommendations',
        siteMembers: 'site-members',
        siteContentAnalytics: 'site-content-analytics',
        auditSite: 'audit-site'
    };
    SlickstreamEngagementSuiteApiV1.PARAMS = {
        apiKey: 'apiKey',
        pageUrl: 'pageUrl',
        count: 'count'
    };
    class UrlFactory {
        constructor(baseApiUrl, apiKey) {
            this.baseApiUrl = baseApiUrl;
            this.apiKey = apiKey;
        }
        getSite() {
            return this.getUrl(SlickstreamEngagementSuiteApiV1.PATHS.site).toString();
        }
        getPages() {
            return this.getUrl(SlickstreamEngagementSuiteApiV1.PATHS.pages).toString();
        }
        getPage(pageUrl) {
            const result = this.getUrl(SlickstreamEngagementSuiteApiV1.PATHS.page);
            result.searchParams.set(SlickstreamEngagementSuiteApiV1.PARAMS.pageUrl, pageUrl);
            return result.toString();
        }
        getRecommendations(pageUrl, count) {
            const result = this.getUrl(SlickstreamEngagementSuiteApiV1.PATHS.recommendations);
            result.searchParams.set(SlickstreamEngagementSuiteApiV1.PARAMS.pageUrl, pageUrl);
            result.searchParams.set(SlickstreamEngagementSuiteApiV1.PARAMS.count, count.toString());
            return result.toString();
        }
        getSiteMembers() {
            return this.getUrl(SlickstreamEngagementSuiteApiV1.PATHS.siteMembers).toString();
        }
        getSiteContentAnalytics() {
            return this.getUrl(SlickstreamEngagementSuiteApiV1.PATHS.siteContentAnalytics).toString();
        }
        getAuditSite() {
            return this.getUrl(SlickstreamEngagementSuiteApiV1.PATHS.auditSite).toString();
        }
        getUrl(path) {
            const url = new URL(path, this.baseApiUrl);
            url.searchParams.set(SlickstreamEngagementSuiteApiV1.PARAMS.apiKey, this.apiKey);
            return url;
        }
    }
    SlickstreamEngagementSuiteApiV1.UrlFactory = UrlFactory;
})(SlickstreamEngagementSuiteApiV1 || (SlickstreamEngagementSuiteApiV1 = {}));
