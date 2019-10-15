const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const path = require( 'path' );

module.exports = {
   entry: {
      index: './src/js/index.js',
      social: './src/js/social.js',
      work: './src/js/work.js',
      notes: './src/js/notes.js',
      contact: './src/js/contact.js',
   },
   devServer: {
      contentBase: path.join( __dirname, 'dist' ),
      port: 9000,
      open: true
   },
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'js/[name].bundle.js',
   },
   devtool: 'source-map',
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: [ '@babel/preset-env' ]
               }
            }
         },
         {
            test: /\.html$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'html-loader',
                  options: {
                     interpolate: true //para incluir partials
                  }
               }
            ]
         },
         {
            test: [/.css$|.scss$/], // soporte para archivos css y scss
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     sourceMap: true
                  }
               },
               'resolve-url-loader',
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true
                  }
               }
            ],
         },
         {
            test: /\.(png|svg|jpe?g|gif|webp)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: 'images',
                     publicPath: '/images'
                  }
               },
               {
                  loader: 'image-webpack-loader',
                  options: {
                     bypassOnDebug: true,
                  }
               }
            ],
         },
         {
            test: /\.(pdf)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: 'files',
                     publicPath: '/files'
                  }
               }
            ],
         },
         {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader'
         }
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: "css/[name].bundle.css",
         chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
         // title: 'Generando bundle con Webpack',/*Si usas template. no funciona esta linea de código */
         filename: 'index.html',
         template: './src/index.html',
         chunks: [ 'index' ],
      }),
      new HtmlWebpackPlugin({
         filename: 'work.html',
         template: './src/work.html',
         chunks: [ 'work' ],
      }),
      new HtmlWebpackPlugin({
         filename: 'contact.html',
         template: './src/contact.html',
         chunks: [ 'contact' ],
      }),
      new HtmlWebpackPlugin({
         filename: 'notes.html',
         template: './src/notes.html',
         chunks: [ 'notes' ],
      }),
      new HtmlWebpackPlugin({
         filename: 'social.html',
         template: './src/social.html',
         chunks: [ 'social' ],
      }),
   ]
}