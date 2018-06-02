import { Component } from '@stencil/core';

@Component({
  tag: 'product-page',
  styleUrl: 'product-page.scss'
})
export class ProductPage {

  products = [
    {
      title: 'Stenciljs.com',
      description: 'Yep, this site is also built with Stencil!',
      imgPath: '/assets/img/demos/demo-stenciljs',
      demoUrl: 'https://stenciljs.com/',
      sourceUrl: 'https://github.com/ionic-team/stencil-site',
    },
    {
      title: 'IonicHN',
      description: 'Hacker News PWA built with @stencil/core and @ionic/core',
      imgPath: '/assets/img/demos/demo-ionichn',
      demoUrl: 'https://corehacker-10883.firebaseapp.com/',
      sourceUrl: 'https://github.com/ionic-team/ionic-stencil-hn-app'
    },
    {
      title: 'Stencil Fiber demo',
      description: 'This showcases the runtime performance of stencil using our async rendering',
      imgPath: '/assets/img/demos/demo-fiber',
      demoUrl: 'https://stencil-fiber-demo.firebaseapp.com/',
      sourceUrl: 'https://github.com/ionic-team/stencil-fiber-demo'
    },
    {
      title: 'IonicBeer',
      description: 'Beer PWA built with @stencil/core and @ionic/core',
      imgPath: '/assets/img/demos/demo-ionicbeer',
      demoUrl: 'https://stencilbeer.firebaseapp.com/',
      sourceUrl: 'https://github.com/jgw96/stencil-beer'
    },
    {
      title: 'InstaMusic',
      description: 'A full featured music player built with @stencil/core and @ionic/core',
      imgPath: '/assets/img/demos/demo-instamusic',
      demoUrl: 'https://instamusic-c15fe.firebaseapp.com/',
      sourceUrl: 'https://github.com/jgw96/instamusic'
    }
  ];

  constructor() {
    document.title = `Stencil Demo`;
  }

  render() {
    return (
      <div>
        <h1 class="headline measure-md"></h1>
        <div class="demo-card-list">
          {this.products.map(product => {
            return (
              <demo-card
                name={product.title}
                description={product.description}
                imgPath={product.imgPath}
                demoUrl={product.demoUrl}
                sourceUrl={product.sourceUrl}></demo-card>
            );
          })}
        </div>
      </div>
    );
  }
}
