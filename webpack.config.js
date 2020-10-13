import webpack from 'webpack';

const config = {
    context: path.resolve(__dirname, 'app'),
    entry: 'app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.WatchIgnorePlugin(
            [/node_modules/]
        )
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.node = 'production';
}