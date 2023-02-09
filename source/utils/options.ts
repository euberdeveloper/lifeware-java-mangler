/**
 * Merges the given options with the default ones
 * @param defaultOptions The default options to consider
 * @returns The merged options
 */
export function generateMergeOptions<Internal extends Record<string, any>, Exported extends Record<string, any>>(
    defaultOptions: Internal
): (options: Exported) => Internal {
    return (options: Exported) => {
        const result: Internal = {} as Internal;
        for (const key in defaultOptions) {
            result[key] = options[key] ?? defaultOptions[key];
        }
        return result;
    };
}
