//se usara para definir como compartir los archivos y que compartir
const HtmlwebpackPlugin=require('html-webpack-plugin');
               module.exports={
   module:{

        rules:[
           {
       
                test:/\.js$/,
                use:['babel-loader']
            }
        ]
    }
};
    