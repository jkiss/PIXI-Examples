/*
 * @Author: Nokey 
 * @Date: 2018-03-16 10:40:52 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-03-16 10:45:37
 */
'use strict'; 

module.exports = {
    // Deploy
    public_path: '/home'
    ,port: 8989

    ,pages: [
        // config you page path here
        {
            entry: 'home/index',
            public_name: 'index.html',
            meta: {
                title: ''
                ,desc: ''
                ,image: ''
                ,url: 'https://url/article/new-era-for-china.html'
                ,thumb: 'https://url/article/images/thumb.jpg'
            }
        }

        // ,{
        //     entry: 'about/index',
        //     public_name: 'about/index.html',
        //     meta: {
        //         title: ''
        //         ,desc: ''
        //         ,image: ''
        //         ,url: 'https://url/article/moments-on-world-stage.html'
        //         ,thumb: 'https://url/article/images/page2/thumb.jpg'
        //     }
        // }
    ]
}