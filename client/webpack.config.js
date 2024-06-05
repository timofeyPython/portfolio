const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
    const plugins = () => {
        const base = [
            new HtmlWebpackPlugin({
                title: 'JS_Questions',
                template: path.resolve(__dirname, './src/index.html'), // шаблон
                filename: 'index.html', // название выходного файла
            }),
            new CleanWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin(),

        ]

        return base  
    }

    return {
        entry: {
            // main: path.resolve(__dirname, './src/index.js'),
          main: path.resolve(__dirname, './src/index.ts'),  
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@core': path.resolve(__dirname, 'src/core'),
            }
        },
        plugins: plugins(),
        devServer: {
            host: '127.0.0.1',
            port: '3000',
            open: true,
            hot: true,
        },
        module: {
            rules: [
                // ts-loader
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                  },
                // SCCS | CSS
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      // Creates `style` nodes from JS strings
                      "style-loader",
                      // Translates CSS into CommonJS
                      "css-loader",
                      // Compiles Sass to CSS
                      "sass-loader",
                    ],
                },
            ]
        }

     }
}