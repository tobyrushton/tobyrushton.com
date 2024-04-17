export const cn = (...args: (string | undefined)[]): string =>
    args.filter(Boolean).join(' ')
