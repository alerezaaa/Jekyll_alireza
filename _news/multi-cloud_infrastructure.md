---
layout: post
title: Manual multi-cloud infrastructure ⸺ links.alirezad.ir
date: 2025-03-24 23:12:34+0330
inline: false
related_posts: false
---

Hello,

I'm glad to announce that I could host my websites on different hosting - FOR FREE!

NOTE: all links and mirrors are available here:
- [links.alirezad.ir](https://links.alirezad.ir) (Hosted on Github Pages)
- [https://alirezad.ir/links](/links/) (Hosted on where the main website loaded based on URL ⸺ see below)

My websites are:
- **My personal website** ([this](/)): [https://alirezad.ir/](https://alirezad.ir/)
- **here and there computer things**: [https://blog.alirezad.ir/](https://blog.alirezad.ir/)
- **a single page CV**: [https://cv.alirezad.ir/](https://cv.alirezad.ir/)
- **My online gallery of taken photos**: [https://photo.alirezad.ir/](https://photo.alirezad.ir/)
- **a blog in Persian language**: [https://note.alirezad.ir/](https://note.alirezad.ir/)

Okay, as I'm a perfectionist, I decided to use most of (maybe all of) free hosting providers to use advantages of each.

First, let's list them:
- **Cloudflare Pages**  ⸺  *based on Cloudflare CDN*
- **Google Firebase** (web.dev)  ⸺  *based on Google Cloud CDN*
- **Github Pages** (well known)  ⸺  *based on Fastly CDN*
- **Vercel**  ⸺  *based on multi-CDN as well (as mentioned in [bejamas](https://bejamas.io/compare): Google Cloud (GCP), AWS)*
- **Netlify**  ⸺  *based on multi-CDN (as mentioned in [bejamas](https://bejamas.io/compare): Google Cloud (GCP), AWS, Digital Ocean, Yandex, Rackspace Cloud)*

There are some others, but I decided to stick with these due to better performance based on [BeJamas.com](https://bejamas.com/compare/).

I assigned a two-letter subdomain for each and select one provider for each website:
- `cf` for Cloudflare
- `gb` for Github
- `vc` for Vercel
- `nf` for Netlify
- `fb` for Firebase

But how to connect to a mirror? EASY, by add a two-letter subdomain to the main website address:
- e.g. for alirezad.ir:
  - `fb.alirezad.ir`
  - `vc.alirezad.ir`
  - `nf.alirezad.ir`
  - !! Note that `alirezad.ir/links` is a part of my personal website, so if you visit `fb.alirezad.ir/links`, the `links` also located on Google Firebase! (nice approach, huh?)
- e.g. for **cv**.alirezad.ir
  - `fb.cv.alirezad.ir`
  - `vc.cv.alirezad.ir`
  - `nf.cv.alirezad.ir`
- e.g. for **photo**.alirezad.ir
  - `fb.photo.alirezad.ir`
  - `vc.photo.alirezad.ir`
  - `nf.photo.alirezad.ir`
 
and so on...

again, all links are available *on specified subdomain **[links.alirezad.ir](https://links.alirezad.ir/)*** or *on subpage of my website **[alirezad.ir/links](/links/)***

How to find the default hosting of each? good question, if you visit *[links.alirezad.ir](https://links.alirezad.ir/)* or *[alirezad.ir/links](/links/)*, scroll down to 'Mirrors',you can see there is a  micro-size dot close the icon of providers listed under each website (pay attention to Cloudflare icon under "My Website" and Firebase icon under "My online CV":

<img width="668" height="884" alt="image" src="https://github.com/user-attachments/assets/220b8245-fd01-49ae-886b-57938b80071f" />


Good time
