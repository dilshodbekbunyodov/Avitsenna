// export default defineNuxtRouteMiddleware((to, from) => {
//     const fullPath = to.fullPath.toLowerCase();
//
//     const incorrectPatterns = [
//         /\/slug\/(\?|\?)\w{5}\d{14}(p|c)/,
//         /(\?|\?)\w{5}\d{14}(p|c)/,
//         /\w{5}\d{14}(p|c)/,
//     ];
//
//     const isIncorrect = incorrectPatterns.some(pattern => pattern.test(fullPath));
//
//     if (isIncorrect) {
//         let correctUrl = fullPath.split('/')
//         correctUrl.pop()
//         correctUrl = correctUrl.join('/')
//
//         return navigateTo(correctUrl, { redirectCode: 301 })
//     }
// });

export default defineNuxtRouteMiddleware((to, from) => {
    const fullPath = to.fullPath.toLowerCase();

    const redirectionPatterns = [
        /\/slug\/(\?|\?)\w{5}\d{14}(p|c)/,
        /(\?|\?)\w{5}\d{14}(p|c)/,
        /\w{5}\d{14}(p|c)/,
        /\/wpadmin\/wpadmin\.php\?a\d+\.shtml/
    ];

    const isRedirectionRequired = redirectionPatterns.some(pattern => pattern.test(fullPath));

    if (isRedirectionRequired) {
        return navigateTo('/', { redirectCode: 301 });
    }

    const searchPattern = /^\/search\/(.+)/;
    if (searchPattern.test(fullPath)) {
        const query = fullPath.match(searchPattern)[1];
        return navigateTo(`https://avitsenna.uz/qidiruv/?q=${query}`, { redirectCode: 301, external: true });
    }
});


function checkURLs() {
    const urls = [
        "https://avitsenna.uz/wpadmin/wpadmin.php?a1002137165.shtml",
        "https://avitsenna.uz/wpadmin/wpadmin.php?a1004913045.shtml",
        "https://avitsenna.uz/wpadmin/wpadmin.php?a1002139613.shtml",
        "https://avitsenna.uz/page/15/?phnmo12544473404007p",
        "https://avitsenna.uz/page/72/?dejen12541233008009p",
        "https://avitsenna.uz/search/baliq/",
        "https://avitsenna.uz/search/tez+ozish+yo'llari/"
    ];

    const redirectionPatterns = [
        /\/slug\/(\?|\?)\w{5}\d{14}(p|c)/,
        /(\?|\?)\w{5}\d{14}(p|c)/,
        /\w{5}\d{14}(p|c)/,
        /\/wpadmin\/wpadmin\.php\?a\d+\.shtml/
    ];

    for (const url of urls) {
        const fullPath = url.toLowerCase();
        const isRedirectionRequired = redirectionPatterns.some(pattern => pattern.test(fullPath));
        if (isRedirectionRequired) {
            console.log(`${url}: Redirect required`);
        } else if (/^\/search\/(.+)/.test(fullPath)) {
            const query = fullPath.match(/^\/search\/(.+)/)[1];
            console.log(`${url}: Redirect to search page with query '${query}' required`);
        } else {
            console.log(`${url}: No redirection required`);
        }
    }
}

checkURLs();
