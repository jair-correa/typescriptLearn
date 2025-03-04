const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/A019-Exercise/A019-Exercise.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.frontend.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',
  
  // Configuração do devServer
  devServer: {
    contentBase: path.join(__dirname, 'frontend'),  // Diretorio onde os arquivos estáticos serão servidos
    compress: true,
    port: 5500, // Porta onde o servidor será iniciado
    historyApiFallback: true, // Se você estiver usando React Router ou SPA, isso resolve o erro 404 nas rotas
    publicPath: '/assets/js/', // Diretório onde os arquivos de bundle.js serão acessados
    open: true, // Abre automaticamente o navegador quando o servidor for iniciado
  },
};
