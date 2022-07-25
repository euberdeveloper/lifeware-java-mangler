export function generateMergeOptions<Internal extends Record<string, any>, Exported extends Record<string, any>>(
    defaultOptions: Internal
): (options: Exported) => Internal {
    return (options: Exported) => {
        const result: Internal = { ...defaultOptions };
        for (const key in options) {
            result[key] = options[key] ?? result[key];
        }
        return result;
    };
}
