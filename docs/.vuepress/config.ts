// import { defineUserConfig } from "vuepress-vite";
// import { defaultTheme } from "vuepress"
import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search"

export default defineUserConfig({
    base: '/',
    locales: {
        '/': {
            lang: 'ja',
            title: 'No title',
            description: ' ',
        }
    },
    plugins: [
        searchPlugin({
            locales:{
                '/':{
                    placeholder: 'Search',
                },
            }
        })
    ],
    theme: defaultTheme({
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Bio',
                link: '/bio.html',
            },
            {
                text: 'Blog',
                link: '/post',
            },
        ],
        sidebar:[
            {
                text: 'Blog',
                link: '/post',
            },
        ],
        contributors: false,
    }),
})