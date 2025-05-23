export function buildRoutePath(path) {
    const routePathParametersRegex = /:([a-zA-z]+)/g;
    const pathWithParams = path.replaceAll(routePathParametersRegex, '(?<$1>[a-z0-9\-_]+)');
    return new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)
}