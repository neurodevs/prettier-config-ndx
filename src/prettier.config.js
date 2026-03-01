export default {
    singleQuote: true,
    useTabs: false,
    tabWidth: 4,
    trailingComma: 'es5',
    semi: false,
    overrides: [
        {
            files: [
                '**/*.json',
                '**/*.jsonc',
                '**/*.yaml',
                '**/*.yml',
                '**/*.html',
                '**/*.xml',
                '**/*.css',
                '**/*.scss',
                '**/*.sass',
                '**/*.less',
                '**/*.md',
                '**/*.mdx',
                '**/*.graphql',
                '**/*.gql',
            ],
            options: {
                tabWidth: 2,
            },
        },
    ],
}
